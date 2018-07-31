'use strict';

const _ = require('lodash');
const shortid = require('short-id');
const GroupModel = require('./group.model');
const GroupSchema = require('./group.model').GroupSchema;
const CommonHelper = require('../helpers/common.helper.js');

const CommentSchema = new mongoose.Schema({
	text: mongoose.Schema.Types.String,
	votes: {
		agrees: { type: mongoose.Schema.Types.Number, default: 0 },
		disagrees: { type: mongoose.Schema.Types.Number, default: 0 }
	}
}, {
	timestamps: true
});

const ArticleSchema = new mongoose.Schema({
	slug: mongoose.Schema.Types.String,
	title: mongoose.Schema.Types.String,
	articleDate: { type: mongoose.Schema.Types.Date, default: Date.now },
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	pictureLink: mongoose.Schema.Types.String,
	body: mongoose.Schema.Types.String,
	articleLink: mongoose.Schema.Types.String,
	imageLink: mongoose.Schema.Types.String,
	articleSource: mongoose.Schema.Types.String,
	sourceTrusted: mongoose.Schema.Types.Boolean,
	views: { type: mongoose.Schema.Types.Number, default: 0 },
	shares: {
		twitter: { type: mongoose.Schema.Types.Number, default: 0 },
		facebook: { type: mongoose.Schema.Types.Number, default: 0 }
	},
	users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	groups: [{
		group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
		votes: {	// except g11
			agrees: { type: mongoose.Schema.Types.Number, default: 0},	
			disagrees: { type: mongoose.Schema.Types.Number, default: 0 }
		}
	}],
	comments: [CommentSchema],
	locations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Location' }]
}, {
	timestamps: true
});

ArticleSchema.methods.addUser = function(userId) {
	if(_.find(this.users, {_id: userId})) {}
	else {
		this.users.push(userId);
	}
};
ArticleSchema.methods.addComment = function(text) {
	this.comments.push({ text: text });
};
ArticleSchema.methods.addGroups = async function(groups) {
	let indices = [];
	this.groups.forEach ((group, i) =>{
		let indexToDelete = _.findIndex(groups, (newGroup) => {
			return group.group.groupType == newGroup.groupType && group.group.name.toLowerCase() == newGroup.name.toLowerCase();
		})
		if (indexToDelete == -1) {
			indices.push(i);
		}
	})
	console.log(this.groups);
	console.log("groups", groups);
	console.log(indices);
	for (var i = indices.length -1; i >= 0; i--)
   this.groups.splice(indices[i],1);


	let appendingGroups = [];
	for(let group of groups) {
	  let existingGroup = _.find(this.groups, (articleGroup) =>{
	    return group.groupType == articleGroup.group.groupType && group.name.toLowerCase() == articleGroup.group.name.toLowerCase();
	  });
	  if(existingGroup) {
	  }
	  else {
	  	let existingGroup = await GroupModel.findOne({name: { $regex: '^' + group.name.toLowerCase() + '$', $options: 'i'}}).where('groupType').equals(group.groupType).exec();
			if(!(existingGroup)) {
				existingGroup = new GroupModel(group);
				await existingGroup.save();
			}
			appendingGroups.push({ group: existingGroup._id});
	  }
	};
  if(appendingGroups.length > 0) {
  	this.groups = this.groups.concat(appendingGroups);
  }

	return Promise.resolve();
};
ArticleSchema.methods.addLocation = async function(locations) {
	return Promise.resolve();
};
ArticleSchema.methods.voteGroup = function(id, vote) {
  let group = _.find(this.groups, (g) => g._id == id);
  if (group) {
    if(vote == 'agree') {
      group.votes.agrees ++;
    }
    else if(vote == 'disagree') {
      group.votes.disagrees ++; 
    }
    else {
      throw new Error('INVALID_VOTE'); 
    }
  }
  else {
     throw new Error('GROUP_ID_NOT_FOUND');
  }
};

ArticleSchema.methods.voteComment = function(id, vote) {
  let comment = _.find(this.comments, (comment) => comment._id == id);
  if (comment) {
    if(vote == 'agree') {
      comment.votes.agrees ++;
    }
    else if(vote == 'disagree') {
      comment.votes.disagrees ++; 
    }
    else {
      throw new Error('INVALID_VOTE'); 
    }
  }
  else {
     throw new Error('COMMENT_ID_NOT_FOUND');
  }
};

ArticleSchema.pre('save', function(next) {
	this.slug = CommonHelper.generateShortId();
	next();
});

module.exports = mongoose.model('Article', ArticleSchema);

module.exports.GroupSchema = GroupSchema;
module.exports.CommentSchema = CommentSchema;
module.exports.ArticleSchema = ArticleSchema;
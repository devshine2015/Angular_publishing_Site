'use strict';

const express = require('express');
const router = express.Router();
const ArticleModel = require('../models/article.model');
const GroupModel = require('../models/group.model');
const ErrorHelper = require('../helpers/error-helper');
const _ = require('lodash');

const index = async function(req, res) {
  try {
    let articles = await ArticleModel.find().populate('user').populate('users').populate('groups.group').populate('locations').exec();
    res.send(articles);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const search = async function(req, res) {
  try {
    let query = _.pick(req.query, [ 'search', 'views', 'periodStart', 'periodEnd', 'stateView', 'filter', 'user', 'location', 'group' ]);
    let builder = ArticleModel.find();

    //search text
    if(query.search && query.search.trim() != '') {
      builder = builder.or([{ 
        title: { $regex: query.search, $options: 'i' } 
      },{ 
        body: { $regex: query.search, $options: 'i' } 
      }]);
    }

    // period
    if(query.periodStart) {
      builder = builder.where('createdAt').gte(query.periodStart);
      builder = builder.where('comments.createdAt').gte(query.periodStart);
    }
    if(query.periodEnd) {
      builder = builder.where('createdAt').lte(query.periodEnd);
      builder = builder.where('comments.createdAt').lte(query.periodEnd);
    }

    // user
    if(query.user) {
      builder = builder.where('users').equals(query.user);
    }

    // location
    if(query.location) {
      builder = builder.where('locations').equals(query.location);
    }

    // group
    if(query.group) {
      builder = builder.where('groups').elemMatch({ group: query.group });
    }

    query.filter = JSON.parse(query.filter);
    for(let g in query.filter) {
      let value = query.filter[g];
      if(value == '') continue;
      let existingGroup = await GroupModel.findOne({name: { $regex: '^' + value.toLowerCase() + '$', $options: 'i'}}).where('groupType').equals(g).exec();
      if(existingGroup == null) {
        res.send([]);
        return;
      }
      builder = builder.where('groups').elemMatch({ group: existingGroup._id });
    }

    // sort
    if(query.views == 'LATEST') {
      builder = builder.sort('-createdAt');
    }
    else if(query.views == 'Views') {
      builder = builder.sort('-views');
    }

    let articles = await builder.populate('user').populate('users').populate('groups.group').populate('locations').exec();

    // state
    if(query.views == 'S1' || query.views == 'S2' || query.views == 'S3') {
      _.each(articles, (article) => {
        article.groups = _.filter(article.groups, (group) => {
          return group.group.state == query.views;
        });
      });
    }

    res.send(articles);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const get = async function(req, res) {
  try {
    let article = await ArticleModel.findById(req.params.id).populate('user').populate('users').populate('groups.group').populate('locations').exec();
    if (article == null) throw new Error('ARTICLE_ID_NOT_FOUND');
    res.send(article);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const create = async function(req, res) {
  try {
    let article = new ArticleModel(req.body.article);

    // article.addUser(req.user._id);
    article.addUser("599582a9faedf727c8ebc178");

    article.addComment(req.body.comment);

    await article.addGroups(req.body.groups);

    await article.save();

    article = await ArticleModel.findById(article._id).populate('user').populate('users').populate('groups.group').populate('locations').exec();
    res.send(article);
  }
  catch(err) {
    console.log(err);
    ErrorHelper.handleError(res, err, 400);
  }
};

const update = async function(req, res) {
  try {
    await ArticleModel.update({_id: req.params.id}, req.body).exec();
    let article = await ArticleModel.findById(req.params.id).populate('user').populate('users').populate('groups.group').populate('locations').exec();
    if (article == null) throw new Error('ARTICLE_ID_NOT_FOUND');
    res.send(article);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const edit = async function(req, res) {
  try {
    let article = await ArticleModel.findById(req.params.id).populate('user').populate('users').populate('groups.group').populate('locations').exec();
    if (article == null) throw new Error('ARTICLE_ID_NOT_FOUND');

    // article.addUser(req.user._id);

    article.addComment(req.body.comment);

    await article.addGroups(req.body.groups);

    await article.save();

    article = await ArticleModel.findById(req.params.id).populate('user').populate('users').populate('groups.group').populate('locations').exec();
    res.send(article);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
}

const destroy = async function(req, res) {
  try {
    await ArticleModel.deleteOne({_id: req.params.id});
    res.send(true);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
}

const voteGroup = async function(req, res) {
  try {
    let article = await ArticleModel.findById(req.params.id).exec();
    if (article == null) throw new Error('ARTICLE_ID_NOT_FOUND');

    article.voteGroup(req.params.groupId, req.params.vote);

    await article.save();

    article = await ArticleModel.findById(req.params.id).populate('user').populate('users').populate('groups.group').populate('locations').exec();
    res.send(article);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
}

const voteComment = async function(req, res) {
  try {
    let article = await ArticleModel.findById(req.params.id).exec();
    if (article == null) throw new Error('ARTICLE_ID_NOT_FOUND');

    article.voteComment(req.params.commentId, req.params.vote);

    await article.save();

    article = await ArticleModel.findById(req.params.id).populate('user').populate('users').populate('groups.group').populate('locations').exec();
    res.send(article);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
}

// routes

//FUNCTIONAL
router.get('/search', search);
router.put('/:id/edit', edit);
router.post('/:id/group/:groupId/vote/:vote', voteGroup);
router.post('/:id/comment/:commentId/vote/:vote', voteComment);
//CRUD
router.get('/', index);
router.get('/:id', get);
router.post('/', create);
router.put('/:id',  update);
router.delete('/:id', destroy);

module.exports = router;
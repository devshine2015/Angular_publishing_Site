import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../shared/services/dataService';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'articleAgreeDialog',
  templateUrl: './articleAgreeDialog.component.html',
  styleUrls: ['./articleAgreeDialog.component.css']
})
export class ArticleAgreeDialog {

  public title : any;
  public node: any;

  constructor(@Inject(MD_DIALOG_DATA) data: any, public dialogRef: MdDialogRef<ArticleAgreeDialog>, private restangular: Restangular) {
    this.dialogRef.updateSize('300', '300');
    this.node = data.node;
  }

  ngOnInit() {
    if (this.node.nodeData.g == 'g5') { // g5:comment
      this.title = 'Comment';
    } else {
      this.title = this.node.group.name;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  vote(vote:string) {
    this.restangular.one('article', this.node.nodeData.article_id).one(this.node.nodeData.g == 'g5' ? 'comment' : 'group', this.node._id).customPOST({}, 'vote/' + vote).subscribe(res => {
      if(vote == 'agree') this.node.votes.agrees ++;
      else if(vote == 'disagree') this.node.votes.disagrees ++;
      this.dialogRef.close();
    });
  }
}

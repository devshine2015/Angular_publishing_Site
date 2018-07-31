import { Component, ChangeDetectorRef, ViewChild, ElementRef, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA, MdChipInputEvent, ENTER } from '@angular/material';
import { Restangular } from 'ngx-restangular';
import * as _ from 'lodash';

const COMMA = 188;


@Component({
  selector: 'article-dialog',
  styleUrls: ['./articleFormDialog.component.css'],
  templateUrl: './articleFormDialog.component.html',
})
export class ArticleFormDialog {

  node: any;
  groups: any = [];
  comment: string = "";

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];


  constructor(@Inject(MD_DIALOG_DATA) data: any, public dialogRef: MdDialogRef<ArticleFormDialog>, private restangular: Restangular) {
    this.dialogRef.updateSize('300', '300');
    this.dialogRef.updatePosition({ top: '50px', right: '0px' });
    this.node = data.node;
  }

  

  ngOnInit() {
    this.node.groups.forEach((group) => {
      if (!this.groups[group.group.groupType]) {
        this.groups[group.group.groupType] = [];
      }
      this.groups[group.group.groupType].push(group.group.name);
    })
  }

  closeDialog(success: boolean = false) {
    this.dialogRef.close(success);
  }

  publish() {
    let groupsData = _.chain(this.groups).mapValues((gs: any, gt) => { return _.map(gs, (g) => { return { groupType: gt, name: g}; }); }).values().flatten().value();
    if (!this.comment.length || !groupsData.length) {
      return;
    }
    var postData = {"comment" : this.comment, "groups": groupsData};
    this.restangular.one('article', this.node._id).customPUT(postData, 'edit').subscribe(res => {
      this.closeDialog(true);
    });
  }

  add(event: MdChipInputEvent, groupType: any): void {
    let input = event.input;
    let value = event.value;

    // Add our person
    if ((value || '').trim()) {
      if (!this.groups[groupType]) {
        this.groups[groupType] = [];
      }

      // if (this.groups[groupType].length > 1) return; // Prevent being more than 2 groups.
      this.groups[groupType].push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(groupName: any, groupType: any): void {
    let index = this.groups[groupType].indexOf(groupName);

    if (index >= 0) {
      this.groups[groupType].splice(index, 1);
    }
  }
}

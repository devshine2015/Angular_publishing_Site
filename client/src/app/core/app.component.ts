import { Component } from '@angular/core';
import { ArticleFormDialog } from '../modules/articles/articleFormDialog.component';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Placeholder for some tag line in the future';
  constructor(public dialog: MdDialog) {}
}

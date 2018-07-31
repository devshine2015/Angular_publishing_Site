import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MdChipsModule, MdCardModule, MdInputModule, MdIconModule, MdToolbarModule, MdSelectModule, MdButtonModule, MdMenuModule, MdOptionModule, MdSlideToggleModule, MdDialogModule } from '@angular/material';
import { RestangularModule } from 'ngx-restangular';
import 'hammerjs';
import { AppComponent } from './app.component';
import { ArticleFormDialog } from '../modules/articles/articleFormDialog.component';
import { ArticleAgreeDialog } from '../modules/articles/articleAgreeDialog.component';
import { LandingComponent } from '../modules/landing/landing.component';
import { D3Service } from '../shared/services/D3Service';
import { AppConfig } from "./app.config";
import { Ng2MultiStepFormRoutingModule } from './app-routing.module';

export function RestangularModuleConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl(AppConfig.API_ENDPOINT);
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent, ArticleAgreeDialog, ArticleFormDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdToolbarModule,
    MdMenuModule,
    MdOptionModule,
    MdIconModule,
    MdChipsModule,
    MdSelectModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdDialogModule,
    MdCardModule, 
    MdInputModule, 
    Ng2MultiStepFormRoutingModule,
    RestangularModule.forRoot(RestangularModuleConfigFactory),
  ],
  providers: [ D3Service ],
  entryComponents: [ArticleAgreeDialog, ArticleFormDialog],
  bootstrap: [AppComponent]

})

export class AppModule { }

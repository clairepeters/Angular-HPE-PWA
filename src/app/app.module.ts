




import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DocumentsListComponent } from './documents-list/documents-list.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { MoreDataComponent } from './more-data/more-data.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { NbThemeModule, NbLayoutModule, NbTabsetModule,NbRouteTabsetModule, NbCardModule, NbButtonModule, NbActionsModule, NbIconModule, NbTreeGridModule, } from '@nebular/theme';
import { NbListModule,  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
  
} from '@nebular/auth';
@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot([
      { path: 'bookmarks', component: BookmarksComponent },
      { path: 'DOC_DATA/:id', component: DocumentDetailsComponent },
      { path: 'documents-list', component: DocumentsListComponent },
      { path: 'more-data', component: MoreDataComponent },
      {path: '',component: NbAuthComponent,
      children: [
        {
          path: '',
          component: NbLoginComponent,
        },
        {
          path: 'login',
          component: NbLoginComponent,
        },
        {
          path: 'register',
          component: NbRegisterComponent,
        },
        {
          path: 'logout',
          component: NbLogoutComponent,
        },
        {
          path: 'request-password',
          component: NbRequestPasswordComponent,
        },
        {
          path: 'reset-password',
          component: NbResetPasswordComponent,
        },
      ],}
    ]),
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    NbTabsetModule, NbListModule,
    NbCardModule, NbActionsModule,
    NbRouteTabsetModule, NbIconModule, NbTreeGridModule, 
    NbButtonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,

    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    }), 

  ],
  declarations: [
    AppComponent,
    BookmarksComponent,
    TopbarComponent,
    DocumentsListComponent,
    DocumentDetailsComponent,
    MoreDataComponent,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

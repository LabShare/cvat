import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskConfigurationModalComponent } from './task-configuration-modal/task-configuration-modal.component';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskConfigurationModalComponent,
    LoginComponent,
    DashboardItemComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({ cookieName: 'csrftoken', headerName: 'x-csrftoken' }),
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgSelectModule
  ],
  providers: [CookieService],


  bootstrap: [AppComponent],
  entryComponents: [TaskConfigurationModalComponent, DashboardItemComponent]
})
export class AppModule { }

//providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true } ],

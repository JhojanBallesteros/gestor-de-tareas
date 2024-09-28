import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarModule, BreadcrumbModule, FooterModule, DropdownModule, GridModule, HeaderModule, SidebarModule, NavModule, ButtonModule, FormModule, UtilitiesModule, ButtonGroupModule, SharedModule, TabsModule, ListGroupModule, ProgressModule, BadgeModule, CardModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultHeaderComponent } from './layout/default-header/default-header.component';


const APP_CONTAINERS = [
  DefaultHeaderComponent,
  DefaultLayoutComponent
];

@NgModule({
  declarations: [
    AppComponent, ...APP_CONTAINERS],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgScrollbarModule,


  ],
  providers: [
    IconSetService,
    Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

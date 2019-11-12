import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CourseComponent } from './model/entity/course/course.component';
import { InstructorComponent } from './model/entity/instructor/instructor.component';
import {InstructorsData} from './model/db/in-memory-db';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseComponent,
    InstructorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InstructorsData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

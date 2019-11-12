import {Component, OnInit} from '@angular/core';
import {FormStyle, getLocaleDayNames, TranslationWidth} from '@angular/common';
import {InstructorService} from '../model/service/instructorService/instructor.service';
import {InstructorsData} from '../model/db/in-memory-db';
import {InstructorComponent} from '../model/entity/instructor/instructor.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  days: string[];
  rooms: string[];
  hours: string[];
  instructorsService : InstructorService;
  instructors : InstructorComponent[];

  constructor(instructorsService: InstructorService){
    this.instructorsService = instructorsService;
  }


  ngOnInit() {
    const weekDays = getLocaleDayNames('en-US', FormStyle.Standalone, TranslationWidth.Wide);
    //slice to remove saturday and sunday;
    this.days = weekDays.slice(1, weekDays.length - 1);
    this.rooms = ['BAZA', 'KOSMOS', 'LABIRYNT'];
    this.hours = ['17:00', '18:00', '19:05', '20:10', '21:15', '22:15'];
    this.instructors = this.instructorsService.getInstructors();
  }
}

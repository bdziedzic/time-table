import { Injectable } from '@angular/core';
import { InstructorsData} from '../../db/in-memory-db';
import {InstructorComponent} from '../../entity/instructor/instructor.component';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  private instructorsData: InstructorsData;

  constructor(instructorsData: InstructorsData) {
    this.instructorsData = instructorsData;
  }

  public getInstructors(){
    return this.instructorsData._instructors;
  }


}





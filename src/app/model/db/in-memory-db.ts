import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {InstructorComponent} from '../entity/instructor/instructor.component';

@Injectable({
  providedIn: 'root'
})
export class InstructorsData implements InMemoryDbService{


  public _instructors;

  constructor() {
    this._instructors = this.createInstructorList();
  }

/* public get instructors() {
    return this._instructors;
  }*/

   set instructors(value) {
    this._instructors = value;
  }

  createDb(){
      return [
       {id: 1, name: 'Mimie', surname: 'nazwisko', sex: 'M'},
       {id: 2, name: 'fFimie', surname: 'nazwisko', sex: 'F'},
       {id: 3, name: 'mMmimie', surname: 'nazwisko', sex: 'M'},
       {id: 4, name: 'MmmMimie', surname: 'nazwisko', sex: 'M'}
     ];
  }

  createInstructorList(): InstructorComponent[] {
      let instructorsListData: { id: number, name: string , surname: string, sex: string;}[] = this.createDb();
      let instructors = new Array(instructorsListData.length);
      let i = -1;
      instructorsListData.forEach(value => {
          instructors[i++] = new InstructorComponent(value.id, value.name, value.surname, value.sex);
        }
      );
     return instructors;
  }
}

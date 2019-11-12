import { Component, OnInit } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {


  private _name: string;
  private _surname: string;
  private _sex: string;
  private _id: number;


  constructor(id: number, name: string, surname: string, sex: string) {
    this._name = name;
    this._surname = surname;
    this._sex = sex;
    this._id = id;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get sex(): string {
    return this._sex;
  }

  set sex(value: string) {
    this._sex = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  ngOnInit() {
  }

}

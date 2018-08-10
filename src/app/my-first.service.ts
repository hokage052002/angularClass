import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  people = [
    {
      person: {
        name: '',
        email: '',
        phone: ''
      },
      person1: {
        name: '',
        email: '',
        phone: ''
      }
    }
  ];
  constructor() { }

  getPeople() {
    return this.people;
  }

  postPeople(person) {
    this.people.push(person);

  }
}


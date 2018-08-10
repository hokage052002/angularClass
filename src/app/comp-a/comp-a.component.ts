import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MyFirstService} from './../my-first.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  anything = 3 ;
  person = {
    name : '',
    email: '',
    phone: ''
  };


  constructor(private route: Router, private myService: MyFirstService) { }

  ngOnInit() {
  }

  goto(x) {
    if (x > 2) {
      this.route.navigateByUrl('/test');
    }  else {
      this.anything = this.anything * x;
      alert ('wrong number!');

      console.log(this.anything);
    }
  }
  clickMe() {
    this.myService.people[0].person1.email = this.person.email;
    console.log(this.person);
    this.getPerson();
  }

  getPerson() {
   const me = this.myService.getPeople();
console.log(me);
  }
}

// let message = 'abc';
// let ensWithC = message.endsWith('c')

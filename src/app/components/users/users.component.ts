import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded = false;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};

  constructor() { }

  ngOnInit() {


      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MAS'
          },
          isActive: true,
          registered: new Date('01/01/2018  08:30:00')
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 44,
          address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MAS'
          },
          isActive: false,
          registered: new Date('03/11/2017  06:30:00')
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'Flo'
          },
          isActive: true,
          registered: new Date('11/02/2016  10:30:00')
        },
      ];
      this.loaded = true;

  }


  addUser(user: User) {
    this.users.push(user);
  }

}


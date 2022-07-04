import { Component, Injectable, OnInit } from '@angular/core';
import { UsersService } from '../services/users.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})

@Injectable()

export class InactiveUsersComponent implements OnInit{
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  users: string[];

  constructor(private usersService: UsersService) {};

  ngOnInit(): void {

  this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}

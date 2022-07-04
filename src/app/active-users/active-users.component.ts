import { Component, Injectable, OnInit } from '@angular/core';
import { UsersService } from '../services/users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})

@Injectable()

export class ActiveUsersComponent implements OnInit {
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();
  users: string[];

  constructor(private usersService: UsersService) {};

  ngOnInit(): void {
      this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    // this.usersService.userSetToInactive.emit(id);
    this.usersService.setToInactive(id);
  }
}

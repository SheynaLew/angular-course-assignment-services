import { Component, Injectable, Input } from '@angular/core';
import { UsersService } from '../services/users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})

@Injectable()

export class ActiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {};

  onSetToInactive(id: number) {
    this.usersService.userSetToInactive.emit(id);
  }
}

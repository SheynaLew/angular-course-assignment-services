import { Component, Injectable, Input } from '@angular/core';
import { UsersService } from '../services/users.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})

@Injectable()

export class InactiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {};

  onSetToActive(id: number) {
    this.usersService.userSetToActive.emit(id);
  }
}

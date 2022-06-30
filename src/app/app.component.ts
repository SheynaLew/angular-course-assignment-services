import { Component } from '@angular/core';
import { UsersService } from './services/users.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  constructor(private usersService: UsersService) {};

  onSetToInactive(id: number) {
    // this.inactiveUsers.push(this.activeUsers[id]);
    this.usersService.inactiveUsers.push(this.usersService.activeUsers[id]);
    // this.activeUsers.splice(id, 1);
    this.usersService.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    // this.activeUsers.push(this.inactiveUsers[id]);
    this.usersService.activeUsers.push(this.usersService.inactiveUsers[id]);
    // this.inactiveUsers.splice(id, 1);
    this.usersService.inactiveUsers.splice(id, 1);
  }
}

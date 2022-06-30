import { Component } from '@angular/core';
import { UsersService } from './services/users.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // activeUsers = ['Max', 'Anna'];
  activeUsers: string[] = [];
  // inactiveUsers = ['Chris', 'Manu'];
  inactiveUsers: string[] = [];

  constructor(private usersService: UsersService) {
    this.usersService.userSetToInactive.subscribe(
      (id: number) => this.usersService.onSetToInactive(id)
    );

    this.usersService.userSetToActive.subscribe(
      (id: number) => this.usersService.onSetToActive(id)
    )
  };

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  // onSetToInactive(id: number) {
    // this.inactiveUsers.push(this.activeUsers[id]);
    // this.usersService.inactiveUsers.push(this.usersService.activeUsers[id]);
    // this.activeUsers.splice(id, 1);
    // this.usersService.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
    // this.activeUsers.push(this.inactiveUsers[id]);
    // this.usersService.activeUsers.push(this.usersService.inactiveUsers[id]);
    // this.inactiveUsers.splice(id, 1);
    // this.usersService.inactiveUsers.splice(id, 1);
  // }
}

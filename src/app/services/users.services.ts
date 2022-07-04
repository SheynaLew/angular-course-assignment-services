import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({providedIn: 'root'})

export class UsersService {
  constructor(private counterService: CounterService)  {};

  // switchedToInactive: number = 0;
  // switchedToActive: number = 0;

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];


  setToInactive(id: number, n: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    n = 1;
    this.counterService.incrementInactive(n);


    // this.counterService.activeToInactive = this.counterService.activeToInactive + 1;
    // console.log("activeToInactive", this.counterService.activeToInactive);

}

  setToActive(id: number, n: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    n = 1;
    this.counterService.incrementActive(n);

    // this.counterService.inactiveToActive = this.counterService.inactiveToActive + 1;
    // console.log("inactiveToActive", this.counterService.inactiveToActive);
}

}

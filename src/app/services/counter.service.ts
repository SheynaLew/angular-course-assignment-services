import { Injectable, EventEmitter } from "@angular/core";
import { UsersService } from "./users.services";

@Injectable({providedIn: 'root'})

export class CounterService {

  // constructor(private usersService: UsersService) {}

  activeToInactive = 0;

  inactiveToActive = 0;

  incrementInactive(n: number) {
    this.activeToInactive+=n;
    console.log("active to inactive in counter service", this.activeToInactive);
  }

  incrementActive(n: number) {
    this.inactiveToActive+=n;
    console.log("inactive to active in counter service", this.inactiveToActive);
  }
}

//when the usersSetToInactive event emitter from the UsersService is called, add 1 to the activeToInactive variable.
//when the usersSetToActive event emitter from the UsersService is called, add 1 to the activeToActive variable.

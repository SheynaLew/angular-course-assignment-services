import { Injectable, EventEmitter } from "@angular/core";

@Injectable({providedIn: 'root'})

export class CounterService {
  activeToInactive = 0;

  inactiveToActive = 0;
}

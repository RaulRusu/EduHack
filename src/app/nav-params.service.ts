import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavParamsService {
  private stack: Array<any>;
  constructor() {
    this.stack = new Array<any>();
  }

  pushBack(data) {
    this.stack.push(data);
  }

  popBack() {
    return this.stack.pop();
  }
}

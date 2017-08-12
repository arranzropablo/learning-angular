import { Injectable } from '@angular/core';
import { List } from '../classes/list';

@Injectable()
export class DesiresService {

  lists:List[] = [];

  constructor() {
    this.loadLists();
  }

  loadLists(){
    if (localStorage.getItem("lists")) {
      this.lists = JSON.parse(localStorage.getItem("lists"));
    }
  }

  saveLists(){
    localStorage.setItem("lists", JSON.stringify(this.lists));
  }

  addList(list:List){
    this.lists.push(list);
    this.saveLists();
  }

  removeList(idx:number){
    this.lists.splice(idx,1);
    this.saveLists();
  }

}

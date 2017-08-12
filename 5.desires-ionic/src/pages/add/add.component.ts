import { Component, OnInit } from '@angular/core';
import { ListItem, List } from '../../app/classes/index';
import { AlertController, NavController } from 'ionic-angular';
import { DesiresService } from '../../app/services/desires.service';

@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {

  listName:string = "";
  itemName:string = "";
  items:ListItem[] = [];

  constructor( private alertController:AlertController, private navController:NavController, private desiresService:DesiresService) {  }

  ngOnInit() {}

  addItem(){
    if(this.itemName.length!=0){
      let item = new ListItem(this.itemName);

      this.items.push(item);
      this.itemName="";
    }
  }

  deleteItem(index:number){
    this.items.splice(index, 1);
  }

  saveList(){

    if(this.listName.length==0){
      let alert = this.alertController.create({
        title: 'List name.',
        subTitle: 'You didn\'t give a name to the list',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    if(this.listName.length > 0){
      let list = new List(this.listName);
      list.items = this.items;

      this.desiresService.addList(list);
      this.navController.pop();
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  itemBeingEdited: string = null;

  equipment: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks']

  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    if (this.equipment.some((element: string) => element === item)){
      return;
    } else this.equipment.push(item)
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  save(item: string) {
    let index = this.equipment.indexOf(this.itemBeingEdited)
    this.equipment[index] = item;
  }
}

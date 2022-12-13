import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = ['Mars soil sample','Plant growth in habitat','Human bone density'];
  itemBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }
  add(item: string) {
    if (this.experiments.some((element: string) => element === item)){
      return;
    } else this.experiments.push(item)
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  remove(item: string) {
    let index = this.experiments.indexOf(item);
    this.experiments.splice(index, 1);
  }

  save(item: string) {
    let index = this.experiments.indexOf(this.itemBeingEdited)
    this.experiments[index] = item;
  }
}

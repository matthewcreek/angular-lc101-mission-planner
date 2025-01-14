import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  memberBeingEdited: object = null;

  crew: object[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true }
  ];


  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    interface CrewMember {
      name: string;
      firstMission: boolean;
    }
    if (this.crew.some((element: CrewMember) => element.name === memberName)) {
      return;
    } else {
      this.crew.push({ name: memberName, firstMission: isFirst });
    }
  }
  remove(member: object): void {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }
  edit(member: object): void {
    this.memberBeingEdited = member;
  }
  save(name: string, member: object): void {
    member['name'] = name;
    this.memberBeingEdited = null;
  }
}

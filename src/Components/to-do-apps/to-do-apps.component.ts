import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-apps',
  templateUrl: './to-do-apps.component.html',
  styleUrls: ['./to-do-apps.component.css']
})
export class ToDoAppsComponent implements OnInit {
  list: any = []
  task: string = "";
  constructor() { }
  ngOnInit() {
    this.GetAll();
  }
  Save() {
    localStorage.setItem("todo", JSON.stringify(this.list));
  }
  GetAll() {
    let value = localStorage.getItem("todo");
    if (value != '' && value != null && typeof value != "undefined") {
      this.list = JSON.parse(value!);
    }
  }
  Add() {
    let obj = {
      TaskName: this.task,
      IsComplete: false
    };
    this.list.push(obj);
    this.Save();
    this.task = '';
  }
  Delete(index: number) {
    if (this.list.length > index) {
      this.list.splice(index, 1);
      this.Save();
    }
  }
  DeleteAll() {
    this.list = [];
    this.Save();
  }
  ChangeStatus(index: number, currentValue: boolean) {
    if (this.list.length > index) {
      let obj = this.list[index];
      if (obj != null && typeof obj != "undefined") {
        obj.IsComplete = !currentValue;
        this.list[index] = obj;
        this.Save();
      }
    }
  }
}
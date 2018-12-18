import { Component, OnInit } from '@angular/core';
import {TaskModel} from '../../models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newTask: TaskModel;

  constructor() { }

  ngOnInit() {
  }

}

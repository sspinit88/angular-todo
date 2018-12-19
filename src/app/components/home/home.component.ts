import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    addNewOneTask(task) {
        // this.newTaskThis.push(task);
        console.log('-> home', task);
    }

}

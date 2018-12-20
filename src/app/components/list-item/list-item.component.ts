import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {TaskModel} from '../../models/task.model';


@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

    // @Input говорит, что переменная task с типом TaskModel ожидает приема данных.
    @Input() task: TaskModel;

    @Output() delete = new EventEmitter();

    @Output() editOneTask = new EventEmitter<TaskModel>();

    constructor() {
    }

    ngOnInit() {
    }

    deleteOneTask() {
        this.delete.emit(this.task.id);
    }

    editTask() {
        const updateTask = Object.assign({}, this.task);
        this.editOneTask.emit(updateTask);
    }

}

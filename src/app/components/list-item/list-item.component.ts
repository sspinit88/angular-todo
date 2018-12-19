import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {TaskModel} from '../../models/task.model';
import {JsonPlaceholderService} from '../../services/json-placeholder-service.service';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

    // @Input говорит, что переменная task с типом TaskModel ожидает приема данных.
    @Input() task: TaskModel;

    @Output() delete = new EventEmitter();

    constructor(
    ) {}

    ngOnInit() {
    }

    deleteOneTask() {
        this.delete.emit(this.task.id);
    }

}

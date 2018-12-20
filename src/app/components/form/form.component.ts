import {Component, OnInit, ViewChild} from '@angular/core';

import {JsonPlaceholderService} from '../../services/json-placeholder-service.service';
import {TaskModel} from '../../models/task.model';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    title: string;
    isEdit: boolean;

    @ViewChild('form') form;

    constructor(
        private server: JsonPlaceholderService
    ) {
    }

    ngOnInit() {
        // subscribe on edit
        this.server.newEditTask.subscribe((task: TaskModel) => {
            if (task.title) {
                this.isEdit = true;
            }
        });
    }

    spanText() {
        return 'Input task.';
    }

    addTask() {
        const newTask = {
            userId: 1,
            completed: false,
            title: this.title
        };
        this.server.addTask(newTask).subscribe((response: TaskModel) => {
            this.server.emitAddTask(response);
            this.form.reset();
        });
    }

    editTask() {

    }

}

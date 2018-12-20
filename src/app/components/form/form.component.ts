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
    currentTaskId: number;

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
                // текущее значение title, которое будут редактировать
                // будем подставлять в строку input'a содержимое title редактируемой задачи.
                this.title = task.title;
                // записываем id редактируемой задачи
                this.currentTaskId = task.id;
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
        const updateTask = {
            id: this.currentTaskId,
            userId: 1,
            completed: false,
            title: this.title
        };
        this.server.editTask(updateTask)
            .subscribe((response) => {
              //  console.log('edit task', response);
                this.form.reset();
                // далее воспользуемся updateTaskSourse
                this.server.emitUpdateTask(response);
            });
    }
}

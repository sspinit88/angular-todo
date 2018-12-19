import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {JsonPlaceholderService} from '../../services/json-placeholder-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TaskModel} from '../../models/task.model';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    form: FormGroup;

    @Output() newOneTask = new EventEmitter<TaskModel>();

    constructor(
        private server: JsonPlaceholderService
    ) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            'text': new FormControl(null, [Validators.required])
        });
    }

    spanText() {
        return 'Input task.';
    }

    addTask() {
        const title: string = this.form.value;

        const newTask = {
            userId: 1,
            completed: false,
            title: title
        };

        this.server.addTask(newTask).subscribe((response) => {
            console.log('from ->', response);
            this.newOneTask.emit(response);
            this.form.reset();
        });
    }

}

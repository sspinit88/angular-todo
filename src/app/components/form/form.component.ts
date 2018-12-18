import {Component, OnInit} from '@angular/core';

import {JsonPlaceholderService} from '../../services/json-placeholder-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    form: FormGroup;

    constructor(
        private server: JsonPlaceholderService
    ) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            'text': new FormControl(null, [Validators.required])
        });
    }

    addTask() {
        const title: string = this.form.value;

        const newTask = {
            userId: 1,
            complated: false,
            title: title
        };

        this.server.addTask(newTask).subscribe((response) => {
            console.log(response);
        });
    }

}

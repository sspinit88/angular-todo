import {Component, OnInit, ViewChild} from '@angular/core';

import {JsonPlaceholderService} from '../../services/json-placeholder-service.service';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    @ViewChild('form') form;

    constructor(
        private server: JsonPlaceholderService
    ) {
    }

    ngOnInit() {
    }

    spanText() {
        return 'Input task.';
    }

    addTask() {
        console.log(this.form.value);
    }

}

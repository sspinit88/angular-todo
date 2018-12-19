import {Component, OnInit} from '@angular/core';
import {JsonPlaceholderService} from '../../services/json-placeholder-service.service';
import {TaskModel} from '../../models/task.model';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    tasks: TaskModel[] = [];

    constructor(
        public server: JsonPlaceholderService
    ) {
    }

    ngOnInit() {
        // при старте получаем все задачи
        this.server.getTask()
            .subscribe(data => {
                if (data) {
                    this.tasks = data;
                }
            }, error => {
                console.log(error);
            });

        //
        this.server.getTask().subscribe((response: TaskModel) => {
            if (response['body']) {
                this.tasks.unshift(response);
            }
        });
    }

    identify(index) {
        return index;
    }

    deleteTask(id) {
        this.server.deleteTask(id).subscribe(() => {
            // фильтруем и удаляем таск, не совпадающиеся с имеющимися
            this.tasks = this.tasks.filter(task => task.id !== id);
        });
    }

}

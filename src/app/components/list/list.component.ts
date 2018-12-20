import {Component, OnInit} from '@angular/core';

import {JsonPlaceholderService} from '../../services/json-placeholder-service.service';
import {TaskModel} from '../../models/task.model';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    tasks: TaskModel[];

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

        // subscribe new task event
        this.server.newTask.subscribe((response: TaskModel) => {
            if (response['body']) {
                // Object.assign дает возможность объединить объекты
                // через него говорим, что в пустой объект хотим записать response['body'] и объект {id: response.id},
                // который получили от сервера
                // затем, полученный из двух объектов объект добавляем в массив задач
                const newTask = Object.assign({}, response['body'], {id: response.id});
                this.tasks.unshift(newTask);
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

    editTask(task: TaskModel) {
        this.server.emitEditTask(task);
        // далее идем в компоненту form
    }
}


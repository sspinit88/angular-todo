import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {TaskModel} from '../models/task.model';


@Injectable()
export class JsonPlaceholderService {

    configUrl = 'https://jsonplaceholder.typicode.com/todos/';

    constructor(
        public http: HttpClient
    ) {
    }

    getTask(): Observable<any> {
        return this.http.get(this.configUrl);
    }

    addTask(task: TaskModel): Observable<any> {
        return this.http.post(this.configUrl, {
            body: task
        });
    }

    deleteTask(id): Observable<any> {
        return this.http.delete(this.configUrl + id);
    }

    // при инициализации класса BehaviorSubject в него должны передать обнуленные значения
    // BehaviorSubject предоставляет методы, которые позволят emit-ть события, тогда, когда нам нужно
    // уведомление компонент об изменении данных будет проводиться через переменную taskSourse
    private taskSourse = new BehaviorSubject<TaskModel>({id: 0, title: '', userId: 0, completed: false});
    // newTask  вернет объект с методами подписки на событие
    public newTask = this.taskSourse.asObservable();

    // emitAddTask - вызывает у taskSourse метод next, вызывает все колбеки, подписанные на событие
    emitAddTask(task: TaskModel) {
        this.taskSourse.next(task);
    }

    // из компоненты form - вызываем событие,
    // в list - подписываемся на событие

    private editTaskSourse = new BehaviorSubject<TaskModel>({id: 0, title: '', userId: 0, completed: false});

    public newEditTask = this.editTaskSourse.asObservable();

    emitEditTask(task: TaskModel) {
        this.editTaskSourse.next(task);
    }

}

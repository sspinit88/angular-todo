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


    // после того как данные добавлены на сервер, компоненты должны на это отреагировать.
    // BehaviorSubject - позволяет реализовать наблюдателя.
    // Создается переменная taskSourse, в которую присваевается новый класс BehaviorSubject<TaskModel>,
    // возвращающий объект одной задачи с пустыми полями

    // private taskSource = new BehaviorSubject<TaskModel>({id: 0, title: '', userId: 0, completed: false});

    // В переменную newTask кладем объект taskSourse и вызываем метод .asObservable()
    // .asObservable() вернет объект с методами подписки на событие.
    // Создаем метод emitNewTask(), который примнимает в себя одну задачу и вызывает метод .next(),
    // который осведомит все подписанные эл об изменениях, то есть передадим тот объект, который вернет сервер

    // newTask = this.taskSource.asObservable();

    // emitNewTask(task: TaskModel) {
    //    this.taskSource.next(task);
    // }

    // далее, в ngOnInit() сомпоненты элемента-слушателя, нужно прописать метод emitNewTask()

}

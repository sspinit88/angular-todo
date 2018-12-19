import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

}

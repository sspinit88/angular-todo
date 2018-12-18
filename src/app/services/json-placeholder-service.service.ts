import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {TaskModel} from '../models/task.model';

@Injectable()
export class JsonPlaceholderService {

    configURL = 'https://jsonplaceholder.typicode.com/todos/';

    constructor(
        public http: HttpClient
    ) {
    }

    getTask(): Observable<TaskModel> {
        return this.http.get(this.configURL);
    }

    addTask(task): Observable<TaskModel> {
        return this.http.post(this.configURL, task);
    }

    deleteTask(id): Observable<TaskModel> {
        return this.http.delete(this.configURL + id);
    }
}

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

    getTask(): Observable<any> {
        return this.http.get(this.configURL);
    }

    addTask(task): Observable<any> {
        return this.http.post(this.configURL, task);
    }

    deleteTask(id): Observable<any> {
        return this.http.delete(this.configURL + id);
    }
}

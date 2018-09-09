import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { tasks } from '../shared/data';
import { Task } from './task';

@Injectable()
export class TaskService {
    private apiUrl = 'api/tasks';
    tasks: Task[] = tasks;

    constructor (private http: Http) {

    }

    getTasks(): Task[] {  
        return this.tasks;
    }

    createTask(title: string) {
        let task = new Task(title);
        this.tasks.push(task);
    }

    deleteTask(task: Task) {
        let index = this.tasks.indexOf(task);

        if(index > -1) {
            this.tasks.splice(index, 1);
        }
    }

    toggleTask(task: Task) {
        task.completed = !task.completed;
    }
}
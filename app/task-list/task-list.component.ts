import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
    moduleId: module.id,
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
    styleUrls: [
        'task-list.component.css'
    ]
})

export class TaskListComponent implements OnInit {
    tasks: Task[];

    constructor(private taskService: TaskService) {
        this.tasks = [];
    }

    ngOnInit(): void {
        this.tasks = this.taskService.getTasks();
    }

    delete(task: Task) {
        this.taskService.deleteTask(task);
    }    

    toggle(task: Task) {
        this.taskService.toggleTask(task);
    }
};
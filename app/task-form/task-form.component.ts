import { Component} from '@angular/core';
import { TaskService } from '../shared/task.service';

@Component({
    moduleId: module.id,
    selector: 'task-form',
    templateUrl: 'task-form.component.html',
    styleUrls: [
        'task-form.component.css'
    ]
})

export class TaskFormComponent {
    title: string = '';
    
    constructor (private taskService: TaskService) {}

    onSubmit() {
        this.taskService.createTask(this.title);
    }
};
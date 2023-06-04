import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';
import { identifierName } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = []


  getTask(): Task[] {
    return this.tasks
  }

  onItemAdd(item: Task): void {
    setTimeout(() => {
       this.tasks.push(item)
      }, 2000);

  }

  deleteTask(task: Task): void {
    setTimeout(() => {
    const findId = this.tasks.findIndex((i) => i.id == task.id)
    this.tasks.splice(findId, 1)
    }, 2000);

  }

  changePag(item: Task): void {
    setTimeout(() => {
      item.completed = !item.completed;

    }, 2000);


  }


}

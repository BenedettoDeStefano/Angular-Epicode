import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/models/task.interface';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks!: Task[];
  todoItem: string = '';
  isLoading: boolean = true;

  constructor(private taskSrv: TaskService,) {
    this.tasks = taskSrv.tasks;
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  Add() {
    const todoItems: Task = {
      id: this.tasks.length + 1,
      title: this.todoItem,
      completed: false
    }
    this.taskSrv.onItemAdd(todoItems)
    console.log(this.tasks)
    this.todoItem = ''
    this.animation()
  }


  deleteT(task: Task): void {
    this.taskSrv.deleteTask(task)
    this.animation()
  }


  change(item: Task): void {
    this.taskSrv.changePag(item);
    this.animation()
  }


  loadClick: boolean = false
  animation(): void {
    this.loadClick = true;
    setTimeout(() => {
      this.loadClick = false;
    }, 2000);

  }

  completeTask():boolean{
    return this.tasks.some(i => !i.completed);
  }

}

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
  todoItem : string = ''

  constructor(private taskSrv : TaskService, ) {
    this.tasks = taskSrv.tasks;
  }

  onItemAdd() {
   const todoItems :Task = {
      id: this.tasks.length +1,
      title: this.todoItem,
      completed:false
    }
    this.taskSrv.onItemAdd(todoItems)
    console.log(this.tasks)
    this.todoItem = ''
  }


  deleteTask(task: Task): void {
    this.taskSrv.deleteTask(task)
  }


  changePag(item: Task): void{
    this.taskSrv.changePag(item);
  }


  isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

}






  // messaggio():boolean {
  //   return this.tasks.some(item => {
  //     item.completed = !item.completed;
  //   })
  // }


// changeBool(task: Task): void {
  //   task.completed = !task.completed;

  // }

  // deleteTask(task: any): void {
  //   this.tasks = this.tasks.filter(t => t !== task);
  // }


  // attivaClasse() {
  //   if(this.todoItem. === false){
  //     this.todoItem.completed = true;
  //   }else {
  //     this.todoItem.completed = false
  //   }
  //   console.log(this.todoItem.completed)
  // }

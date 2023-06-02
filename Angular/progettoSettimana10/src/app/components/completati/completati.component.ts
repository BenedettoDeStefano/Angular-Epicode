import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/models/task.interface';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
  tasks!: Task[];


  constructor(private taskSrv : TaskService) {
    this.tasks = taskSrv.tasks;
  }


  isLoading: boolean = true;
  ngOnInit():void  {
    setTimeout(() => {
      this.isLoading = false;
      this.tasks = this.taskSrv.getTask()
    }, 2000);

  }
 }

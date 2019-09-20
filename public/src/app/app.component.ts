import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API (CRUD)';
  tasks;
  task = '';
  detail = false;
  newTask: any;
  editTask: any;
  editToggle = false;

  // tslint:disable-next-line: variable-name
  constructor(private _httpService: HttpService) {
  }
  ngOnInit() {
    // this.getTasksFromService();
    // this.getTaskFromService(idx);
    this.newTask = { title: '', description: '' };
  }

  getTasksFromService(): void {
    console.log('Button has been clicked!');
    const tempObservable = this._httpService.getTasks();
    tempObservable.subscribe(data => {
      console.log('Got tasks!', data);
      this.tasks = data;
    });
  }

  onSubmit() {
    const tempObservable = this._httpService.addTask(this.newTask);
    tempObservable.subscribe(data => {
      console.log('Task created!');
      this.newTask = { title: '', description: '' };
      this.getTasksFromService();
    });
  }

  editForm(task) {
    this.editTask = { _id: task._id, title: task.title, description: task.description };
    this.editToggle = true;
  }

  onEdit() {
    const tempObservable = this._httpService.editTask(this.editTask);
    tempObservable.subscribe(data => {
      console.log('Task updated!');
      this.editToggle = false;
      this.getTasksFromService();
    });
  }

  onDelete(task) {
    const tempObservable = this._httpService.deleteTask(task);
    tempObservable.subscribe(data => {
      console.log('Task deleted!');
      this.getTasksFromService();
    });
  }
}

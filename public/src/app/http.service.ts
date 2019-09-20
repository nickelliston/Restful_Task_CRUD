import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService {
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getTaskById('5d7fde3f21d56b33b4dcdec5');

  }
  getTasks() {
    // const tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log('Got our tasks!', data));
    return this._http.get('/tasks');
  }
  getTaskById(id: string) {
    // const tempObservable = this._http.get(`/tasks/${id}`);
    // tempObservable.subscribe(data => console.log('Got our single task!!', data));
    return this._http.get(`/tasks/${id}`);
  }
  addTask(newtask) {
    return this._http.post('/tasks', newtask);
  }
  editTask(editTask) {
    return this._http.put(`/tasks/${editTask._id}`, editTask);
  }
  deleteTask(task) {
    return this._http.delete(`/tasks/${task._id}`, task);
  }
}

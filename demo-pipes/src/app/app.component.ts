import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chien } from './chien';
import { CoupePattePipe } from './coupe-patte.pipe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CroquettePipe } from './croquette.pipe';

interface Todo {
  id : number;
  userId: number;
  title : string;
  completed : boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, CoupePattePipe, AsyncPipe, CroquettePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-pipes';

  data : Chien = {
    name: 'Medor',
    pattes : 4
  }

  http = inject(HttpClient)

  todo$ : Observable<Todo> = this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos/1')

  

  todos$ = this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')

  constructor(){
    this.todo$.subscribe((data) => {
      console.log(data)
    })
  }
}

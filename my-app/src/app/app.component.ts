import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AnimalComponent } from "./animal/animal.component";
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { MyNavComponent } from './my-nav/my-nav.component';
import {MatButtonModule} from '@angular/material/button'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, RouterOutlet, HelloWorldComponent, AnimalComponent, TodoListComponent, TodoItemComponent, MyNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  show = false;
  constructor(){
    console.log('constructor')
  }
}

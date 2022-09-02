import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[];

  constructor(private store:Store<{todos:Todo[]}>) {
      store.pipe(select('todos')).subscribe((values)=>{
        this.todos=values;
        console.log(values);
      });
   }

  ngOnInit(): void {
  }

}

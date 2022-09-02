import {Action} from '@ngrx/store';
import { ToDoActionType } from '../shared/enum/todo-action-types.enum';

export class ActionParent implements Action{
    type:any;
    payload:any;
}

export class TodoAdd implements ActionParent{
    type:ToDoActionType.Add;

    constructor(public payload:any){

    }
}
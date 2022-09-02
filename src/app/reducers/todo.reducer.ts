import {ToDoActionType} from "../shared/enum/todo-action-types.enum";
import {ActionParent} from "../actions/todo.actions";
import {Todo} from "../models/todo";


const intialState:Todo[]=[
    {title:"Title demo 1"},
]

export function TodoReducer(state=intialState,action:ActionParent){
    switch(action.type){
        case ToDoActionType.Add:
            return [...state,action.payload];
        case ToDoActionType.Remove:
            [...state.splice(action.payload,1)] 
            return [...state]           
        default:
            return state;
    }
}
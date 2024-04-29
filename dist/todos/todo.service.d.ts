import { Todo } from "./models/todo.model";
import { CreateTodo } from "./datatransferobject/create-todo.dto";
import { ChangeTodo } from "./datatransferobject/change-todo.dts";
export declare class TodoService {
    private todoModel;
    constructor(todoModel: typeof Todo);
    findAll(): Promise<Todo[]>;
    findOne(id: string): Promise<Todo>;
    create(createTodo: CreateTodo): Promise<Todo>;
    update(id: string, changeTodo: ChangeTodo): Promise<[affectedCount: number, affectedRows: Todo[]]>;
    remove(id: string): Promise<void>;
}

import { TodoService } from "./todo.service";
import { CreateTodo } from "./datatransferobject/create-todo.dto";
import { ChangeTodo } from "./datatransferobject/change-todo.dts";
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    getAllTodos(): Promise<import("./models/todo.model").Todo[]>;
    getOneTodo(id: string): Promise<import("./models/todo.model").Todo>;
    createTodo(createTodo: CreateTodo): Promise<import("./models/todo.model").Todo>;
    changeTodo(changeTodo: ChangeTodo, id: string): Promise<[affectedCount: number, affectedRows: import("./models/todo.model").Todo[]]>;
    deleteTodo(id: string): Promise<void>;
}

import { Injectable } from "@nestjs/common";
import { Todo } from "./models/todo.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateTodo } from "./datatransferobject/create-todo.dto";
import { ChangeTodo } from "./datatransferobject/change-todo.dts";

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Todo)
        private todoModel: typeof Todo
    ){}

    async findAll():Promise<Todo[]>{
        return this.todoModel.findAll();
    }

    findOne(id: string): Promise<Todo>{
        return this.todoModel.findOne({
            where:{
                id,
            },
        });
    }

    create(createTodo: CreateTodo): Promise<Todo>{
        const todo = new Todo();
        todo.title = createTodo.title;
        todo.done = createTodo.done;
    
        return todo.save();
    }

    update(id: string, changeTodo: ChangeTodo): Promise<[affectedCount: number, affectedRows: Todo[]]>{
        return this.todoModel.update(
            {...changeTodo},
            {where : {id}, returning: true},
        )
    }

     async remove(id: string): Promise<void>{
        const todo = await this.findOne(id);
        await todo.destroy();
     } 
}
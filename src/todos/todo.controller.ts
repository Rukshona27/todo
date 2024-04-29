import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Header, Patch, Delete} from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodo } from "./datatransferobject/create-todo.dto";
import { ChangeTodo } from "./datatransferobject/change-todo.dts";


@Controller('todos')
export class TodoController{
    constructor(
        private readonly todoService: TodoService
    ){}


    @Get()
    getAllTodos(){
        return this.todoService.findAll();
    }

    @Get(':id')
    getOneTodo(@Param('id')id: string){
        return this.todoService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-Type', 'applicaton/json')
    createTodo(@Body() createTodo: CreateTodo){
        return this.todoService.create(createTodo);
    }

    @Patch(':id')
    changeTodo(@Body() changeTodo: ChangeTodo, @Param('id') id: string){
        return this.todoService.update(id, changeTodo);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: string){
        return this.todoService.remove(id);
    }
}
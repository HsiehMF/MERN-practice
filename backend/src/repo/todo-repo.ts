import { ITodo } from './../types/todo'
import Todo from './../models/todo'

interface TodoRepo {
    getTodos(): Promise<Array<ITodo>>
    addTodo(todoBody: ITodo): Promise<ITodo>
    updateTodo(id: string, todoBody: ITodo): Promise<ITodo | null>
    deleteTodo(id: string): Promise<ITodo | null>
}

class TodoRepoImpl implements TodoRepo {
    private constructor() { }

    static of(): TodoRepoImpl {
        return new TodoRepoImpl()
    }

    async getTodos(): Promise<Array<ITodo>> {

    }

    async addTodo(todoBody: ITodo): Promise<ITodo> {

    }

    async updateTodo(id: string, todoBody: ITodo): Promise<ITodo | null> {

    }

    async deleteTodo(id: string): Promise<ITodo | null> {
        
    }

}

export { TodoRepoImpl }

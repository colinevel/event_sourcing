import {AddTodo, apply, decide, RemoveTodo, TodoAdded, TodoRemoved} from "./main";

describe('Todo List', () => {

    describe('Decide', () => {
        it('should add a todo', () => {

            const addTodo: AddTodo = { name: 'AddTodo', id: 1, title: 'Buy groceries' }
            const result = decide([], addTodo)

            expect(result).toEqual({ name: 'TodoAdded', id: 1, title: 'Buy groceries' })
        })

        it('should remove a todo', () => {
            const removeTodo: RemoveTodo = { name: 'RemoveTodo', id: 1 }
            const result = decide([{ id: 1, title: 'Buy groceries' }], removeTodo)

            expect(result).toEqual({ name: 'TodoRemoved', id: 1 })
        })
    })

    describe('Apply', () => {
        it('apply a todo added event', () => {
            const addTodo: TodoAdded = { name: 'TodoAdded', id: 1, title: 'Buy groceries' }
            const result = apply([], addTodo)

            expect(result).toEqual([{ id: 1, title: 'Buy groceries' }])
        })

        it('apply a todo removed event', () => {
            const removeTodo: TodoRemoved = { name: 'TodoRemoved', id: 1 }
            const result = apply([{ id: 1, title: 'Buy groceries' }], removeTodo)

            expect(result).toEqual([])
        })
    })
})
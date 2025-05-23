// Todo List

// Events
export type TodoAdded = {name: 'TodoAdded', id: number, title: string }
export type TodoRemoved = {name: 'TodoRemoved', id: number }
export type TodoEvent = TodoAdded | TodoRemoved

// Commands
export type AddTodo = { name: 'AddTodo', id: number, title: string }
export type RemoveTodo = { name: 'RemoveTodo', id: number }
export type Command = AddTodo | RemoveTodo

// State
export type Todo = { id: number, title: string }
export type TodoList = Todo[]
export type State = TodoList

// Initial State
// const initialState: State = []

// decide
type Decide = (state: State, command: Command) => TodoEvent

// apply
// type Apply = (state: State, event: TodoEvent) => State

export const decide: Decide = (_state: State, command: Command): TodoEvent => {
    if (command.name === 'AddTodo') {
        return { name: 'TodoAdded', id: command.id, title: command.title }
    }
    if (command.name === 'RemoveTodo') {
        return { name: 'TodoRemoved', id: command.id }
    }
    throw new Error('Unknown command')
}

export const apply = (state: State, event: TodoEvent): State => {
    if (event.name === 'TodoAdded') {
        return [...state, { id: event.id, title: event.title }]
    }
    if (event.name === 'TodoRemoved') {
        return state.filter(todo => todo.id !== event.id)
    }
    else {
        throw new Error('Unknown event')
    }
}


export function main() {
    return 0
}
import { Todo } from './todos'
import { User } from './users'

export * from './todos'
export * from './users'

// Store
export interface State {
    todos: Todo[],
    // users: User[]
}

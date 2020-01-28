import { Task } from './tasks'
import { User } from './users'

export * from './tasks'
export * from './users'

// Store
export interface State {
    tasks: Task[],
    // users: User[]
}

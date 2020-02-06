import { TaskInterface } from './tasks'
import { User } from './users'

export * from './tasks'
export * from './users'

// Store
export interface StateInterface {
    tasks: TaskInterface[],
    // users: User[]
}

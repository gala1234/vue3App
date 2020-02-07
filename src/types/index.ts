import { TaskInterface } from './tasks'
import { UserInterface } from './users'

export * from './tasks'
export * from './users'

// Store
export interface StateInterface {
    tasks: TaskInterface[],
    users: UserInterface[]
}

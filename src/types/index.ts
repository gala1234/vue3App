import { TaskInterface } from './tasks'
import { UserInterface } from './users'
import { LoginInterface } from './login'

export * from './tasks'
export * from './users'
export * from './login'

// Store
export interface StateInterface {
    tasks: TaskInterface[],
    users: UserInterface[],
    isLoggedIn: LoginInterface
}

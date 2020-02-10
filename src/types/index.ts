import { TaskInterface } from './tasks'
import { LoginInterface } from './login'
import { UserInterface } from './users'

export * from './tasks'
export * from './users'
export * from './login'

export interface RootState {
  tasks: TaskInterface[];
  login: LoginInterface;
  user: UserInterface;
}

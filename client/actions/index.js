import { MY_ACTION } from './types'

export function myAction(query) {
  return {
    type: 'MY_ACTION',
    payload: query
  }
}

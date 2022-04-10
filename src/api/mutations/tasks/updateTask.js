import {gql} from '@apollo/client'
import taskFragment from '../../fragments/task'

export const UPDATE_TASK_MUTATION = gql`
  mutation updateTask(
    $id: ID!
    $title: String!
    $description: String
    $status: status
  ) {
    updateTask(
      taskId: $id
      title: $title
      description: $description
      status: $status
    ) {
      ...TaskFragment
    }
  }
  ${taskFragment}
`
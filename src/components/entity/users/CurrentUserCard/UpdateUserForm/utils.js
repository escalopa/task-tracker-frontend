import checkEmptyState from 'utils/forms/checkEmptyState'
import compareFormStates from 'utils/forms/compareFormStates'

export default function validateUpdateForm(
  formState,
  errorState,
  INITIAL_FORM_STATE
) {
  console.log(errorState, checkEmptyState(errorState))
  return (
    !compareFormStates(formState, INITIAL_FORM_STATE) &&
    checkEmptyState(errorState)
  )
}

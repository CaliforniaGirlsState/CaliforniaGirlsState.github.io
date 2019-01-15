const validate = values => {
  const errors = {}
  if (!values.positionName) {
    errors.positionName = 'Required'
  }
  if (!values.candidates || !values.candidates.length) {
    errors.candidates = { _error: 'At least one candidate must be entered' }
  } else {
    const candidatesArrayErrors = []
    values.candidates.forEach((candidate, candidateIndex) => {
      const candidateErrors = {}
      if (!candidate || !candidate.firstName) {
        candidateErrors.firstName = 'Required'
        candidatesArrayErrors[candidateIndex] = candidateErrors
      }
      if (!candidate || !candidate.lastName) {
        candidateErrors.lastName = 'Required'
        candidatesArrayErrors[candidateIndex] = candidateErrors
      }
    })
    if (candidatesArrayErrors.length) {
      errors.candidates = candidatesArrayErrors
    }
  }
  return errors
}

export default validate

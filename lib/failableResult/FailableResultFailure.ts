interface FailableResultFailure {
  success: false
  /**
   * In JavaScript, `any`thing can be thrown. This is probably an `Error`, but it could be something else.
   */
  result: any
}

export default FailableResultFailure

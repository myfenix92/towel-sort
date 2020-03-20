
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let mRev = []
  let m = []
  if (!Array.isArray(matrix) || matrix.length <= 0) {
    return []}
    else {
      for (i = 1 ; i < matrix.length; i+=2) {
      m = matrix[i].reverse()
      mRev = mRev.concat(matrix[i-1], m)
      }
      if (matrix.length % 2 !== 0) {
        mRev = mRev.concat(matrix[matrix.length-1])
      }
      return mRev
    }
}

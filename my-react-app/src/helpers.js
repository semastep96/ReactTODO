const helpers = {
  getNextId(arr) {
    let id = 1
    if (arr.length < 1) return id
    arr.map(task => {id = task.id > id ? task.id : id})
    return id + 1
  },
}

export default helpers
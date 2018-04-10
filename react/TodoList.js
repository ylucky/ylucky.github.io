/* 从小到大，从内到外 ~ */
/* TodoList 外围盒子 */
class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {
          'id': '1',
          'task': '吃饭',
          'complete': 'true'
        },
        {
          'id': '2',
          'task': '睡觉',
          'complete': 'false'
        },
        {
          'id': '3',
          'task': '打豆豆',
          'complete': 'false'
        },
        {
          'id': '4',
          'task': '学习',
          'complete': 'true'
        },
        {
          'id': '5',
          'task': '做完TodoListDemo',
          'complete': 'true'
        }
      ]
    }

    this.handleToggleComplete = this.handleToggleComplete.bind(this)
    this.handleTaskDelete = this.handleTaskDelete.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleToggleComplete (taskId) {
    let data = this.state.data
    for (let item of data) {
      if (item.id == taskId) {
        item.complete = item.complete == 'true' ? 'false' : 'true'
      }
    }
    this.setState({
      data: data
    })
  }

  handleTaskDelete (taskId) {
    let data = this.state.data
    this.setState({
      data: data.filter(task => task.id != taskId)
    })
  }

  generateUUID () { // 生成全局唯一标识符【固定算法】
    var d = new Date().getTime()
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function (c) {
      var r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    }
    )
    return uuid
  };

  handleAddItem (task) {
    let newItem = {
      'id': this.generateUUID(),
      'task': task,
      'complete': 'false'
    }

    let data = this.state.data
    data = data.concat([newItem])
    this.setState({
      data: data
    })
  }

  render () {
    var taskList = this.state.data.map(listItem =>
      <TodoItem taskId={listItem.id}
        key={listItem.id}
        task={listItem.task}
        complete={listItem.complete}
        toggleComplete={this.handleToggleComplete}
        deleteTask={this.handleTaskDelete} />
       )

    return <div className='todoList'>
      <div className='cont'>
        <h2>React TodoList</h2>
        <ul>
          {taskList}
        </ul>
      </div>
      <AddItem handleAddItem={this.handleAddItem} />
    </div>
  }
}
/* TodoItem 每一条任务 */
class TodoItem extends React.Component {
  constructor (props) {
    super(props)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  toggleComplete () {
    this.props.toggleComplete(this.props.taskId)
  }

  deleteTask () {
    this.props.deleteTask(this.props.taskId)
  }

  render () {
    let task = this.props.task
    let itemChecked

    if (this.props.complete == 'true') {
      task = <del>{task}</del>
    } else {
      itemChecked = false
    }

    return <li className='item' id={this.props.id} >
      <input type='checkbox' />
      <span onClick={this.toggleComplete}>{task}</span>
      <button className='delete' onClick={this.deleteTask}>删除</button>
    </li>
  }
}

/* AddItem 新增任务的组件 */
class AddItem extends React.Component {
  constructor (props) {
    super(props)
    this.addItem = this.addItem.bind(this)
  }

  addItem () {
    let elem = this.refs.add
    let task = elem.value
    if (!task) {
      alert('Todo内容不能为空！')
    } else {
      this.props.handleAddItem(task)
      elem.value = ''
    }
  }

  render () {
    return (
      <label for='add'>
        <input ref='add' type='text' id='add' />
        <button onClick={this.addItem} >添加</button>
      </label>
    )
  }
}

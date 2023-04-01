import React from "react";
import User from "../../components/user";
import './style.scss'
class UsersList extends React.Component {
  state = {
    usersList: []
  }

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem('users-list'))
    if (users && users.length) {
      this.setState({usersList: users})
    }
  }

  render() {
    return <div>
      <h1>Users list</h1>
      <div className='P-users-list'>


        {this.state.usersList.length ?
          this.state.usersList.map((item, index) => {
            return <User item={item}/>
          }) : <p>users list was empty</p>}
      </div>
    </div>
  }
}

export default UsersList
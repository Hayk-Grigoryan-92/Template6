import React from "react"
import './style.scss'
import '../../assets/styles/global.scss'

class RegisterForm extends React.Component {

  state = {
    formData: {
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: 'male'
    },
    errorText: '',
    usersList: []
  }

  handleChange = (e) => {
    const {formData} = this.state
    formData[e.target.name] = e.target.value //
    this.setState(formData)
  }

  createUser = () => {

    console.log(this.state.formData)
    // example 1
    // let arr = []
    // arr = this.state.usersList
    // arr.push(this.state.formData)
    // this.setState({userList: arr})

    // example 2
    this.setState({
      usersList: [...this.state.usersList, this.state.formData],
      formData: {
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: 'male'
      }
    })
  }


  render() {
    return (
      <div className={"P-registerBox "}>
        <div className={`P-formClass`}>
          <label className="G-input">
            <input name={'firstName'} type="text" placeholder="First Name" onChange={this.handleChange}
                   value={this.state.formData.firstName}/>
          </label>
        </div>
        <div className={`P-formClass`}>
          <label className="G-input">
            <input type="text" name={'lastName'} placeholder="Last Name" onChange={this.handleChange}
                   value={this.state.formData.lastName}/>
          </label>
        </div>
        <div className={`P-formClass`}>
          <label className="G-input">
            <input type="number"
                   name={'age'}
                   placeholder="Age"
                   onChange={this.handleChange}
                   value={this.state.formData.age}/>
          </label>
        </div>
        <div className={`P-formClass`}>
          <label className="G-input">
            <input type="email" name={'email'} placeholder="Email" onChange={this.handleChange}
                   value={this.state.formData.email}/>
          </label>
        </div>
        <div className={`P-formClass`}>
          <label className="G-input">
            <input type="password" name={'password'} placeholder="Password" onChange={this.handleChange}
                   value={this.state.formData.password}/>
          </label>
        </div>
        <div className={`P-formClass`}>
          <label className="G-input">
            <input type="password" name={'confirmPassword'} placeholder="Confirm Password"
                   onChange={this.handleChange}
                   value={this.state.formData.confirmPassword}/>
          </label>
        </div>
        <div className={`P-radioClass`}>
          <label>
            <span>Male :</span>
            <input onChange={this.handleChange}
                   type="radio"
                   name="gender"
                   checked={this.state.formData.gender === 'male'}
                   value={'male'}/>
            <span>Female :</span>
            <input type="radio"
                   name="gender"
                   checked={this.state.formData.gender === 'female'}
                   value={'female'}
                   onChange={this.handleChange}
            />
          </label>
        </div>

        <button className="P-button" onClick={this.createUser}>
          Submit
        </button>

          {this.state.usersList.length ?
            this.state.usersList.map((item, index) => {
              return localStorage.setItem(index.toString(), JSON.stringify(item, index))
            })
            : <p>empty users list</p>}
            
        
            <button className="P-registeredUsers" onClick={()=>{
              
            }}>Registered Users</button>

     
      </div>
    )
  }
}

export default RegisterForm
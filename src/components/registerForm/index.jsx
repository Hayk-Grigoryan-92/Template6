import React from "react"
import './style.scss'
import '../../assets/styles/global.scss'

class RegisterForm extends React.Component {

    state = {
        firstName:'',
        lastName:'',
        age:'',
        email:'',
        password:'',
        confirmPassword:'',
        errorText:'',
    }

    getInputFirstName = (e) => {
            this.setState({firstName:e.target.value})
            console.log(this.state.firstName);
    }

    getInputLastName = (e) => {
            this.setState({lastName:e.target.value})
            console.log(this.state.lastName);
    }

    getAge = (e) => {
        this.setState({age:e.target.value})
        console.log(this.state.age);
    }
    getEmail = (e) => {
            this.setState({email:e.target.value})
            console.log(this.state.email);
    }
    getPassword = (e) => {
        this.setState({password:e.target.value})
        console.log(this.state.password);
    }

    getConfirmPassword = (e) => {
        // if(this.state.confirmPassword === this.state.password){
            this.setState({confirmPassword:e.target.value})
            console.log(this.state.confirmPassword);
    }

    getUser = () =>{
        let user = []
        user.push(this.state.firstName, this.state.lastName, this.state.age, this.state.email, this.state.password, this.state.confirmPassword)
        console.log(user);
        let newUser = user.map(function(item){
            return <div>
                
            </div>
    })
    }   


    render(){
        return (
        <div className={"P-registerBox "}>
            <div className={`P-formClass`}>
                <label className="G-input">
                    <input type="text" placeholder="First Name" onChange={this.getInputFirstName} value={this.state.firstName}/>
                </label>
            </div>
            <div className={`P-formClass`}>
                <label className="G-input">
                    <input type="text" placeholder="Last Name" onChange={this.getInputLastName} value={this.state.lastName}/>
                </label>
            </div>
            <div className={`P-formClass`}>
                <label className="G-input">
                    <input type="number" placeholder="Age" onChange={this.getAge} value={this.state.age}/>
                </label>
            </div>
            <div className={`P-formClass`}>
                <label className="G-input">
                    <input type="email" placeholder="Email" onChange={this.getEmail} value={this.state.email}/>
                </label>
            </div>
            <div className={`P-formClass`}>
                <label className="G-input">
                    <input type="password" placeholder="Password" onChange={this.getPassword} value={this.state.password}/>
                </label>
            </div>
            <div className={`P-formClass`}>
                <label className="G-input">
                    <input type="password" placeholder="Confirm Password" onChange={this.getConfirmPassword} value={this.state.confirmPassword}/>
                </label>
            </div>
            <div className={`P-radioClass`}>
                <label>
                    <span>Male :</span>
                    <input type="radio" name="gender" defaultChecked/>
                    <span>Female :</span>
                    <input type="radio" name="gender"/>
                </label>
            </div>
            
            <button className="P-button" onClick={this.getUser}>
                Submit
            </button>
        </div>

        )
    }
}

export default RegisterForm
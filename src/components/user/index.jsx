import React from "react";
import './style.scss'
import MaleImage from '../../assets/images/men.png'
import FemaleImage from '../../assets/images/women.png'

class User extends React.Component {

  render() {
    return <div className="newUser">
      <div>
        <div className='P-profile-image'
             style={{backgroundImage: `url('${this.props.item.gender === 'male' ? MaleImage : FemaleImage}')`}}/>
        <p>firstName: {this.props.item.firstName}</p>
        <p>lastName: {this.props.item.lastName}</p>
        <p>age: {this.props.item.age}</p>
        <p>email: {this.props.item.email}</p>
        <p>gender: {this.props.item.gender}</p>
      </div>
    </div>
  }
}

export default User

// const User = ({item}) => {
//
//
//   return <div className="newUser">
//     <div>
//       <div className='P-profile-image'
//            style={{backgroundImage: `url('${item.gender === 'male' ? MaleImage : FemaleImage}')`}}/>
//       <p>firstName: {item.firstName}</p>
//       <p>lastName: {item.lastName}</p>
//       <p>age: {item.age}</p>
//       <p>email: {item.email}</p>
//       <p>gender: {item.gender}</p>
//     </div>
//   </div>
// }
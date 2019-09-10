import  React from "react";


class Component{
    constructor(props){
          
    }
  

   
}

export default class UsersList extends React.Component {
  
  constructor(props){
      
      super(props);
      this.state = {
        likes: 0

      };
  }

increaseLike(){

  this.setState({

    likes: this.state.likes + 1

  });

}

  render(){

      return (
        <div>

          <h4>Post </h4>
          <h5>Author: {this.props.author}</h5>
          <img src ={this.props.avatar} />
          <div>{this.props.text}</div>
          <button onClick={this.increaseLike.bind(this)}>Like</button>
          <div>Likes: {this.state.likes}</div>

        </div>


      )
  }
}
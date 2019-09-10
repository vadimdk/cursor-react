import React from "react";
import Users from "./users.view.js";
import axios from "axios";

const users = [{
    "id":"5cccb6429utghjkpnnnbb",
     "name":"Vlad",
      "age":99
    }, {
        "id":"5cccb6429utghjkpnnnbb",
         "name":"Oleg",
          "age":19
     }, {
         "id":"5cccb6429utghjkpnnnbb",
         "name":"Denis",
         "age":65
        }];

        const usersApi = axios.create({
            baseURL: "https://test-users-api.herokuapp.com",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
        })

        class User extends React.Component{
            


            state = {
                isEditing: false,
                
                name: this.props.name || "",
                age: this.props.age || 0
            }

            

            saveUser = async () => {
                const response = await usersApi.put(`/users/${this.props.id}`,{
                    name: this.state.name,
                    age: this.state.age
                });
                this.toggleEdit();
            }


            toggleEdit = () => {
                this.setState({
                    isEditing: !this.state.isEditing
                })

            }

            changeName = (event) => {
                const {value} = event.target;
                this.setState({
                    name: value
                })
            }

            changeAge = (event) => {
                const {value} = event.target;
                this.setState({
                    age: value
                })
            }

            

            render(){
                return (
                   <Users.Wrapper>
                       <Users.Label> 
                                   Name: 
                                </Users.Label>
                                <Users.NameInput
                                    disabled={!this.state.isEditing}
                                    value={this.state.name} 
                                    onChange={this.changeName} 
                                    />
                                
                                <Users.Label>
                                   Age:
                                </Users.Label>
                                 <Users.AgeInput
                                     disabled={!this.state.isEditing}
                                     value={this.state.age}
                                     onChange={this.changeAge}
                                     />
                     
                     {this.state.isEditing ?
                        (                                  
                                <Users.Button type="ADD" onClick={this.saveUser}>
                                    Save
                                </Users.Button>
                            
                        ):(
                            
                               
                                <Users.Button type="EDIT" onClick={this.toggleEdit}>
                                    
                                    Edit

                                </Users.Button>
                            
                          )
                    }
                     
                     <Users.Button type="DELETE" onClick={this.props.onDelete}>
                         Delete
                    </Users.Button>
                  </Users.Wrapper>

                )
            }

        }


        export default class UsersList extends React.Component{
            constructor(props){
                super(props);
                const users = this.requestAllUsers();                
            }

            changeName = (event) => {
                const {value} = event.target;
                this.setState({
                    name: value
                })
            }

            changeAge = (event) => {
                const {value} = event.target;
                this.setState({
                    age: value
                })
            }

            state = {
                users: []
            }
            
            async requestAllUsers(){
                const response = await usersApi.get("/users/");
                this.setState({
                    users: response.data.data
                })
            }

            deleteUser = async (id) => {
                const response = await usersApi.delete(`/users/${id}`);
                this.setState({
                    users: [...this.state.users].filter((user) =>{
                        return user.id !== id;
                    })
                })
            }         
            
            addUser = async () => {
                const response = await usersApi.post(`/users`,{
                    name: this.state.name,
                    age: this.state.age
                });
                this.setState({
                    users: [...this.state.users, response.data.data]
                }); 
            }
            

            render(){
                return(
                    <div>
                        <Users.Create>
                            <Users.Label>Name:</Users.Label>
                            <Users.NameInput value={this.state.name}
                                             onChange={this.changeName} />

                            
                            <Users.Label>Age:</Users.Label>
                            <Users.AgeInput value={this.state.age}
                                            onChange={this.changeAge}/>
                            <Users.Button type="ADD" onClick= {this.addUser}>Add user</Users.Button>
                        </Users.Create>
                        {this.state.users.map((user) => (
                            <User onDelete={this.deleteUser.bind(this, user.id)}{...user}/>
                        ))}
                    </div>
                )
            }

        } 
import React, {useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Home =()=>{
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        loadUsers();
    },[]);
const loadUsers= async ()=>{
    const result= await axios.get("http://localhost:5174/users")
    // console.log(result,"asd");
    setUsers(result.data);
}
const DeleteUser = async id=>{
    await axios.delete(`http://localhost:5174/users/${id}`);
    loadUsers();
}     
    return(
        <div className="container">
            <h1>Home Page</h1>
            <table class="table">
  <thead>
    <tr className="table table-dark table-striped">
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Emails</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user,index)=>(
        <tr>
            <th scope="row">{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Link className="btn btn-primary m-2" to={`/user/${user.id}`}><i class="fa-solid fa-eye"></i></Link>
                <Link className="btn btn-outline-primary m-2" to={`/user/edit/${user.id}`}><i class="fa-solid fa-pen-to-square"></i></Link>
                <Link className="btn btn-danger m-2" onClick={() => DeleteUser(user.id)}>Delete</Link>
            </td>
        </tr>
    ))}
  </tbody>
</table>
        </div>
    );

}
export default Home;
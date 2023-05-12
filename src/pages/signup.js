import React, {useState} from 'react';
import Axios from 'axios';

/*const [data, setData] = useState("")
const [response, setResponse] = useState("")
*/


function Signup(){
    const url = 'http://127.0.0.1:8000/createAccount/'
    const [data, setData] = useState({
        username:'',
        password:''
    })
    const [loginStatus, setLoginStatus] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        
        Axios.post(url, {
            username: data.username,
            password: data.password
        })
        .then(res =>{
            let data = res.data
            if (data['message'] === 'success'){
                sessionStorage.setItem('id', data['id'])
                sessionStorage.setItem('username', data['username'])
                setLoginStatus(false)
            }
            else{
                setLoginStatus(true)
            }
        })
    }

    return (
        <form /*method='post' action='localhost:3000/signup'*/ onSubmit={(e) => handleSubmit(e)}>
            <div id='fileInputCard'>
                <div className='labelBox'>
                    <label id='nameLabel' htmlFor='username'>Email</label>
                    <input 
                        id='username'
                        type='text'
                        onChange={(event) => {
                            let temp = data
                            temp["username"] = event.target.value
                            setData(temp)
                        }}
                    />
                </div>

                <div className='labelBox'>
                    <label id='passwordLabel' htmlFor='password'>Password</label>
                    <input
                        id='password'
                        type='text'
                        onChange={(event) => {
                            let temp = data
                            temp["password"] = event.target.value
                            setData(temp)
                        }}
                    />
                </div>

                <input id='submitButton' type='submit' value='Sign Up'/>
                {
                    loginStatus ? (
                        <div>Account Already Exists</div>
                    ) : (
                        <div></div>
                    )
                }
            </div>
        </form>
    )
}

export default Signup;
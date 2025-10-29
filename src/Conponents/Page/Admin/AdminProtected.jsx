import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminProtected = () => {
    const navigate = useNavigate()
    const protectedAdmin = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const password = form.password.value;
        const data = {name,password};
        const datas = {
            names: 'kawsar',
            passwords: 'rafi'};
        console.log(data)
        console.log(datas)
        if(data==datas){
            // return navigate('/cart')
            console.log('okkk')
        }
        else{
            console.log("false data")
        }
    }
    return (
        <div className='mt-24 mx-20'>
            <form onSubmit={protectedAdmin}>
                <input type="text" name="name" id="" placeholder='name' /> <br />
                <input type="text" name="password" id="" placeholder='name' /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AdminProtected;
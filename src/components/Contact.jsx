import React from 'react';
import { useEffect } from 'react';
import Axios from "axios";
import { useState } from 'react';

const url = "https://jsonplaceholder.typicode.com/users";
const Contact = () =>
{
const [title, setTitle] = useState();
const [body , setBody] = useState();

const sub = (e) =>
{
    e.preventDefault();
    Axios.post("https://jsonplaceholder.typicode.com/users",{
        title: title,
        body:body
    }).then((res) => console.log(res))
}

    // useEffect(() =>
    // {
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then((response) =>
        // {
            // response.json().then((result) =>{
                // console.log(result)
            // })
        // })
        //
        // 
    // });
// useEffect(()=>
// {
    // Axios.get(url).then((response)=>
    // {
        // console.log(response);
    // })
// });

return(<>
<form onSubmit={sub}>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    <input type="text" value={body} onChange={(e) => setBody(e.target.value)}/>
    <input type="submit"/>
</form>

</>);
}

export default Contact;
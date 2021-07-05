import React, { useState } from 'react';
import './People.css';
import circle from './../images/separator.png';

const Peoples = ({ people, show_data_handle }) => {
    const { email, gender, name } = people;
    const { title, first, last } = name;
    // console.log(people, email);
    const [classActive, setClassActive] = useState(false);
 
    const ifActive = () => {
        setClassActive(value => !value);
    }

    return (
        <div onClick={() => show_data_handle(people)} className="col-lg-3 col-md-6 p-3"> 
                <div onClick={() => ifActive()} className={ classActive ? "active_card p-3" : "people_card p-3"}>
                    <p  className={ classActive ? "ac_gender" : "gender"}>{gender} <img src={circle} alt="" /> NL</p>
                    <h1 className={ classActive ? "ac_name" : "name"}>{title} {first} {last}</h1>
                    <p className={ classActive ? "ac_email" : "email"}>{email}</p>
                </div> 
        </div>
    );
};

export default Peoples;
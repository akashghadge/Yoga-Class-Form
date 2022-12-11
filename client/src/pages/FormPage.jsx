import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const FormPage = () => {
    const navigate = useNavigate();
    const [allCurrentData, setAllCurrentData] = useState({
        fname: "",
        lname: "",
        email: "",
        dob: new Date(),
        enroll_date: new Date(),
        slots: ['6-7AM', '7-8AM', '8-9AM', '5-6PM'],
        select_slot: ""
    });
    function inputChange(event) {
        const { id, value } = event.target
        setAllCurrentData((prev) => {
            return {
                ...prev,
                [id]: value
            }
        })
    }
    function invalid() {
        const { fname, lname, email, select_slot, dob, enroll_date } = allCurrentData;
        if (!fname || !lname || !email || !select_slot)
            return 1;
        let age_ceil = Math.ceil(moment().diff(dob, 'years', true));
        let age_floor = Math.floor(moment().diff(dob, 'years', true));
        if (age_floor < 18 && age_ceil > 65)
            return 1;
        let enroll_date_is_past = Math.floor(moment().diff(enroll_date, 'days', true));
        if (enroll_date_is_past > 0)
            return 1;
    }
    function submitForm(e) {
        e.preventDefault();
        if (invalid()) {
            alert("invalid input");
            return 0;
        }
        const url = "http://localhost:5000/api/form/submit";
        axios.post(url, allCurrentData)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data));
                navigate('/preview')
            })
            .catch((err) => {
                if (err.response.status == 303) {
                    localStorage.setItem('user', JSON.stringify(err.response.data));
                    navigate('/preview')
                }
                console.log(err);
            })
    }
    return (
        <>
            <input type="text" id="fname" placeholder="Joe" onChange={inputChange} value={allCurrentData.fname}></input>
            <input type="text" id="lname" placeholder="Doe" onChange={inputChange} value={allCurrentData.lname}></input>
            <input type="email" id="email" placeholder="joeDoe@gmail.com" onChange={inputChange} value={allCurrentData.email}></input>
            <input type="date" id="dob" onChange={inputChange} value={allCurrentData.dob}></input>
            <div>
                <p>Your age is {moment().diff(allCurrentData.dob, 'years', true).toFixed()}</p>
            </div>
            <div>
                {allCurrentData.slots.map((v, i) => {
                    return <button id="select_slot" key={v} value={v} onClick={inputChange}>{v}</button>
                })}
                <p>Selected slot is {allCurrentData.select_slot}</p>
            </div>
            <div>
                <p>Enrollment Day {moment(allCurrentData.enroll_date).format('DD-MM-YYYY')}</p>
                <input type="date" id="enroll_date" onChange={inputChange} value={allCurrentData.enroll_date} min={moment().format("YYYY-MM-DD")}></input>
            </div>
            <button onClick={submitForm}>Submit</button>
        </>
    );
}

export default FormPage;

import React, { useState, useEffect } from 'react';
import moment from 'moment';
const FormPage = () => {
    const [allCurrentData, setAllCurrentData] = useState({
        fname: "",
        lname: "",
        dob: new Date(),
        enroll_date: new Date(),
        slots: ['6-7AM', '7-8AM', '8-9AM', '5-6PM'],
        select_slot: -1
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
    return (
        <>
            <input type="text" id="fname" placeholder="Joe" onChange={inputChange} value={allCurrentData.fname}></input>
            <input type="text" id="lname" placeholder="Doe" onChange={inputChange} value={allCurrentData.lname}></input>
            <input type="date" id="dob" onChange={inputChange} value={allCurrentData.dob}></input>
            <div>
                <p>Your age is {moment().diff(allCurrentData.dob, 'years', true).toFixed()}</p>
            </div>
            <div>
                {allCurrentData.slots.map((v, i) => {
                    return <button id="select_slot" value={i} onClick={inputChange}>{v}</button>
                })}
                <p>Selected slot is {allCurrentData.select_slot}</p>
            </div>
            <div>
                <p>Enrollment Day {allCurrentData.enroll_date}</p>
                <input type="date" id="enroll_date" onChange={inputChange} value={allCurrentData.enroll_date} min={moment().format("YYYY-MM-DD")}></input>
            </div>
        </>
    );
}

export default FormPage;

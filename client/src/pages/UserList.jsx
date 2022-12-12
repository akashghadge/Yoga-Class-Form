import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { toast } from "react-toastify"
import moment from 'moment'
import urls from '../api/urls';

const UserList = () => {
    let [userForms, setUserForms] = useState([]);
    const ErrorAlert = (text) => {
        toast.error(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    useEffect(() => {
        const url = `${urls.base}/api/get/all`;
        axios.get(url)
            .then((result) => {
                setUserForms(result.data);
            })
            .catch((err) => {
                ErrorAlert(err.message);
            })
    }, []);
    return (
        <>
            <h2 className='text-center text-orange'>User Registered</h2>
            <div className='d-flex justify-content-center'>
                <div className=" table-responsive-sm p-3">
                    <table className="table text-small">
                        <thead>
                            <tr>
                                <th scope="col">Sr. No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Enroll Date</th>
                                <th scope="col">Slot</th>
                                <th scope="col">Fees Paid</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userForms.map((v, i) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope='row'>{i + 1}</th>
                                                <td>{v.fname + " " + v.lname}</td>
                                                <td>{v.email}</td>
                                                <td>{moment(v.dob).format('DD/MM/YYYY')}</td>
                                                <td>{moment(v.enroll_date).format('DD/MM/YYYY')}</td>
                                                <td>{v.select_slot}</td>
                                                <td>{v.fees_paid ? 'Paid' : 'Not'}</td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default UserList;

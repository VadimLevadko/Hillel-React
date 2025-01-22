import { useEffect, useState } from 'react';
import { IoPersonAdd } from "react-icons/io5";

import { getData } from '../../utils/commonFunctions.js'

import './ContactSection.css'

const formValidation = (form, data) => {
    const phoneNum = form.querySelector('#inputPhoneNumber').value;

    if(!Number(phoneNum)) return;

    const result = data.findIndex(el => el.phone === phoneNum.trim());

    return result === -1;
}

const handleSubmitForm = (event, data, setData) => {
    event.preventDefault()
    const form = document.querySelector('#form-add-new-contact')

    if(!formValidation(form, data)) return;

    const inputs = Array.from(form.querySelectorAll('input'))

    const newUser = inputs.reduce((acc, el) => {
        acc[el.name] = el.value.trim();
        return acc
    }, {
        id: data[data.length - 1] ? data[data.length - 1].id + 1 : 1,
    })

    const newData = [...data];
    newData.push(newUser);

    return setData(newData);
}

const handleDelete = ({ target }, data, setData) => {
    const id = Number(target.closest('[data-user-id]').getAttribute('data-user-id'));
    const deleteId = data.findIndex(item => item.id === id);

    const newData = [...data];
    newData.splice(deleteId, 1);

    return setData(newData);
}

const renderTableItems = (data, setData) => {
    return (
        <>
            {data.map(({ id, name, lastName, phone }, index) => {
                const separateFullName = name.split(' ')

                return (
                    <tr data-user-id={id} key={id}>
                        <th scope="row">{index + 1}</th>
                        <td>{separateFullName[0]}</td>
                        <td>{lastName ? lastName : separateFullName[1]}</td>
                        <td>{phone}</td>
                        <td>
                            <button onClick={() => handleDelete(event, data, setData)} type="button"
                                    className="btn btn-danger">Delete
                            </button>
                        </td>
                    </tr>
                )
            })}
        </>
    )
}

export default function ContactSection() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(setData);
    }, []);

    return (
        <section className="contact-list-section">
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Phone number</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {renderTableItems(data, setData)}
                    </tbody>
                </table>
            </div>

            <button type="button" className="btn btn-success position-fixed add-new-contact-btn" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                <IoPersonAdd size={30} />
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create new contact</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="form-add-new-contact" onSubmit={() => handleSubmitForm(event, data, setData)}>
                                <div className="mb-3">
                                    <label htmlFor="inputFirstName" className="form-label">First Name (required)</label>
                                    <input required name="name" type="text" className="form-control" id="inputFirstName"
                                           aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputLastName" className="form-label">Last Name (optional)</label>
                                    <input name="lastName" type="text" className="form-control" id="inputLastName"
                                           aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPhoneNumber" className="form-label">Phone number (required)</label>
                                    <input name="phone" type="tel" className="form-control" id="inputPhoneNumber" required/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>
                            <button form="form-add-new-contact" type="submit" className="btn btn-success">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

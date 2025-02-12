import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => {
    const validateName = (value) => {
        if(!value.trim()) return 'Required';
    }

    const validateEmail = (value) => {
        if(!value) {
            return 'Required';
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return 'Invalid email address';
        }
    }

    const validatePhone = (value) => {
        if(!value || value.length <= 4) {
            return 'Required';
        } else if(!Number(value)) {
            return 'Invalid phone number';
        } else if(value.length > 12) {
            return 'Phone number is too long!';
        } else if(value.trim().length < 12) {
            return 'Phone number is too short!';
        }
    }

    return (
        <div>
            <h1>My first Formik</h1>
            <Formik initialValues={{
                userName: '',
                email: '',
                phone: '380'
            }}
                    onSubmit={values => {
                        console.log(values);
                    }}>

                {({errors, touched}) => (
                    <Form className="w-50 mx-auto">
                        <div className="mb-3">
                            <label form="validateUserName" className="form-label">User name:</label>
                            <div id="validateUserName">
                                <Field
                                    className={`form-control ${touched.userName ? (errors.userName ? "is-invalid" : "is-valid") : ""} mb-1`}
                                    name="userName"
                                    validate={validateName}
                                />
                                <div className="text-danger">
                                    {errors.userName}
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label form="validateEmail" className="form-label">E-mail:</label>
                            <div id="validateEmail">
                                <Field
                                    type="email"
                                    name="email"
                                    className={`form-control ${touched.email ? (errors.email ? "is-invalid" : "is-valid") : ""} mb-1`}
                                    validate={validateEmail}
                                />
                                <div className="text-danger">
                                    {errors.email}
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label form="validatePhone" className="form-label">Phone number:</label>
                            <div id="validatePhone">
                                <Field
                                    type="tel"
                                    name="phone"
                                    className={`form-control ${touched.phone ? (errors.phone ? "is-invalid" : "is-valid") : ""} mb-1`}
                                    validate={validatePhone}

                                />
                                <div className="text-danger">
                                    {errors.phone}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default Basic;
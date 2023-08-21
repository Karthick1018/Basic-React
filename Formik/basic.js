import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Box, Button, Card, Stack, TextField } from '@mui/material';

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            phone: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            age: Yup.number()
                .required("Age is Required")
                .min(18, "You must be at least 18 years old")
                .max(120, "Please enter a valid age"),
            phone: Yup.string()
                .required('Phone number is required')
                .matches(   /^((\\+[0-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number must be 10 digits'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div>
            <Box>
                <Card sx={{ maxWidth: 500, margin: 'auto', padding: 5, bgcolor: '#b3e6e8' }}>
                    <h1>form</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <Stack>
                            <label htmlFor="firstName">First Name</label>
                            <TextField
                                id="firstName"
                                name="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                                size='small'
                            />
                        </Stack>
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div style={{ color: 'red' }}>{formik.errors.firstName}</div>
                        ) : null}
                        <Stack>

                            <label htmlFor="lastName">Last Name</label>
                            <TextField
                                id="lastName"
                                name="lastName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                size='small'
                            />
                        </Stack>
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div style={{ color: 'red' }}>{formik.errors.lastName}</div>
                        ) : null}
                        <Stack>

                            <label htmlFor="email">Email Address</label>
                            <TextField
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                size='small'
                            /></Stack>

                        {formik.touched.email && formik.errors.email ? (
                            <div style={{ color: 'red' }}>{formik.errors.email}</div>
                        ) : null}
                        <Stack>
                            <label htmlFor="age">Age</label>
                            <TextField
                                id="age"
                                name="age"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.age}
                                size='small'
                            />
                        </Stack>
                        {formik.touched.age && formik.errors.age ? (
                            <div style={{ color: 'red' }}>{formik.errors.age}</div>
                        ) : null}
                        <Stack>
                            <label htmlFor="phone">Phone</label>
                            <TextField
                                id="phone"
                                name="phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                size='small'
                            />
                        </Stack>
                        {formik.touched.phone && formik.errors.phone ? (
                            <div style={{ color: 'red' }}>{formik.errors.phone}</div>
                        ) : null}

                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Card>
            </Box>

        </div>
    );
};

export default SignupForm;

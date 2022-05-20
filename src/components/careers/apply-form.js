import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Formik } from 'formik';
import { Container, Section, Row } from '../atoms/Containers';
import { Link } from 'gatsby';
import classNames from 'classnames';

const ALLOWED_FILES = ['application/pdf', 'application/msword'];
const APPLY_JOB_ENDPOINT = 'https://23cl113kk3.execute-api.eu-central-1.amazonaws.com/production/apply-job';
const toDataURL = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const Apply = ({ jobTitle, jobs, dispaly = 'row' }) => {
    return (
        <div id='applyForm'>
            <div className='contactForm'>
                <div className='jobs'>
                    <Formik
                        initialValues={{
                            email: '',
                            name: '',
                            message: '',
                            attachment: null,
                            job_title: jobTitle
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = 'Invalid email address';
                            }
                            if (!values.name) {
                                errors.name = 'Required';
                            }
                            if (!values.job_title) {
                                errors.job_title = 'Required';
                            }
                            if (!values.message) {
                                errors.message = 'Required';
                            }
                            if (!values.attachment) {
                                errors.attachment = 'Required';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            axios
                                .post(APPLY_JOB_ENDPOINT, values)
                                .then(function (response) {
                                    Swal.fire({
                                        icon: 'success',
                                        text: 'Form Submitted.'
                                    });
                                    setSubmitting(false);
                                    resetForm();
                                })
                                .catch(function (error) {
                                    Swal.fire({
                                        icon: 'error',
                                        text: 'Something went wrong'
                                    });
                                    setSubmitting(false);
                                });
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            setFieldValue
                        }) => (
                            <form onSubmit={handleSubmit} name='contact' method='post'>
                                <Row>
                                    <div
                                        className={classNames({
                                            'col-span-12 lg:col-span-6': dispaly === 'row',
                                            'col-span-12': dispaly === 'column'
                                        })}
                                    >
                                        <input
                                            name='name'
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            placeholder='Your Name'
                                            className='block w-full bg-white text-base'
                                        />
                                        <div className='text-red text-sm pt-1' style={{ height: 20 }}>
                                            {errors.name && touched.name && errors.name}
                                        </div>
                                    </div>
                                    <div
                                        className={classNames({
                                            'col-span-12 lg:col-span-6': dispaly === 'row',
                                            'col-span-12': dispaly === 'column'
                                        })}
                                    >
                                        <input
                                            type='email'
                                            name='email'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            placeholder='Your E-mail'
                                            className='block w-full bg-white text-base'
                                        />
                                        <div className='text-red text-sm pt-1' style={{ height: 20 }}>
                                            {errors.email && touched.email && errors.email}
                                        </div>
                                    </div>
                                    <div
                                        className={classNames({
                                            'col-span-12 lg:col-span-6': dispaly === 'row',
                                            'col-span-12': dispaly === 'column'
                                        })}
                                    >
                                        <textarea
                                            name='message'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.message}
                                            placeholder='Personal Note'
                                            className='block w-full bg-white text-base'
                                        >
                                            Your Message
                                        </textarea>
                                        <div className='text-red text-sm pt-1' style={{ height: 20 }}>
                                            {errors.message && touched.message && errors.message}
                                        </div>
                                    </div>
                                    <div
                                        className={classNames({
                                            'col-span-12 lg:col-span-6': dispaly === 'row',
                                            'col-span-12': dispaly === 'column'
                                        })}
                                    >
                                        <label htmlFor='attachment'>
                                            <input
                                                type='file'
                                                id='attachment'
                                                name='file'
                                                className='hidden'
                                                onChange={async (event) => {
                                                    const file = event.target.files[0];
                                                    if (file && ALLOWED_FILES.includes(file.type)) {
                                                        const result = await toDataURL(file);
                                                        setFieldValue('attachment', {
                                                            content: result,
                                                            filename: file.name,
                                                            contentType: file.type
                                                        });
                                                    } else {
                                                        Swal.fire({
                                                            icon: 'error',
                                                            title: 'Invalid File',
                                                            text: 'please select pdf or doc '
                                                        });
                                                    }
                                                }}
                                            />

                                            <select
                                                name='job_title'
                                                type='select'
                                                onBlur={handleBlur}
                                                placeholder='Job Title'
                                                onChange={handleChange}
                                                disabled={Boolean(jobTitle)}
                                                className='block w-full  bg-white text-base'
                                            >
                                                {jobs.map((v, key) => (
                                                    <option value={v} key={key} selected={v === jobTitle}>
                                                        {v}
                                                    </option>
                                                ))}
                                            </select>
                                            <br />
                                            <span className='block w-full truncate text-base text-white bg-blue rounded hover:bg-opacity-70 p-3 cursor-pointer text-center transition-all duration-300'>
                                                CV Attachment (PDF)
                                                {values.attachment && <strong> {values?.attachment?.filename}</strong>}
                                            </span>
                                        </label>
                                        <div className='text-red text-sm pt-1' style={{ height: 20 }}>
                                            {errors.attachment && touched.attachment && errors.attachment}
                                        </div>
                                    </div>
                                    <div className='col-span-12'>
                                        <button
                                            disabled={isSubmitting}
                                            type='submit'
                                            className={classNames(
                                                'gradientBgBtn  w-full text-base font-normal rounded text-white uppercase text-center py-5 px-16 no-underline',
                                                { 'lg:max-w-xs': dispaly === 'row' }
                                            )}
                                        >
                                            {!isSubmitting ? 'APPLY' : 'SUBMITING ...'}
                                        </button>
                                        <p className='text-xs leading-normal text-gray mt-4'>
                                            By submitting this form, you agree to the{' '}
                                            <Link className='text-primary' to='/policies/privacy-policy/'>
                                                Privacy Policy
                                            </Link>
                                        </p>
                                    </div>
                                </Row>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Apply;

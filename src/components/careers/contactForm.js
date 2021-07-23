import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';
import LocationIcon from '../../assets/images/location.svg';
import linkedin from '../../assets/images/linkedin.svg';
import twitter from '../../assets/images/twitter.svg';
import facebook from '../../assets/images/facebook.svg';
const ContactForm = () => {
    return (
        <>
            <div className='max-w-1366px contactForm mx-auto mt-20 xl:mt-28 lg:mt-44 pt-67px pb-67px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'>
                <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
                    <div className='order-1'>
                        <h5 className='text-69px lg:text-80px hidden lg:block font-proximaBold uppercase text-white'>
                            CONTACT
                        </h5>
                    </div>
                    <div className='order-3 xl:order-2'>
                        <div className='mt-20px lg:mb-100px block w-full'>
                            <Formik
                                initialValues={{
                                    email: '',
                                    name: '',
                                    phone: '',
                                    message: '',
                                    terms: false
                                }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.email) {
                                        errors.email = 'Required';
                                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                        errors.email = 'Invalid email address';
                                    }
                                    if (!values.name) {
                                        errors.name = 'Required';
                                    }
                                    if (!values.message) {
                                        errors.message = 'Required';
                                    }
                                    if (!values.terms) {
                                        errors.terms = 'Required';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    axios
                                        .post(
                                            'https://23cl113kk3.execute-api.eu-central-1.amazonaws.com/production/contact-us',
                                            values
                                        )
                                        .then(function (response) {
                                            Swal.fire({
                                                icon: 'success',
                                                text: 'Form Submitted.'
                                            });
                                            setSubmitting(false);
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
                                    isSubmitting
                                    /* and other goodies */
                                }) => (
                                    <form onSubmit={handleSubmit} name='contact' method='post'>
                                        <div className='block w-full mb-30px'>
                                            <input
                                                name='name'
                                                type='text'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                placeholder='Your First Name'
                                                className='block w-full text-formInputColor bg-white text-16px placeholder-formInputColor'
                                            />
                                            <div className='text-red'>
                                                {' '}
                                                {errors.name && touched.name && errors.name}
                                            </div>
                                        </div>
                                        <div className='block w-full mb-30px'>
                                            <input
                                                type='email'
                                                name='email'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                placeholder='E-mail Address'
                                                className='block w-full text-formInputColor bg-white text-16px placeholder-formInputColor'
                                            />
                                            <div className='text-red'>
                                                {' '}
                                                {errors.email && touched.email && errors.email}
                                            </div>
                                        </div>
                                        <div className='block w-full mb-30px'>
                                            <input
                                                type='phone'
                                                name='phone'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone}
                                                placeholder='Phone'
                                                className='block w-full text-formInputColor bg-white text-16px placeholder-formInputColor'
                                            />
                                            <div className='text-red'>
                                                {' '}
                                                {errors.phone && touched.phone && errors.phone}
                                            </div>
                                        </div>
                                        <div className='block w-full mb-30px'>
                                            <textarea
                                                name='message'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.message}
                                                placeholder='Your Message'
                                                className='block w-full bg-white text-16px mb-30px text-formInputColor placeholder-formInputColor'
                                            >
                                                Your Message
                                            </textarea>
                                            <div className='text-red'>
                                                {' '}
                                                {errors.message && touched.message && errors.message}
                                            </div>
                                            <div className='block w-full mb-30px'>
                                                <p className='text-12px leading-6 text-black'>
                                                    By submitting this form you understand and agree that CYSCALE
                                                    SYSTEMS may contact you regarding your interest about our services,
                                                    partners and products as well as receiving electronic communications
                                                    from us and our partners including news, events, updates, and
                                                    promotional offers. You may withdraw your consent and unsubscribe
                                                    from such marketing communication at any time. You also acknowledge
                                                    and accept Cyscale’s Privacy Policy, including its use of cookies.
                                                </p>
                                            </div>
                                            <div className='block w-full mb-30px'>
                                                <label
                                                    htmlFor='termsAccept'
                                                    className='css-checkbox text-12px leading-6 text-black'
                                                >
                                                    <input
                                                        type='checkbox'
                                                        id='termsAccept'
                                                        name='terms'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.terms}
                                                    />
                                                    <i></i>I agree to{' '}
                                                    <a
                                                        href='https://cyscale.com/policies/privacy-policy'
                                                        className='text-12px text-blue leading-6 underline hover:no-underline hover:text-red'
                                                    >
                                                        Cyscale’s Privacy Policy
                                                    </a>
                                                </label>
                                                <div className='text-red'>
                                                    {' '}
                                                    {errors.terms && touched.terms && errors.terms}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='block w-full'>
                                            {!isSubmitting ? (
                                                <button
                                                    disabled={isSubmitting}
                                                    type='submit'
                                                    className='gradientBgBtn w-full  block text-16px font-normal rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px no-underline'
                                                >
                                                    SUBMIT
                                                </button>
                                            ) : (
                                                <button
                                                    disabled={isSubmitting}
                                                    type='button'
                                                    className='gradientBgBtn w-full  block text-16px font-normal rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px no-underline'
                                                >
                                                    SUBMITING ...
                                                </button>
                                            )}
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                        <div className='w-full contactAddress mt-100px flex lg:hidden flex-col'>
                            <img src={LocationIcon} className='w-5' alt='location' />
                            <p className='text-16px leading-6 text-black font-bold mb-30px'>CYSCALE</p>
                            <p className='text-16px leading-6 text-black font-light mb-30px'>
                                Made in Cluj-Napoca, Romania
                                <br />
                                Abatorului 150D str, Floresti
                                <br />
                            </p>
                            <a
                                href='https://www.google.com/maps/place/Cyscale/@46.7448487,23.5033424,15z'
                                className='text-blue underline font-light tezt-14px uppercase mb-30px'
                            >
                                View map
                            </a>
                        </div>
                        <div className='flex flex-row flex-nowrap justify-center space-x-4'>
                            <a href='https://www.linkedin.com/company/cyscale'>
                                <img src={linkedin} alt='linkedin' />
                            </a>
                            <a href='https://www.twitter.com/cyscale'>
                                <img src={twitter} alt='twitter' />
                            </a>
                            <a href='https://www.facebook.com/cyscale'>
                                <img src={facebook} alt='facebook' />
                            </a>
                        </div>
                    </div>
                    <div className='order-2 xl:order-3'>
                        <h6 className='text-blue text-34px lg:w-96 leading-8 new-line sectionTitle'>
                            join us or just say hello.
                        </h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;

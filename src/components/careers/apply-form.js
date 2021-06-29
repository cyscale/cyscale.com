import React from "react";
import { Formik } from "formik";

const Apply = () => {
  return (
    <div id="applyForm">
      <div className="max-w-1366px jobs mx-auto pt-100px mb-100px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <div className="mt-20px lg:mb-100px block w-full contactForm ">
          <Formik
            initialValues={{
              email: "",
              firstName: "",
              lastName: "",
              phoneNumber: "",
              message: "",
              attachments: false,
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.firstName) {
                errors.firstName = "Required";
              }
              if (!values.lastName) {
                errors.lastName = "Required";
              }
              if (!values.phoneNumber) {
                errors.phoneNumber = "Required";
              }
              if (!values.message) {
                errors.message = "Required";
              }
              if (!values.attachments) {
                errors.attachments = "Required";
              }
              return errors;
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
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} name="contact" method="post">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                  <div className="block w-full">
                    <input
                      name="name"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      placeholder="Your First Name"
                      className="block w-full text-formInputColor bg-white text-16px placeholder-formInputColor"
                    />
                    <div className="text-red">
                      {" "}
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}
                    </div>
                  </div>
                  <div className="block w-full">
                    <input
                      name="name"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      placeholder="Your Last Name"
                      className="block w-full text-formInputColor bg-white text-16px placeholder-formInputColor"
                    />
                    <div className="text-red">
                      {" "}
                      {errors.lastName && touched.lastName && errors.lastName}
                    </div>
                  </div>
                  <div className="block w-full">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Your E-mail"
                      className="block w-full text-formInputColor bg-white text-16px placeholder-formInputColor"
                    />
                    <div className="text-red">
                      {" "}
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>
                  <div className="block w-full">
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                      placeholder="Your Phone Number"
                      className="block w-full text-formInputColor bg-white text-16px placeholder-formInputColor"
                    />
                    <div className="text-red">
                      {" "}
                      {errors.phoneNumber &&
                        touched.phoneNumber &&
                        errors.phoneNumber}
                    </div>
                  </div>
                  <div className="block w-full">
                    <textarea
                      name="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      placeholder="Personal Note"
                      className="block w-full bg-white text-16px text-formInputColor placeholder-formInputColor"
                    >
                      Your Message
                    </textarea>
                    <div className="text-red">
                      {" "}
                      {errors.message && touched.message && errors.message}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="attachments">
                      <input
                        type="file"
                        id="attachments"
                        className="hidden"
                        name="attachments"
                      />
                      <span className="block max-w-220px uppercase text-16px text-white bg-blue rounded hover:bg-grey2 pt-25px pb-25px pl-15x pr-15px cursor-pointer text-center transition-all duration-300">
                        attach resume
                      </span>
                    </label>
                    <p className="text-black text-16px font-semibold">
                      Attachment Name
                    </p>
                    <div className="text-red">
                      {" "}
                      {errors.attachments &&
                        touched.attachments &&
                        errors.attachments}
                    </div>
                  </div>
                  <div>
                  <div className="block w-full">
                    {!isSubmitting ? (
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="gradientBgBtn min-w-232px text-16px font-normal rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px no-underline"
                      >
                        APPLY
                      </button>
                    ) : (
                      <button
                        disabled={isSubmitting}
                        type="button"
                        className="gradientBgBtn  min-w-232px text-16px font-normal rounded text-white uppercase text-center pt-21px pb-21px pl-49px pr-49px no-underline"
                      >
                        SUBMITING ...
                      </button>
                    )}
                  </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Apply;

import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Formik } from "formik";

const Apply = ({ data }) => {
  console.log(data)
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
  return (
    <div id="applyForm">
      <div className="max-w-1366px jobs mx-auto pt-100px mb-100px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <div className="mt-20px lg:mb-100px block w-full contactForm ">
          <Formik
            initialValues={{
              email: "",
              name: "",
              message: "",
              attachment: null,
              job_title: data.frontmatter.title,
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
              if (!values.name) {
                errors.name = "Required";
              }
              if (!values.message) {
                errors.message = "Required";
              }
              if (!values.attachment) {
                errors.attachment = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {

              axios
                .post(
                  "https://23cl113kk3.execute-api.eu-central-1.amazonaws.com/production/apply-job",
                  values
                )
                .then(function (response) {
                  Swal.fire({
                    icon: "success",
                    text: "Form Submitted.",
                  });
                  setSubmitting(false);
                  resetForm()
                })
                .catch(function (error) {
                  Swal.fire({
                    icon: "error",
                    text: "Something went wrong",
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
              setFieldValue,
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
                      value={values.name}
                      placeholder="Your Name"
                      className="block w-full text-formInputColor bg-white text-16px placeholder-formInputColor"
                    />
                    <div className="text-red">
                      {" "}
                      {errors.name &&
                        touched.name &&
                        errors.name}
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
                    <label htmlFor="attachment">
                      <input
                        type="file"
                        id="attachment"
                        name="file"
                        className="hidden"
                        onChange={async (event) => {
                          console.log(event.target.files[0].type)
                          if ((event.target.files[0].type.includes("pdf"))
                            || (event.target.files[0].type.includes("doc"))
                            || (event.target.files[0].type.includes("docs"))
                            || (event.target.files[0].type.includes("msword"))) {
                            const result = await toBase64(event.target.files[0]);
                            setFieldValue("attachment", result);

                          } else {
                            Swal.fire({
                              title: 'Invalid File',
                              icon: 'error',
                              text: 'please select pdf or doc ',

                            });
                          }


                        }
                        }
                      />
                      <input
                        name="job_title"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled
                        value={values.job_title}
                        placeholder="job Title"
                        className="block job_title w-full text-formInputColor bg-white text-16px placeholder-formInputColor bg-lightGrey2"
                      />
                      <br />
                      <span className="block max-w-220px uppercase text-16px text-white bg-blue rounded hover:bg-grey2 pt-25px pb-25px pl-15x pr-15px cursor-pointer text-center transition-all duration-300">
                        attachment
                      </span>
                    </label>
                    {/* <p className="text-black text-16px font-semibold">
                      Attachment Name
                    </p> */}
                    <div className="text-red">
                      {" "}
                      {errors.attachment &&
                        touched.attachment &&
                        errors.attachment}
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

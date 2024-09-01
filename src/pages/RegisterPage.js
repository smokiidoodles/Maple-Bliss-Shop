//Formik is a useful tool when adding error messaging and required guidlines into user forms.
//The component below creates a page where users can register for an account.
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function RegisterPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-baskervville mb-6">Register</h1>
      <Formik
        initialValues={{
          firstName: '',
          surname: '',
          username: '',
          email: '',
          password: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = 'Required';
          }
          if (!values.surname) {
            errors.surname = 'Required';
          }
          if (!values.username) {
            errors.username = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label className="block mb-2">First Name</label>
              <Field
                type="text"
                name="firstName"
                className="w-full p-2 border border-darkGreen rounded"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className="block mb-2">Surname</label>
              <Field
                type="text"
                name="surname"
                className="w-full p-2 border border-darkGreen rounded"
              />
              <ErrorMessage
                name="surname"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className="block mb-2">Username</label>
              <Field
                type="text"
                name="username"
                className="w-full p-2 border border-darkGreen rounded"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full p-2 border border-darkGreen rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className="block mb-2">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full p-2 border border-darkGreen rounded"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-darkGreen text-pale py-2 px-4 rounded"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterPage;

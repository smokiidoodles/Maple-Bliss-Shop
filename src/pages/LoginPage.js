import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';



// The component below handles User log in. And it uses context from the User slice file in redux.
//Formik was also used for the user form.

function LoginPage() {
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-baskervville mb-6">Login</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(login(values.username));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
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
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginPage;

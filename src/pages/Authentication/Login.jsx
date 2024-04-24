import { Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik, validateYupSchema } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const initialValues = { email: "", password: "" };
const validationSchema = {
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
};
const Login = () => {
  const [formValue, setFormValue] = useState();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("handle submit", values);
  };
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Enter Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="email"
                component={"div"}
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="password"
                placeholder="Enter password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="password"
                component={"div"}
                className="text-red-500"
              />
            </div>
          </div>
          <Button
            sx={{ padding: ".8rem 0rem" }}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Form>
      </Formik>
      <div className="flex gap-5 items-center justify-center pt-5">
        if you don't have account ?
        <Button onClick={()=>navigate("/register")}>Register</Button>
      </div>
    </>
  );
};

export default Login;

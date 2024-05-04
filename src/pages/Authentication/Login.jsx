import { Button, Card, Grid, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik, validateYupSchema } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { loginUserAction } from "../../Redux/Auth/auth.action";
import bg from "../../assets/b4.png";

const initialValues = { email: "", password: "" };
const validationSchema = {
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
};
const Login = () => {
  const [formValue, setFormValue] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(loginUserAction({ data: values }));
  };
  return (
    <div>
      <Grid container>
        <Grid
          className="flex items-center h-screen overflow-hidden"
          item
          xs={8}
        >
          <img className="w-full h-full" src={bg} alt="Background" style={{
          }} />
        </Grid>
        <Grid item xs={4} className="flex items-center">
          <div className="flex flex-col px-20 justify-self-center">
            <Card className="p-8 card">
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="text-center log">Social Fitness</h1>
                <p className="text-center text-sm w-[70%]">
                  Welcome and Share your health and fitness information
                </p>
              </div>
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
              <div className="flex items-center justify-center gap-5 pt-5">
                if you don't have account ?
                <Button onClick={() => navigate("/register")}>Register</Button>
              </div>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;

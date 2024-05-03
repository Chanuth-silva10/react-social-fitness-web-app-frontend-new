import { Card, Grid } from "@mui/material";
import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";

const Authentication = () => {
  return (
    <div>
      <Grid container>
        <Grid
          className="flex items-center h-screen overflow-hidden"
          item
          xs={7}
        >
          <img className="w-full h-full" src="" alt="Background" />
        </Grid>
        <Grid item xs={5} className="flex items-center">
          <div className="flex flex-col px-20 justify-self-center">
            <Card className="p-6 card">
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="text-center log">Social Fitness</h1>
                <p className="text-center text-sm w-[70%]">
                  Welcome and Share your health and fitness information
                </p>
              </div>
              <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
              </Routes>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;

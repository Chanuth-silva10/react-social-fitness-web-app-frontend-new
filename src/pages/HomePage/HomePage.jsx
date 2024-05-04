import { Grid } from "@mui/material";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Middelpart from "../../components/Middelpart/Middelpart";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeRight from "../../components/HomeRight/HomeRight";
import Profile from "../Profile/Profile";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {auth}=useSelector(store=>store)
  const jwt=localStorage.getItem("jwt");

  return (
    <div className="px-20">
      <Grid container spacing={0}>
        <Grid item xs={0} lg={3}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>
        <Grid
          lg={location.pathname === "/" ? 6 : 9}
          item
          className="flex justify-center px-5"
          xs={12}
        >
          <Routes>
            <Route path="/" element={<Middelpart />}></Route>
          </Routes>
        </Grid>

        {location.pathname === "/" && (
          <Grid item lg={3} className="relative">
            <div className="sticky top-0 w-full">
              <HomeRight />
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default HomePage;

import React from "react";
import { navigationMenu } from "./SidebarNavigation";
import { Avatar, Divider, Button, Card, Popover, MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";

const Sidebar = () => {
  const {auth}=useSelector(store=>store)
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const jwt=localStorage.getItem("jwt");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (item)=>{
    if(item.title==="Profile"){
      navigate(`/profile/${auth.user?.id}`)
    }
    if(item.title==="Home"){
      navigate(`/`)
    }
  }

  const open = Boolean(anchorEl);

  const popoverId = open ? 'popover-basic' : undefined;

  return (
    <Card className="flex flex-col justify-between h-screen py-5 card">
      <div className="pl-5 space-y-8">
        <div className="">
          <span className="text-xl font-bold logo">Social Fitness</span>
        </div>

        <div className="space-y-8">
          {navigationMenu.map((item) => (
            <div onClick={()=>handleNavigate(item)} className="flex items-center space-x-3 cursor-pointer" key={item.title}>
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Divider />
        <div className="flex items-center justify-between pl-5">
          <div className="flex items-center space-x-3">
            {
              auth.user?.proImage === "" ? (
                <Avatar
                  sx={{
                    height: "3rem",
                    width: "3rem",
                    fontSize: "1rem",
                    bgcolor: red[500]
                  }}
                >
                  {auth.user.firstName[0]}
                </Avatar>
              ) : (
                <Avatar
                  sx={{ width: "3rem", height: "3rem" }}
                  src={auth.user?.proImage}
                ></Avatar>
              )
            }
            <div>
              <p className="font-bold">{auth.user?.firstName + " " + auth.user?.lastName}</p>
              <p className="opacity-70">@{auth.user?.firstName.toLowerCase() + "_" + auth.user?.lastName.toLowerCase()}</p>
            </div>
          </div>
          <Button
            id="basic-button"
            aria-describedby={popoverId}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </Button>
          <Popover
            id={popoverId}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Popover>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;

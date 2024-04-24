import React from "react";
import { navigationMenu } from "./SidebarNavigation";
import { Avatar, Divider, Menu, MenuItem , Button, Card} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card className="flex flex-col justify-between h-screen py-5 card">
      <div className="pl-5 space-y-8">
        <div className="">
          <span className="text-xl font-bold logo">Social Fitness</span>
        </div>

        <div className="space-y-8">
          {navigationMenu.map((item) => (
            <div className="flex items-center space-x-3 cursor-point">
              {item.icon}
              <p className="text-x1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Divider />
        <div className="items-center justify-between pl-5 felx">
          <div className="flex items-center space-x-3">
            <Avatar src="" />
            <div>
              <p className="font-bold">hi welcome</p>
              <p className="opacity-70">@SocialFitness</p>
            </div>
          </div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon/>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;

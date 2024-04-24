import { Avatar, Box, Button, Tab, Tabs } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const tabs = [
  { value: "post", name: "post" },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" },
  { value: "repost", name: "Repost" },
];

const Profile = () => {
  const { id } = useParams();
  const [value, setValue] = React.useState("post");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="py-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://cdn.pixabay.com/photo/2014/01/13/20/01/pebbles-243910_640.jpg"
            alt=""
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
            src=""
          />
          {true ? (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Edit Profile
            </Button>
          ) : (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Follow
            </Button>
          )}
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 text-xl font-bold">Social Fitness</h1>
            <p>@Chanuth</p>
          </div>
          <div className="flex items-center gap-5 py-3">
            <span>41 post</span>
            <span>35 followrs</span>
            <span>5 following</span>
          </div>
          <div>
            <p>fhhfhfbshcbhsdbchd cdcdhcud cudhcuyhduc uhudhcudddj</p>
          </div>
        </div>
        <section>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((item) => (
                <Tab value={item.value} label={item.name} wrapped></Tab>
              ))}
            </Tabs>
          </Box>
        </section>
      </div>
    </div>
  );
};

export default Profile;

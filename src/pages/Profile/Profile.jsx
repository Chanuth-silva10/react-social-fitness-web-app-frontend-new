import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/Post/PostCard";
import UserReelCard from "../../components/Reels/UserReelCard";

const tabs = [
  { value: "post", name: "post" },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" },
];

const posts = [1, 1, 1, 1, 1];
const reels = [1, 1, 1, 1, 1];
const savedPost = [1, 1, 1, 1, 1];
const repost = [1, 1, 1, 1, 1];
const Profile = () => {
  const { id } = useParams();
  const [value, setValue] = React.useState("post");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card className="my-10 w-[70%]">
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
        <Box
          sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}
        ></Box>
        <div className="flex justify-center">
          {value === "post" ? (
            <div className="space-y-5 w-[70%] my-10">
              {posts.map((item) => (
                <div className="border rounded-md border-slate-100">
                  <PostCard />
                </div>
              ))}
            </div>
          ) : value === "reels" ? (
            <div className="flex flex-wrap justify-center gap-2 my-10">
              {reels.map((item) => (
                <UserReelCard />
              ))}
            </div>
          ) : value === "saved" ? (
            <div className="space-y-5 w-[70%] my-10">
              {savedPost.map((item) => (
                <div className="border rounded-md border-slate-100">
                  <PostCard />
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Card>
  );
};

export default Profile;

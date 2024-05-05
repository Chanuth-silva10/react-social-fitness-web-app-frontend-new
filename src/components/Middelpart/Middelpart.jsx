import {
  Avatar,
  Card,
  IconButton,
  Box,
  Button,
  Tab,
  Tabs,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from "@mui/icons-material/Image";
import PostCard from "../Post/PostCard";
import CreatePostModal from "../CreatePost/CreatePostModal";
import { useDispatch, useSelector } from "react-redux";
import { getALlPostAction } from "../../Redux/Post/post.action";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import { red } from "@mui/material/colors";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { getALlMealPlanPostAction } from "../../Redux/MealPlan/mealPlan.action";
import { getALlStatusPostAction } from "../../Redux/Status/status.action";
import { getALlGoalPostAction } from "../../Redux/Goal/goal.action";
import MealPostCard from "../MealPlan/MealPostCard";
import StatusPostCard from "../Status/StatusPostCard";
import GoalPostCard from "../Goal/GoalPostCard";

const story = [11, 1, 1, 1, 1];

const tabs = [
  { value: "post", name: "post" },
  { value: "goal", name: "Work Goal" },
  { value: "status", name: "Work Status" },
  { value: "meals", name: "Meal Plan" },
];

const Middelpart = () => {
  const dispatch = useDispatch();
  const { post, auth, meal, goal, status} = useSelector((store) => store);
  const [openCreatePostModal, setOpenCreatePostModal] = useState();
  const handleCloseCreatePostModal = () => setOpenCreatePostModal(false);
  const [value, setValue] = React.useState("post");
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenCreatePostModel = () => {
    setOpenCreatePostModal(true);
  };

  useEffect(() => {
    dispatch(getALlPostAction());
  }, [post.newComment]);

  useEffect(() => {
    dispatch(getALlMealPlanPostAction());
  }, [meal.newComment]);

  useEffect(() => {
    dispatch(getALlGoalPostAction());
  }, [goal.newComment]);

  useEffect(() => {
    dispatch(getALlStatusPostAction());
  }, [status.newComment]);
  
  return (
    <div className="px-20">
      <section className="flex items-center p-5 py-5 rounded-b-md">
        <div className="flex flex-col items-center p-5 py-5 rounded-b-md">
          <Avatar sx={{ width: "5rem", height: "5rem" }} src="">
            <FollowTheSignsIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>View</p>
          <p>Profile</p>
        </div>
        {story.map((item) => (
          <StoryCircle />
        ))}
      </section>
      <Card className="p-5 mt-5 mb-10">
        <div className="flex justify-between">
          {auth.user?.proImage === "" ? (
            <Avatar
              sx={{
                height: "3rem",
                width: "3rem",
                fontSize: "1rem",
                bgcolor: red[500],
              }}
            >
              {auth.user.firstName[0]}
            </Avatar>
          ) : (
            <Avatar
              sx={{ width: "3rem", height: "3rem" }}
              src={auth.user?.proImage}
            ></Avatar>
          )}
          <input
            onClick={handleOpenCreatePostModel}
            readOnly
            placeholder="What's on your mind?"
            className="outline-none w-[80%] rounded-full px-5 bg-transparent border-[#3b4054] border"
            type="text"
          />
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <PermMediaIcon />
            </IconButton>
          </div>
        </div>
      </Card>
      <Box sx={{ width: "100%", borderTop: 1, borderColor: "divider" }}></Box>
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
      <div className="mt-5 space-y-5">
        {value === "post" ? (
          <div className="space-y-5 w-[100%] my-10">
            {post.posts.map((item) => (
              <div className="border rounded-md border-slate-100">
                <PostCard item={item} />
              </div>
            ))}
          </div>
        ) : value === "meals" ? (
          <div className="space-y-5 w-[100%] my-10">
            {meal.posts.map((item) => (
              <div className="border rounded-md border-slate-100">
                <MealPostCard item={item} />
              </div>
            ))}
          </div>
        ) : value === "status" ? (
          <div className="space-y-5 w-[100%] my-10">
            {status.posts.map((item) => (
              <div className="border rounded-md border-slate-100">
                <StatusPostCard item={item} />
              </div>
            ))}
          </div>
        ) : value === "goal" ? (
          <div className="space-y-5 w-[100%] my-10">
            {goal.posts.map((item) => (
              <div className="border rounded-md border-slate-100">
                <GoalPostCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      <div>
        <CreatePostModal
          handleClose={handleCloseCreatePostModal}
          open={openCreatePostModal}
        />
      </div>
    </div>
  );
};

export default Middelpart;

import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/Post/PostCard";
import { useDispatch, useSelector } from "react-redux";
import ProfileModal from "./ProfileModal";
import { getALlPostAction } from "../../Redux/Post/post.action";
import { getALlMealPlanPostAction } from "../../Redux/MealPlan/mealPlan.action";
import MealPostCard from "../../components/MealPlan/MealPostCard";
import StatusPostCard from "../../components/Status/StatusPostCard";
import GoalPostCard from "../../components/Goal/GoalPostCard";
import { getALlStatusPostAction } from "../../Redux/Status/status.action";
import { getALlGoalPostAction } from "../../Redux/Goal/goal.action";

const tabs = [
  { value: "post", name: "post" },
  { value: "goal", name: "Work Goal" },
  { value: "status", name: "Work Status" },
  { value: "meals", name: "Meal Plan" },
];

const Profile = () => {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { auth, post, meal, goal, status } = useSelector((store) => store);
  const [value, setValue] = React.useState("post");
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const userPosts = post.posts.filter(
    (item) => item.user.id === auth.user.id
  );

  const userMealPosts = meal.posts.filter(
    (item) => item.user.id === auth.user.id
  );
  const userGoalPosts = goal.posts.filter(
    (item) => item.user.id === auth.user.id
  );
  const userStatusPosts = status.posts.filter(
    (item) => item.user.id === auth.user.id
  );

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
            src={auth.user?.proImage}
          />
          {true ? (
            <Button
              sx={{ borderRadius: "20px" }}
              variant="outlined"
              onClick={handleOpenProfileModal}
            >
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
            <h1 className="py-1 text-xl font-bold">
              {auth.user?.firstName + " " + auth.user?.lastName}
            </h1>
            <p>
              @
              {auth.user?.firstName.toLowerCase() +
                "_" +
                auth.user?.lastName.toLowerCase()}
            </p>
          </div>
          <div className="flex items-center gap-5 py-3">
            <span>41 post</span>
            <span>35 followrs</span>
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
              {userPosts.map((item) => (
                <div className="border rounded-md border-slate-100">
                  <PostCard item={item} />
                </div>
              ))}
            </div>
          ) : value === "meals" ? (
            <div className="space-y-5 w-[70%] my-10">
              {userMealPosts.map((item) => (
                <div className="border rounded-md border-slate-100">
                  <MealPostCard item={item} />
                </div>
              ))}
            </div>
          ) : value === "status" ? (
            <div className="space-y-5 w-[70%] my-10">
              {userStatusPosts.map((item) => (
                <div className="border rounded-md border-slate-100">
                  <StatusPostCard item={item} />
                </div>
              ))}
            </div>
          ) : value === "goal" ? (
            <div className="space-y-5 w-[70%] my-10">
              {userGoalPosts.map((item) => (
                <div className="border rounded-md border-slate-100">
                  <GoalPostCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <section>
        <ProfileModal open={open} handleClose={handleClose} />
      </section>
    </Card>
  );
};

export default Profile;

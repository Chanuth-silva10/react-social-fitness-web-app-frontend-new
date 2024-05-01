import { Avatar, Card, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import PostCard from "../Post/PostCard";
import CreatePostModal from "../CreatePost/CreatePostModal";
import { useDispatch, useSelector } from "react-redux";
import { getALlPostAction } from "../../Redux/Post/post.action";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";

const story = [11, 1, 1, 1, 1];
const Middelpart = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((store) => store);
  const [openCreatePostModal, setOpenCreatePostModal] = useState();
  const handleCloseCreatePostModal = () => setOpenCreatePostModal(false);

  const handleOpenCreatePostModel = () => {
    setOpenCreatePostModal(true);
    console.log("Open the post model");
  };

  useEffect(() => {
    dispatch(getALlPostAction());
  }, [post.newComment]);

  return (
    <div className="px-20">
      <section className="flex items-center p-5 py-5 rounded-b-md">
        <div className="flex flex-col items-center p-5 py-5 rounded-b-md">
          <Avatar sx={{ width: "5rem", height: "5rem" }} src="">
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>New</p>
        </div>
        {story.map((item) => (
          <StoryCircle />
        ))}
      </section>
      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input
            onClick={handleOpenCreatePostModel}
            readOnly
            className="outline-none w-[90%] rounded-full px-5 bg-transparent border-[#3b4054] border"
            type="text"
          />
        </div>
        <div className="flex justify-center mt-5 space-x-9">
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ImageIcon />
            </IconButton>
            <span>Post</span>
          </div>
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <FlagCircleIcon />
            </IconButton>
            <span>Goals</span>
          </div>
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <FitnessCenterIcon />
            </IconButton>
            <span>Status</span>
          </div>
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <LunchDiningIcon />
            </IconButton>
            <span>Meals</span>
          </div>
        </div>
      </Card>
      <div className="mt-5 space-y-5">
        {post.posts.map((item) => (
          <PostCard item={item} />
        ))}
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

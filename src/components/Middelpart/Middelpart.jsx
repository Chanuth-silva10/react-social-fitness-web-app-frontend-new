import { Avatar, Card, IconButton } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";
import CreatePostModal from "../CreatePost/CreatePostModal";

const story = [11, 1, 1, 1, 1];
const posts = [1, 1, 1, 1, 1];
const Middelpart = () => {
  const [openCreatePostModal, setOpenCreatePostModal] = useState();
  const handleCloseCreatePostModal=()=>setOpenCreatePostModal(false);


  const handleOpenCreatePostModel = () => {
    setOpenCreatePostModal(true);
    console.log("Open the post model");
  };

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
            <span>media</span>
          </div>
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <VideocamIcon />
            </IconButton>
            <span>video</span>
          </div>
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ArticleIcon />
            </IconButton>
            <span>write post</span>
          </div>
        </div>
      </Card>
      <div className="mt-5 space-y-5">
        {posts.map((item)=><PostCard />)}
      </div>

      
      <div>
        <CreatePostModal handleClose={handleCloseCreatePostModal} open={openCreatePostModal}/>
      </div>

    </div>
  );
};

export default Middelpart;

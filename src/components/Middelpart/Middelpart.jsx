import { Avatar, Card, IconButton } from "@mui/material";
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
import PermMediaIcon from '@mui/icons-material/PermMedia';

const story = [11, 1, 1, 1, 1];
const Middelpart = () => {
  const dispatch = useDispatch();
  const { post, auth } = useSelector((store) => store);
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
            <FollowTheSignsIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>Friends</p>
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

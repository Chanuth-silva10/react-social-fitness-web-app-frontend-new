import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Typography,
  Card,
  Tab,
  Tabs,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import VideoIcon from "@mui/icons-material/VideoCall";
import { uploadToCloudinary } from "../../utils/uploadToCloudniry";
import { useDispatch, useSelector } from "react-redux";
import {
  createCommentAction,
  createPostAction,
} from "../../Redux/Post/post.action";
import { red } from "@mui/material/colors";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadious: ".6rem",
  outline: "none",
};

const CreatePostModal = ({ handleClose, open }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const [selectedImage, setSelectedImage] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectImage = async (event) => {
    setIsLoading(true);
    const imageUrl = await uploadToCloudinary(event.target.files[0], "image");
    setSelectedImage(imageUrl);
    setIsLoading(false);
    formik.setFieldValue("image", imageUrl);
  };

  const handleSelectVideo = async (event) => {
    setIsLoading(true);
    const videoUrl = await uploadToCloudinary(event.target.files[0], "video");
    console.log(videoUrl);
    console.log(event);
    setSelectedVideo(videoUrl);
    setIsLoading(false);
    formik.setFieldValue("video", videoUrl);
  };

  const formik = useFormik({
    initialValues: {
      caption: "",
      image: "",
      video: "",
    },
    onSubmit: (values) => {
      dispatch(createPostAction(values));
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <div className="flex items-center space-x-4">
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
              <div>
                <p className="text-lg font-bold">
                  {auth.user.firstName} with Social Fitness
                </p>
                <p className="text-sm">@{auth.user.firstName}</p>
              </div>
            </div>














            
            <textarea
              className="outline-none w-full mt-5 p-2 
              bg-transparent border border-[#3b4054] rounded-sm"
              placeholder="Write Description..."
              name="caption"
              id=""
              onChange={formik.handleChange}
              value={formik.values.caption}
              rows="4"
            ></textarea>
            <div className="flex items-center mt-5 space-x-5">
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelectImage}
                  style={{ display: "none" }}
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <IconButton color="primary" component="span">
                    <ImageIcon />
                  </IconButton>
                </label>
                <span>Image</span>
              </div>
              <div>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleSelectVideo}
                  style={{ display: "none" }}
                  id="video-input"
                />
                <label htmlFor="video-input">
                  <IconButton color="primary" component="span">
                    <VideoIcon />
                  </IconButton>
                </label>
                <span>Video</span>
              </div>
              <div>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleSelectVideo}
                  style={{ display: "none" }}
                  id="video-input"
                />
                <label htmlFor="video-input">
                  <IconButton color="primary" component="span">
                    <FlagCircleIcon />
                  </IconButton>
                </label>
                <span>Goals</span>
              </div>
              <div>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleSelectVideo}
                  style={{ display: "none" }}
                  id="video-input"
                />
                <label htmlFor="video-input">
                  <IconButton color="primary" component="span">
                    <FitnessCenterIcon />
                  </IconButton>
                </label>
                <span>Status</span>
              </div>
              <div>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleSelectVideo}
                  style={{ display: "none" }}
                  id="video-input"
                />
                <label htmlFor="video-input">
                  <IconButton color="primary" component="span">
                    <LunchDiningIcon />
                  </IconButton>
                </label>
                <span>Meals</span>
              </div>
            </div>
            {selectedImage && (
              <div className="flex items-center mt-5">
                <img className="h-[10rem]" src={selectedImage} alt="" />
              </div>
            )}
            {selectedVideo && (
              <div className="flex items-center mt-5">
                <video className="h-[10rem]" controls>
                  <source src={selectedVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <div className="flex justify-end w-full mt-8">
              <Button
                variant="contained"
                type="submit"
                sx={{ borderRadius: "1.5rem" }}
              >
                Post and Share
              </Button>
            </div>
          </div>
        </form>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Modal>
  );
};

export default CreatePostModal;

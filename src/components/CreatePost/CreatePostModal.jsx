import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  MenuItem,
  Modal,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import VideoIcon from "@mui/icons-material/VideoCall";
import { uploadToCloudinary } from "../../utils/uploadToCloudniry";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "../../Redux/Post/post.action";
import { red } from "@mui/material/colors";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { createStatusPostAction } from "../../Redux/Status/status.action";
import { createMealPlanPostAction } from "../../Redux/MealPlan/mealPlan.action";
import { createGoalPostAction } from "../../Redux/Goal/goal.action";

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

const tabs = [
  { value: "post", name: "post" },
  { value: "goal", name: "Work Goal" },
  { value: "status", name: "Work Status" },
  { value: "meals", name: "Meal Plan" },
];

const CreatePostModal = ({ handleClose, open }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const [selectedImage, setSelectedImage] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = React.useState("post");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelectImage = async (event) => {
    setIsLoading(true);
    const imageUrl = await uploadToCloudinary(event.target.files[0], "image");
    setSelectedImage(imageUrl);
    setIsLoading(false);
    formik.setFieldValue("image", imageUrl);
  };

  const handleSelectMealImage = async (event) => {
    setIsLoading(true);
    const imageUrl = await uploadToCloudinary(event.target.files[0], "image");
    setSelectedImage(imageUrl);
    setIsLoading(false);
    formikMeals.setFieldValue("image", imageUrl);
  };

  const handleSelectVideo = async (event) => {
    setIsLoading(true);
    const videoUrl = await uploadToCloudinary(event.target.files[0], "video");
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

  const formikStatus = useFormik({
    initialValues: {
      caption: "",
      distanceRun: "",
      pushupsCompleted: "",
      weightLifted: "",
    },
    onSubmit: (values) => {
      dispatch(createStatusPostAction(values));
    },
  });

  const formikMeals = useFormik({
    initialValues: {
      caption: "",
      image: "",
      recipe: "",
      dietaryPreferences: "",
    },
    onSubmit: (values) => {
      dispatch(createMealPlanPostAction(values));
    },
  });

  const formikGoals = useFormik({
    initialValues: {
      route: "",
      setCount: "",
      repsType: "",
    },
    onSubmit: (values) => {
      dispatch(createGoalPostAction(values));
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
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-4 w-[100%] my-4"
            >
              <div>
                <textarea
                  className="outline-none w-full mt-5 p-2 
                bg-transparent border border-[#3b4054] rounded-sm"
                  placeholder="Write Your Post ..."
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
                    Post
                  </Button>
                </div>
              </div>
            </form>
          ) : value === "meals" ? (
            <form
              onSubmit={formikMeals.handleSubmit}
              className="space-y-4 w-[100%] my-4"
            >
              <div>
                <textarea
                  className="outline-none w-full mt-5 p-2 
              bg-transparent border border-[#3b4054] rounded-sm"
                  placeholder="Write Description..."
                  name="caption"
                  id=""
                  onChange={formikMeals.handleChange}
                  value={formikMeals.values.caption}
                  rows="4"
                ></textarea>
                <div className="mt-2 space-y-4">
                  <TextField
                    fullWidth
                    id="dietaryPreferences"
                    select
                    name="dietaryPreferences"
                    label="Select your Dietary Preferences "
                    value={formikMeals.values.dietaryPreferences}
                    onChange={formikMeals.handleChange}
                  >
                    <MenuItem value="vegetarian">Vegetarian</MenuItem>
                    <MenuItem value="vegan">Vegan</MenuItem>
                    <MenuItem value="keto">Keto</MenuItem>
                  </TextField>
                  <TextField
                    fullWidth
                    id="recipe"
                    select
                    name="recipe"
                    label="Select Recipe"
                    value={formikMeals.values.recipe}
                    onChange={formikMeals.handleChange}
                  >
                    <MenuItem value="Grilled Veggie Salad">
                      Grilled Veggie Salad
                    </MenuItem>
                    <MenuItem value="Avocado Chicken Salad">
                      Avocado Chicken Salad
                    </MenuItem>
                    {/* Add more options as needed */}
                  </TextField>
                </div>
                <div className="flex items-center mt-5 space-x-5">
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleSelectMealImage}
                      style={{ display: "none" }}
                      id="image-input"
                    />
                    <label htmlFor="image-input">
                      <IconButton color="primary" component="span">
                        <LunchDiningIcon />
                      </IconButton>
                    </label>
                    <span>Image</span>
                  </div>
                </div>
                {selectedImage && (
                  <div className="flex items-center mt-5">
                    <img className="h-[10rem]" src={selectedImage} alt="" />
                  </div>
                )}

                <div className="flex justify-end w-full mt-8">
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ borderRadius: "1.5rem" }}
                  >
                    Meals Post
                  </Button>
                </div>
              </div>
            </form>
          ) : value === "status" ? (
            <form
              onSubmit={formikStatus.handleSubmit}
              className="space-y-4 w-[100%] my-4"
            >
              <div>
                <textarea
                  className="outline-none w-full mt-5 p-2 
              bg-transparent border border-[#3b4054] rounded-sm"
                  placeholder="Write Status Post Description..."
                  name="caption"
                  id=""
                  onChange={formikStatus.handleChange}
                  value={formikStatus.values.caption}
                  rows="4"
                ></textarea>

                <div className="mt-2 space-y-2">
                  <TextField
                    fullWidth
                    id=""
                    type="number"
                    name="distanceRun"
                    label="Distance Ran (in miles)"
                    value={formikStatus.values.distanceRun}
                    onChange={formikStatus.handleChange}
                  />
                  <TextField
                    fullWidth
                    id=""
                    type="number"
                    name="pushupsCompleted"
                    label="Number of Pushups Completed"
                    value={formikStatus.values.pushupsCompleted}
                    onChange={formikStatus.handleChange}
                  />
                  <TextField
                    fullWidth
                    id=""
                    type="number"
                    name="weightLifted"
                    label="Weight Lifted"
                    value={formikStatus.values.weightLifted}
                    onChange={formikStatus.handleChange}
                  />
                </div>

                <div className="flex justify-end w-full mt-8">
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ borderRadius: "1.5rem" }}
                  >
                    Status Post
                  </Button>
                </div>
              </div>
            </form>
          ) : value === "goal" ? (
            <form
              onSubmit={formikGoals.handleSubmit}
              className="space-y-4 w-[100%] my-4"
            >
              <div>
                <div className="mt-2 space-y-2">
                  <TextField
                    fullWidth
                    id="route"
                    select
                    name="route"
                    label="Select Routine"
                    value={formikGoals.values.route}
                    onChange={formikGoals.handleChange}
                  >
                    <MenuItem value="General Warm-up">
                      General Warm-up
                    </MenuItem>
                    <MenuItem value="Barbell Squats">
                      Barbell Squats
                    </MenuItem>
                    <MenuItem value="Walking Lunges">
                      Walking Lunges
                    </MenuItem>
                    <MenuItem value="Leg Press">
                      Leg Press
                    </MenuItem>
                    <MenuItem value="Step-ups">
                      Step-ups
                    </MenuItem>
                    <MenuItem value="Calf Raises">
                      Calf Raises
                    </MenuItem>
                    <MenuItem value="Post-workout Stretching">
                      Post-workout Stretching
                    </MenuItem>
                    <MenuItem value="Inclined Walking">
                      Inclined Walking
                    </MenuItem>
                  </TextField>
                  <TextField
                    fullWidth
                    id="setCount"
                    select
                    name="setCount"
                    label="Set Goal Count"
                    value={formikGoals.values.setCount}
                    onChange={formikGoals.handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </TextField>
                  <TextField
                    fullWidth
                    id="repsType"
                    type="text"
                    name="repsType"
                    label="Reps"
                    value={formikGoals.values.repsType}
                    onChange={formikGoals.handleChange}
                  />
                </div>

                <div className="flex justify-end w-full mt-8">
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ borderRadius: "1.5rem" }}
                  >
                    Goal Post
                  </Button>
                </div>
              </div>
            </form>
          ) : (
            ""
          )}
        </div>

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

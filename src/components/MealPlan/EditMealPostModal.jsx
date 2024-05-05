import React from "react";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { updatePostAction } from "../../Redux/Post/post.action";
import { updateMealPostAction } from "../../Redux/MealPlan/mealPlan.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  outline: "none",
  overFlow: "scroll-y",
  borderRadious: 3,
};

const EditMealPostModal = ({ open, handleClose, post }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      caption: post.caption || "",
      recipe: post.recipe || "",
      dietaryPreferences: post.dietaryPreferences || "",
    },
    onSubmit: (values) => {
      dispatch(updateMealPostAction(post.id, values));
      handleClose();
    },
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
                <p>Edit Post</p>
                <Button type="submit">Save</Button>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <TextField
                fullWidth
                id="caption"
                name="caption"
                label="Write your description..."
                multiline
                rows={4}
                value={formik.values.caption}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                id="dietaryPreferences"
                select
                name="dietaryPreferences"
                label="Select your Dietary Preferences "
                value={formik.values.dietaryPreferences}
                onChange={formik.handleChange}
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
                value={formik.values.recipe}
                onChange={formik.handleChange}
              >
                <MenuItem value="Grilled Veggie Salad">
                  Grilled Veggie Salad
                </MenuItem>
                <MenuItem value="Avocado Chicken Salad">
                  Avocado Chicken Salad
                </MenuItem>
              </TextField>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditMealPostModal;

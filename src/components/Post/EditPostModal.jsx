import React from "react";
import { Box, Button, IconButton, Modal, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { updatePostAction } from "../../Redux/Post/post.action";

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

const EditPostModal = ({ open, handleClose, post }) => {
  // Receive post object as props
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      caption: post.caption || "", // Populate form field with existing post content
    },
    onSubmit: (values) => {
      dispatch(updatePostAction(post.id, values)); // Dispatch action to update post
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
            <div className="space-y-3 mt-4">
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
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditPostModal;

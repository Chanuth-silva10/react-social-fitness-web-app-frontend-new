import {
  Avatar,
  Card,
  IconButton,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import BookmarkBorderIcon from "@mui/icons-material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { isLikedByReqUser } from "../../utils/isLikedByReqUser";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  createGoalCommentAction,
  deleteGoalPostAction,
  likeGoalPostAction,
} from "../../Redux/Goal/goal.action";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const GoalPostCard = ({ item }) => {
  const [showComments, setShowComments] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { post, auth } = useSelector((store) => store);

  const loggedInUserId = auth.user.id;
  const checkPostDeletionPermission = item.user.id === loggedInUserId;

  const handleShowComment = () => setShowComments(!showComments);

  const handleCreateComment = (content) => {
    const reqData = {
      postId: item.id,
      data: {
        content: content,
      },
    };
    dispatch(createGoalCommentAction(reqData));
  };

  const handleLikePost = () => {
    dispatch(likeGoalPostAction(item.id));
  };

  const handleDeleteGoalPost = () => {
    dispatch(deleteGoalPostAction(item.id));
    setAnchorEl(null);
  };

  const handleUpdatePost = () => {};

  return (
    <Card className="">
      <CardHeader
        avatar={
          item.user?.proImage === "" ? (
            <Avatar
              sx={{
                height: "3rem",
                width: "3rem",
                fontSize: "1rem",
                bgcolor: red[500],
              }}
            >
              {item.user.firstName[0]}
            </Avatar>
          ) : (
            <Avatar
              sx={{ width: "3rem", height: "3rem" }}
              src={item.user?.proImage}
            ></Avatar>
          )
        }
        action={
          checkPostDeletionPermission && (
            <div>
              <IconButton
                aria-label="settings"
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={handleDeleteGoalPost}>Delete Post</MenuItem>
                <MenuItem onClick={handleUpdatePost}>Edit Post</MenuItem>
              </Menu>
            </div>
          )
        }
        title={item.user.firstName + " " + item.user.lastName}
        subheader={
          "@" +
          item.user.firstName.toLowerCase() +
          "_" +
          item.user.lastName.toLowerCase()
        }
      />

      {item.image !== null ? (
        <img
          className="w-full max-h-[30rem] object-cover object-top"
          src={item.image}
          alt=""
        />
      ) : (
        <video
          controls
          className="w-full h-full"
          src="https://videos.pexels.com/video-files/855828/855828-sd_640_360_30fps.mp4"
        ></video>
      )}
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <Card sx={{ backgroundColor: "rgb(183, 42, 42)" }}>
            <CardContent>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variant="body3"
                color="text.secondary"
                className="flex items-center font-bold"
              >
                {item.route}
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variant="body3"
                color="text.secondary"
                className="font-bold"
              >
                Routing Type
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ backgroundColor: "rgb(183, 42, 42)" }}>
            <CardContent>
              
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variant="body3"
                color="text.secondary"
                className="flex items-center font-bold"
              >
                Target Set Count
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variant="body3"
                color="text.secondary"
                className="flex items-center font-bold"
              >
                {item.setCount}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ backgroundColor: "rgb(183, 42, 42)" }}>
            <CardContent>
             
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variant="body3"
                color="text.secondary"
                className="font-bold"
              >
                Reps
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variant="body3"
                color="text.secondary"
                className="font-bold"
              >
                {item.repsType}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </CardContent>

      <CardActions className="flex justify-between" disableSpacing>
        <div>
          <IconButton onClick={handleLikePost}>
            {isLikedByReqUser(auth.user.id, item) ? (
              <ThumbUpAltIcon style={{ color: "#20cbc8" }} />
            ) : (
              <ThumbUpOffAltIcon />
            )}
          </IconButton>
          <IconButton>{<ShareIcon />}</IconButton>
          <IconButton onClick={handleShowComment}>
            {<ChatBubbleIcon />}
          </IconButton>
        </div>
        <div>
          <IconButton>
            {true ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </div>
      </CardActions>
      {showComments && (
        <section>
          <div className="flex items-center mx-3 my-5 space-x-5">
            <Avatar sx={{}} />

            <input
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleCreateComment(e.target.value);
                }
              }}
              className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2"
              type="text"
              placeholder="Write your comment here"
            />
          </div>
          <Divider />

          <div className="mx-3 my-5 space-y-2 text-xs">
            {item.comments?.map((comment, index) => (
              <Card sx={{ backgroundColor: "#222534" }} key={index}>
                <CardContent>
                  <div className="flex items-center space-x-5">
                    {comment.user?.proImage === "" ? (
                      <Avatar
                        sx={{
                          height: "3rem",
                          width: "3rem",
                          fontSize: ".7rem",
                        }}
                      >
                        {comment.user.firstName[0]}
                      </Avatar>
                    ) : (
                      <Avatar
                        sx={{ width: "3rem", height: "3rem" }}
                        src={comment.user?.proImage}
                      ></Avatar>
                    )}
                    <Typography>{comment.content}</Typography>
                  </div>
                </CardContent>
                <CardActions className="flex justify-between" disableSpacing>
                  <div>
                    <IconButton>
                      <ThumbUpOffAltIcon
                        sx={{ width: "1rem", height: "1rem" }}
                      />
                    </IconButton>
                    <IconButton>
                      {
                        <ChatBubbleIcon
                          sx={{ width: "1rem", height: "1rem" }}
                        />
                      }
                    </IconButton>
                  </div>
                  <div>
                    <IconButton>
                      {true ? (
                        <DeleteIcon sx={{ width: "1rem", height: "1rem" }} />
                      ) : (
                        <DeleteIcon sx={{ width: "1rem", height: "1rem" }} />
                      )}
                    </IconButton>
                  </div>
                </CardActions>
              </Card>
            ))}
          </div>
        </section>
      )}
    </Card>
  );
};

export default GoalPostCard;

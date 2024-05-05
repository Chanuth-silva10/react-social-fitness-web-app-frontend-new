import { Avatar } from '@mui/material'
import React from 'react'
import AddIcon from "@mui/icons-material/Add";

const StoryCircle = ({user}) => {
  console.log(user.firstName);
  return (
    <div>
      <div className="flex flex-col items-center p-5 py-5 rounded-b-md">
        <Avatar
          sx={{ width: "4rem", height: "4rem" }}
          src={user.proImage
          }
        >
         
        </Avatar>
        <p>{user.firstName}</p>
        </div>
    </div>
  )
}

export default StoryCircle

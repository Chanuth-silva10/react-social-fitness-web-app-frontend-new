import { Avatar } from '@mui/material'
import React from 'react'
import AddIcon from "@mui/icons-material/Add";

const StoryCircle = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-5 py-5 rounded-b-md">
        <Avatar
          sx={{ width: "5rem", height: "5rem" }}
          src="https://res.cloudinary.com/djnpm1f5w/image/upload/v1697203895/avatars/ryj7yha08kguhj3rmujg.png"
        >
         
        </Avatar>
        <p>Maduka ...</p>
        </div>
    </div>
  )
}

export default StoryCircle

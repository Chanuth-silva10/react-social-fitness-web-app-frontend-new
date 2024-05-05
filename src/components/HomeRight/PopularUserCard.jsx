import { Avatar, Button, CardHeader, IconButton } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const PopularUserCard = ({user}) => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar
              sx={{ width: "3rem", height: "3rem" }}
              src={user?.proImage}
            ></Avatar>
        }
        action={
          <Button size='small'>
            Follow
          </Button>
        }
        title={user?.firstName}
        subheader={`@${user?.firstName}`}
      />
    </div>
  )
}

export default PopularUserCard

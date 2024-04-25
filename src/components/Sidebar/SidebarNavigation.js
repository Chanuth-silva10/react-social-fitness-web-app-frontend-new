import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Home';
import ControlePointIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListAltIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Home';


export const navigationMenu=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/"
    },
    {
        title:"Reels",
        icon:<ExploreIcon/>,
        path:"/reels"
    },
    {
        title:"Create Reels",
        icon:<ControlePointIcon/>,
        path:"/create-reels"
    },
    {
        title:"Notification",
        icon:<NotificationsIcon/>,
        path:"/"
    },
    {
        title:"Message",
        icon:<MessageIcon/>,
        path:"/"
    },
    {
        title:"Lists",
        icon:<ListAltIcon/>,
        path:"/"
    },
    {
        title:"Communities",
        icon:<GroupIcon/>,
        path:"/"
    },
    {
        title:"Profile",
        icon:<AccountBoxIcon/>,
        path:"/profile"
    },
]
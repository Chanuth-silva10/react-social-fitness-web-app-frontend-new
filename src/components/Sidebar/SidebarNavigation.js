import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Home';
import ControlePointIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListAltIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Home';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import LogoutIcon from '@mui/icons-material/Logout';

export const navigationMenu=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/"
    },
    {
        title:"Meal Plans",
        icon:<LunchDiningIcon/>,
        path:"/meal-plans"
    },
    {
        title:"WorkOut Goals",
        icon:<FlagCircleIcon/>,
        path:"/workout-goals"
    },
    {
        title:"WorkOut Status",
        icon:<ModelTrainingIcon/>,
        path:"/workout-status"
    },
    {
        title:"Notification",
        icon:<NotificationsIcon/>,
        path:"/notification"
    },
    {
        title:"Profile",
        icon:<AccountBoxIcon/>,
        path:"/profile"
    },
    {
        title:"Log out",
        icon:<LogoutIcon/>,
        path:"/logOut"
    },
]
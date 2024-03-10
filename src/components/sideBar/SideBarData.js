import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const SideBarData = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: 'Submit Query',
        icon: <PostAddIcon />,
        link: "/query"   
    },
    {
        title: 'Calendar',
        icon: <CalendarMonthIcon />,
        link: "/calendar"
    }
]
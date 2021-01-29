import React from 'react'//因为重定向用了jsx 所以要导入react
import LJDiscover from '@/pages/discover'
import LJRecommend from '../pages/discover/c-pages/recommend'
import LJRanking from "../pages/discover/c-pages/ranking";
import LJSongs from "../pages/discover/c-pages/songs";
import LJRadio from "../pages/discover/c-pages/djradio";
import LJArtist from "../pages/discover/c-pages/artist";
import LJAlbum from "../pages/discover/c-pages/album";
import HYPlayer from '../pages/player'

import LJFriend from '@/pages/friend'
import LJMine from '@/pages/mine'
import {Redirect} from 'react-router-dom'
const routes =[
    {path:'/',
    exact:true,
    render:()=>(
        <Redirect to="/discover" />
    )
},
    {
        path:"/discover",
        component:LJDiscover,
        routes:[
            {path:'/discover',
            exact:true,
            render:()=>(
                <Redirect to="/discover/recommend"/>
            )
            },
            {
                path:"/discover/recommend",
                component:LJRecommend 
            },
            {
                path:"/discover/ranking",
                component:LJRanking
            },
            {
                path:"/discover/songs",
                component:LJSongs
            },
            {
                path:"/discover/djradio",
                component:LJRadio
            },
            {
                path:"/discover/artist",
                component:LJArtist
            },
            {
                path:"/discover/album",
                component:LJAlbum
            },
            {
                path:"/discover/player",
                component:HYPlayer
            },
        ]
    },
    {
        path:"/mine",
        exact:true,
        component:LJMine
    },
    {
        path:"/friend",
        exact:true,
        component:LJFriend
    }
   

]
export default routes
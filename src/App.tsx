import React, { FC, useState, useEffect } from 'react'
import { Box } from '@material-ui/core'
import { createStyles, Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles';
import Scene from './Components.tsx/Scene';
import InfoDrawer from './Components.tsx/InfoDrawer';
import { TRoom, TScene } from './Model/Image360/@types';
import VR360Images from './Screens/VR360Images';
import AFRAME from './AframeWorker'
AFRAME();
//import { MyComponent } from 'react-aframe'

export interface AppProps { }
const App: FC<AppProps> = (props) => {
  const classes = useStyles();
  return (
    <VR360Images />
    // <Box width='800px' margin='0 auto' display='flex'>
    //   <InfoDrawer handleNewClick={handleNewClick} rooms={rooms} />
    //   <Box flex={1}> <Scene currentRoomId={currentRoom} rooms={rooms} /></Box>
    // </Box>
  )
}

const useStyles = makeStyles<Theme>((theme) => {
  return (createStyles({

  }))
})

export default App

import { createStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import AFRAME from './AframeWorker';
import VR360Images from './Screens/VR360Images';
AFRAME();
//import { MyComponent } from 'react-aframe'

export interface AppProps { }
const App: FC<AppProps> = (props) => {

  return (
    <VR360Images />

  )
}
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  interface Window {
    AFRAME: any;
  }
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      [k: string]: any;
    }
  }
}


export default App

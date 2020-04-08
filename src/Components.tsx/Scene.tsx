import React, { FC, useState, useEffect } from 'react'
import { Box, Fab } from '@material-ui/core'
import { createStyles, Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles';
import Room from './Room';
import { TRoom } from '../Model/Image360/@types';
import SkyComponent from './Sky';
import Camera from './Camera';
import Marker from './Marker';


export interface SceneProps {
    currentRoom: Partial<TRoom>
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



const Scene = React.forwardRef<any, SceneProps>((props, ref) => {
    const classes = useStyles();
    const { currentRoom = {} as TRoom } = props

    return (
        <>
            {currentRoom.id ? <a-scene>
                <SkyComponent
                    sky={currentRoom.sky}
                />
                <Camera
                    ref={ref}
                    camera={currentRoom.camera}
                />
                {/* <a-entity>

                </a-entity> */}
                {
                    (currentRoom.markers || []).map((i, index) => {
                        return <Marker marker={i} key={index} />
                    })
                }
            </a-scene> : null
            }
        </>
    )
})

const useStyles = makeStyles<Theme>((theme) => {
    return (createStyles({

    }))
})

export default Scene
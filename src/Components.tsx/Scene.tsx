import { createStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { TRoom } from '../Model/Image360/@types';
import Camera from './Camera';
import Marker from './Marker';
import SkyComponent from './Sky';


export interface SceneProps {
    currentRoom: Partial<TRoom>
    currentMarkerId: string
    refs: {
        cam: React.MutableRefObject<any> | null
        cur: React.MutableRefObject<any> | null
        plane: React.MutableRefObject<any> | null
    }
}




const Scene = React.forwardRef<any, SceneProps>((props, ref) => {
    const classes = useStyles();
    const { currentRoom = {} as TRoom, refs, currentMarkerId } = props
    return (
        <>
            {currentRoom.id ? <a-scene>
                <SkyComponent
                    sky={currentRoom.sky}
                />
                <Camera
                    refs={refs}
                    camera={currentRoom.camera}
                />
                {
                    (currentRoom.markers || []).map((i, index) => {

                        return (i.id === currentMarkerId) && <Marker marker={i} key={index} />
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
import React, { FC } from 'react'
import { Box } from '@material-ui/core'
import { createStyles, Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles';
import { TCamera } from '../Model/Image360/@types';

export interface CameraProps {
    camera?: TCamera
}

const Camera = React.forwardRef<any, CameraProps>((props, ref) => {
    const classes = useStyles();
    const { camera = {} as TCamera } = props;

    return (
        <a-entity
            rotation={`${camera?.rotation?.x || 0} ${camera?.rotation?.y || 0} ${camera?.rotation?.x || 0} `}

        >
            <a-camera
                position={`${camera?.position?.x || 0} ${camera?.position?.y || 1.6} ${camera?.position?.x || 0} `}
                cursor="rayOrigin: mouse"
                ref={ref}
            >
                <a-cursor
                    cursor_log
                    id='alpha'
                >
                </a-cursor>
            </a-camera>
        </a-entity>
    )
})

const useStyles = makeStyles<Theme>((theme) => {
    return (createStyles({

    }))
})

export default Camera
import { createStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { TCamera } from '../Model/Image360/@types';

export interface CameraProps {
    camera?: TCamera
    refs: {
        cam: React.MutableRefObject<any> | null
        cur: React.MutableRefObject<any> | null
        plane: React.MutableRefObject<HTMLElement> | null

    }
}

const Camera = React.forwardRef<any, CameraProps>((props, ref) => {
    const classes = useStyles();
    const { camera = {} as TCamera, refs } = props;

    return (
        <a-entity
            rotation={`${camera?.rotation?.x || 0} ${camera?.rotation?.y || 0} ${camera?.rotation?.z || 0} `}

        >
            <a-camera
                position={`${camera?.position?.x || 0} ${camera?.position?.y || 1.6} ${camera?.position?.z || 0} `}
                cursor="rayOrigin: mouse"
                ref={refs.cam}
                id='aCam'
            >
                <a-cursor
                    ref={refs.cur}
                    cursor_log
                >
                </a-cursor>
                <a-plane ref={refs.plane} cursor-listener id="plane" class="collidable" width="100" height="100" position="0 0 -5" material="visible: false;"></a-plane>

            </a-camera>
        </a-entity>
    )
})

const useStyles = makeStyles<Theme>((theme) => {
    return (createStyles({

    }))
})

export default Camera
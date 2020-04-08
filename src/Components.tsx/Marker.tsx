import React, { FC, useEffect } from 'react'
import { Box } from '@material-ui/core'
import { createStyles, Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles';
import { TMarkers } from '../Model/Image360/@types';

export interface MarkerProps {
    marker: TMarkers
}

const Marker: FC<MarkerProps> = (props) => {
    const classes = useStyles();
    const { marker } = props;
    useEffect(() => {
        console.log(marker)
    }, [marker])
    return (
        <a-image
            src={marker.src}
            position={`${marker?.position?.x || 0} ${marker.position.y || 0} ${marker.position.z || 0} `}
        />
    )
}

const useStyles = makeStyles<Theme>((theme) => {
    return (createStyles({

    }))
})

export default Marker
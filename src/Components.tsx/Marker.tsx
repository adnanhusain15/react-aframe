import { createStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React, { FC, useEffect } from 'react';
import { TMarkers } from '../Model/Image360/@types';


export interface MarkerProps {
    marker: TMarkers
}

const Marker: FC<MarkerProps> = (props) => {
    const classes = useStyles();
    const { marker } = props;
    return (
        <a-image
            // ref={(e: any) => test(e,marker.id)}
            look-at="#aCam"
            src={marker.src}
            position={`${marker?.position?.x || 0} ${marker?.position.y || 0} ${marker?.position.z || 0} `}
        />
    )
}

const useStyles = makeStyles<Theme>((theme) => {
    return (createStyles({

    }))
})

export default Marker
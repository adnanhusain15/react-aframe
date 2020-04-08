import React, { FC } from 'react'
import { Box, Button, Typography, List } from '@material-ui/core'
import { createStyles, Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles';
import { TMarkers } from '../Model/Image360/@types';

export interface MarkerListProps {
    markers: TMarkers[]
    onMarkerAdd: () => void
    onClose: () => void
}

const MarkerList: FC<MarkerListProps> = (props) => {
    const classes = useStyles();
    const { markers = [], onMarkerAdd, onClose } = props;
    return (
        <Box className={classes.root}>
            <Box>
                <Button variant='text' color='primary' onClick={onClose}> Back to all scenes </Button>
            </Box>
            <Box>
                <Typography variant='body2' >My Scene</Typography>
                {
                    markers.map((_i, index) => {
                        return <Button variant='text' color='primary'>{`Marker ${index + 1}`}</Button>
                    })
                }
            </Box>

            <Box>
                <Button variant='text' color='primary' onClick={onMarkerAdd}> Add New Marker </Button>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles<Theme>((theme) => {
    return (createStyles({
        root: {
            zIndex: 1,
            top: 140,
            left: 0,
            position: 'absolute',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 1px 3px #00000029',
            borderRadius: '0px 12px 12px 0px',
            width: 150,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '200px',
            padding: 20,
            boxSizing: "border-box"
        }
    }))
})

export default MarkerList
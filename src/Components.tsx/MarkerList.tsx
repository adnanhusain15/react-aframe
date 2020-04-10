import React, { FC } from 'react'
import { Box, Button, Typography, List, Fab } from '@material-ui/core'
import { createStyles, Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles';
import { TMarkers } from '../Model/Image360/@types';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
export interface MarkerListProps {
    markers: TMarkers[]
    currentMarkerId: string
    onMarkerAdd: () => void
    onClose: () => void
    onMarkerClick: (id: string) => void
}

const MarkerList: FC<MarkerListProps> = (props) => {
    const classes = useStyles();
    const { markers = [], onMarkerAdd, onClose, onMarkerClick, currentMarkerId } = props;
    return (
        <Box className={classes.root}>
            <Box>
                <Button variant='text' color='primary' onClick={onClose}> Back to all scenes </Button>
            </Box>
            <Box>
                <Typography variant='body2' >My Scene</Typography>
                {
                    markers.map((_i, index) => {
                        return (
                            <Box key={index} display='flex' alignItems='center'>
                                <Button variant='text' color={_i.id === currentMarkerId ? 'primary' : 'default'} onClick={() => onMarkerClick(_i.id)}>{`Marker ${index + 1}`}</Button>
                                <Fab size={'small'} className={classes.iconButtons} >
                                    <EditIcon fontSize={'small'} />
                                </Fab>
                                <Fab size={'small'} className={classes.iconButtons} >
                                    <ClearIcon fontSize={'small'} />
                                </Fab>
                            </Box>)
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
            width: 250,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '200px',
            padding: 20,
            boxSizing: "border-box"
        },
        iconButtons: {
            minHeight: 21,
            height: 21,
            width: 21,
            marginLeft: 8,
            boxShadow: 'none',
            '& svg': {
                fontSize: 13
            },
            color: '#fff',
            backgroundColor: '#4D4D4D',
            '&:hover': {
                backgroundColor: '#8525E5',

                opacity: '100%'
            }
        },
    }))
})

export default MarkerList
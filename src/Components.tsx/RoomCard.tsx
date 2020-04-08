import React, { FC } from 'react'
import { Box, Paper, Avatar } from '@material-ui/core'
import { createStyles, Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles';
import { TRoom } from '../Model/Image360/@types';

export interface RoomCardProps {
    room: TRoom
}

const RoomCard: FC<RoomCardProps> = (props) => {
    const classes = useStyles();
    const { room } = props;
    return (
        <Box width='500px' height='200px'>
            <Paper className={classes.paper}>
                <Avatar
                    src={room.sky.src}
                    className={classes.avatar}
                />
            </Paper>
        </Box>
    )
}

const useStyles = makeStyles<Theme>((theme) => {
    return (createStyles({
        paper: {
            width: '100%',
            height: '100%',
            borderRadius: 12,
        },
        avatar: {
            borderRadius: 0,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            width: '100%',
            height: '100%'
        }

    }))
})

export default RoomCard
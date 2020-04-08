import React, { FC } from 'react'
import { Box, Drawer, Paper, Typography, Button, List, ListItem, ListItemText } from '@material-ui/core'
import { createStyles, Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles';
import { TRoom } from '../Model/Image360/@types';

export interface InfoDrawerProps {
    handleNewClick: () => void
    rooms?: TRoom[]
}

const InfoDrawer: FC<InfoDrawerProps> = (props) => {
    const classes = useStyles();
    const { rooms = [], handleNewClick } = props
    return (
        <Box width='300px' position='absolute' left={0} height='100%' zIndex={1}>
            <Paper className={classes.paper}>
                <Button variant='contained' color='primary' onClick={handleNewClick}> Add new room</Button>
                <List>
                    {
                        rooms.map((data, index) => {
                            return <ListItem key={index}>
                                <ListItemText>
                                    {`Room ${Number(data.id) + 1}`}
                                </ListItemText>
                            </ListItem>
                        })
                    }
                </List>
            </Paper>
        </Box>
    )
}

const useStyles = makeStyles<Theme>((theme) => {
    return (createStyles({
        paper: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: 30,
            boxSizing: "border-box"
        }
    }))
})

export default InfoDrawer
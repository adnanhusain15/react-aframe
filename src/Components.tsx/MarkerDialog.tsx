import React, { FC } from 'react'
import { Box, Dialog, DialogTitle, Paper } from '@material-ui/core'
import { createStyles, Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles';
import { TMarkers } from '../Model/Image360/@types';

export interface MarkerDialogProps {
    open: boolean
    marker: TMarkers
    onSave: (marker: TMarkers) => any
    onClose: () => void
}

const MarkerDialog: FC<MarkerDialogProps> = (props) => {
    const classes = useStyles();
    const { open = false, onSave, onClose } = props;
    const onSubmit = () => {
\\}
return (
    <Dialog
        open={open}
        onClose
    >
        <Paper className={classes.paper}>

        </Paper>
    </Dialog>
)
}

const useStyles = makeStyles<Theme>((theme) => {
    return (createStyles({
        paper: {
            width: 300,
            minHeight: 350,
            padding: '30px 25px',
            display: 'flex',
            margin: 'auto',
            flexDirection: 'column',
            alignItems: 'flex-start',
            postion: 'relative'
        }
    }))
})

export default MarkerDialog
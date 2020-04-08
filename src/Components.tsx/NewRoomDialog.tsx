import React, { FC, useState } from 'react'
import { Box, Dialog, Paper, TextField, Button, DialogContent } from '@material-ui/core'
import { createStyles, Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles';
import { TRoom, TSky } from '../Model/Image360/@types';

export interface NewRoomDialogProps {
    open: boolean
    onSubmit: (data: { name: string, sky: TSky }) => void
    onClose: () => void
}

const NewRoomDialog: FC<NewRoomDialogProps> = (props) => {
    const classes = useStyles();
    const [formData, setFormData] = useState<{ name: string, sky: { src: string } }>({ name: '', sky: { src: '' } })
    const { open = false, onClose } = props;
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        if (e.target.name === 'name')
            setFormData({ ...formData, name: e.target.value })
        else
            setFormData({ ...formData, sky: { src: e.target.value } })
    }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onSubmit(formData);
        onClose();
    }
    return (
        <Dialog

            open={open}
            onClose={onClose}
        >

            <form onSubmit={onSubmit}>
                <Paper className={classes.paper}>
                    <TextField
                        fullWidth
                        value={formData.name}
                        onChange={onChange}
                        name='name'
                        required
                        label='name'
                    />
                    <TextField
                        fullWidth
                        value={formData.sky.src}
                        onChange={onChange}
                        name='sky'
                        required
                        label='Sky url'
                    />
                    <Button fullWidth variant='contained' color='primary' type='submit'>
                        Save
                </Button>
                </Paper>
            </form>
        </Dialog>
    )
}

const useStyles = makeStyles<Theme>((theme) => {
    return (createStyles({
        paper: {
            width: '400px',
            minHeight: '300px',
            margin: 'auto',
            height: 'auto',
            padding: 25,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }
    }))
})

export default NewRoomDialog
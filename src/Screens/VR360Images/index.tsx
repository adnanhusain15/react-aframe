import { Box, Button } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React, { FC, useState } from 'react';
import NewRoomDialog from '../../Components.tsx/NewRoomDialog';
import RoomCard from '../../Components.tsx/RoomCard';
import { TRoom, TSky } from '../../Model/Image360/@types';
import RoomView from './RoomView';
import { uniqueId } from 'lodash'
export interface indexProps { }

const VR360Images: FC<indexProps> = (props) => {
    const classes = useStyles();
    const [rooms, setRooms] = useState<TRoom[]>([]);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const toggleDialog = () => { setShowDialog(!showDialog) }
    const [roomId, setRoomId] = useState('');
    const onSubmit = (data: { name: string, sky: TSky }) => {
        let list = [...rooms];
        let length = list.length;
        list.push({ name: data.name, id: uniqueId('Room_'), markers: [], sky: data.sky, camera: {} })
        setRooms([...list])
    }
    const onClose = () => {
        setRoomId('');
    }

    const updateRooms = (newRoom: Partial<TRoom>) => {
        let list = [...rooms];
        let index = list.findIndex(i => i.id === newRoom.id);
        list.splice(index, 1, { ...list[index], ...newRoom });
        setRooms([...list])
    }
    return (
        <>
            {roomId ?

                <RoomView rooms={rooms} roomId={roomId} onClose={onClose} updateRooms={updateRooms} />
                :
                <Box overflow='scroll' width='500px' margin='30px auto' display='flex' alignItems='center' flexDirection='column'>
                    <Button variant='contained' color='primary' onClick={toggleDialog}> Add Room </Button>

                    {
                        rooms.map((r, index) => {
                            return (
                                <Box mt='20px' key={index} onClick={() => setRoomId(r.id)} style={{ cursor: 'pointer' }}>
                                    <RoomCard room={r} />
                                </Box>)
                        })
                    }

                    {showDialog && <NewRoomDialog
                        open={showDialog}
                        onClose={toggleDialog}
                        onSubmit={onSubmit}
                    />}
                </Box>

            }

        </>
    )
}

const useStyles = makeStyles<Theme>((theme) => {
    return (createStyles({

    }))
})

export default VR360Images
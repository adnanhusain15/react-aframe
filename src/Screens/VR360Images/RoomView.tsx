import React, { FC, useState, useEffect, useRef, createRef } from 'react'
import { Box, Fab, Button } from '@material-ui/core'
import { createStyles, Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles';
import { TRoom, TPosition } from '../../Model/Image360/@types';
import Scene from '../../Components.tsx/Scene';
import CloseIcon from '@material-ui/icons/Close';
import { get } from 'lodash'
import MarkerList from '../../Components.tsx/MarkerList';
export interface RoomViewProps {
    rooms: TRoom[]
    roomId: string
    onClose: () => void
    updateRooms: (room: Partial<TRoom>) => void
}

const RoomView: FC<RoomViewProps> = (props) => {
    const classes = useStyles();
    const { roomId, onClose, rooms, updateRooms } = props;
    const [currentRoom, setCurrentRoom] = useState<Partial<TRoom>>({});
    const cameraRef = React.useRef<HTMLElement>();

    useEffect(() => {
        let room = rooms.find(i => i.id === roomId);
        setCurrentRoom({ ...room })
    }, [roomId])

    const setEntryPosition = () => {
        const node = cameraRef.current;
        if (node) {
            let rotation = node.getAttribute('rotation')
            let room: Partial<TRoom> = {
                ...currentRoom, camera: {
                    rotation: {
                        x: get(rotation, 'x') || 0,
                        y: get(rotation, 'y') || 0,
                        z: get(rotation, 'z') || 0
                    }
                },
            };
            updateRooms(room);
            setCurrentRoom({ ...room })
        }
    }
    const onMarkerAdd = () => {
        let list = currentRoom?.markers || [];
        const node = cameraRef.current;
        if (node) {
            let rotation = node.getAttribute('rotation');
            const posEl: HTMLElement | null = document.getElementById('alpha')
            console.log(posEl)

            const cursorPos = get(posEl, 'object3D').getWorldPosition()
            list.push({
                src: 'https://img.icons8.com/doodle/96/000000/up-direction-arrow.png',
                position: {
                    x: get(cursorPos, 'x') || 0,
                    y: get(cursorPos, 'y') || 0,
                    z: -4
                }
            })
            let room: Partial<TRoom> = {
                ...currentRoom, markers: [...list]
            };
            updateRooms(room);
            setCurrentRoom({ ...room })
        }

    }
    return (
        <>
            <MarkerList markers={currentRoom?.markers || []} onMarkerAdd={onMarkerAdd} onClose={onClose} />
            <Button variant='contained' color='primary' className={classes.entryButton} onClick={setEntryPosition}>Save Entry position</Button>
            <Scene ref={cameraRef} currentRoom={currentRoom} />
        </>
    )
}

const useStyles = makeStyles<Theme>((theme) => {
    return (createStyles({
        entryButton: {
            position: 'absolute',
            bottom: 10,
            right: 10,
            zIndex: 1
        },
        close: {
            position: 'absolute',
            top: 10,
            left: 10,
            zIndex: 1
        }
    }))
})

export default RoomView
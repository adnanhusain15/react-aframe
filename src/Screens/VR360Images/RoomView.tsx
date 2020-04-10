import React, { FC, useState, useEffect, useRef, createRef, useMemo, useCallback } from 'react'
import { Box, Fab, Button } from '@material-ui/core'
import { createStyles, Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles';
import { TRoom, TPosition } from '../../Model/Image360/@types';
import Scene from '../../Components.tsx/Scene';
import CloseIcon from '@material-ui/icons/Close';
import { get, uniqueId } from 'lodash'
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
    const [markerId, setMarkerId] = useState<string>('');
    const [position, setPosition] = useState<TPosition>();
    const [currentRoom, setCurrentRoom] = useState<Partial<TRoom>>({});
    const cameraRef = React.useRef<HTMLElement>();
    const cursorRef = React.useRef<HTMLElement>();
    const planeRef = React.useRef<HTMLElement>();
    useEffect(() => {
        let room = rooms.find(i => i.id === roomId);
        setCurrentRoom({ ...room })
    }, [roomId])

    const handleClick = (e: MouseEvent) => {
        let rotation: TPosition = get(e, 'detail.intersection.point');
        setPosition(rotation);

    }
    const updateMarkerPosition = () => {
        if (!position || !markerId)
            return
        let index = (currentRoom.markers || []).findIndex(i => i.id === markerId);
        let list = [...(currentRoom.markers || [])]
        console.log('Current Point ', position)
        if (index > -1) {
            let tMarker = list[index];
            tMarker['position'] = { ...position }
            list.splice(index, 1, tMarker);
            updateRooms({ ...currentRoom, markers: list });
            setCurrentRoom({ ...currentRoom, markers: list });
        }
    }

    useEffect(() => {
        updateMarkerPosition();
    }, [position])

    useEffect(() => {
        const node = planeRef.current
        if (node && (currentRoom.markers?.length === 1 || markerId === '')) {
            console.log('here')
            node.addEventListener('click', (e) => handleClick(e))
        }
    }, [currentRoom.markers?.length])


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
            //setCurrentRoom({ ...room })
        }
    }

    const onMarkerAdd = () => {
        let list = currentRoom?.markers || [];
        const node = cursorRef.current;
        if (node) {
            const cursorPos = get(node, 'object3D').getWorldPosition()
            let newId = uniqueId('Marker_')
            list.push({
                id: newId,
                src: 'https://img.icons8.com/doodle/96/000000/up-direction-arrow.png',
                position: {
                    x: get(cursorPos, 'x') || 0,
                    y: get(cursorPos, 'y') || 0,
                    z: -4,
                }
            })
            let room: Partial<TRoom> = {
                ...currentRoom, markers: [...list]
            };
            updateRooms(room);
            setMarkerId(newId)
            setCurrentRoom({ ...room })
        }
    }



    const onMarkerClick = (id: string) => {
        setMarkerId(id)
        // const index = (currentRoom.markers || []).find(i => i.id === id);
        // if (index)
        //     setCurrentRoom({
        //         ...currentRoom,
        //         camera: {
        //             position: {
        //                 ...index.position,
        //             }
        //         }
        //     })
    }
    return (
        <>
            <MarkerList
                markers={currentRoom?.markers || []}
                onMarkerAdd={onMarkerAdd}
                onClose={onClose}
                onMarkerClick={onMarkerClick}
                currentMarkerId={markerId}
            />
            <Button variant='contained' color='primary' className={classes.entryButton} onClick={setEntryPosition}>Save Entry position</Button>
            <Scene
                refs={{ cam: cameraRef, cur: cursorRef, plane: planeRef }}
                currentRoom={currentRoom}
                currentMarkerId={markerId}
            />
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
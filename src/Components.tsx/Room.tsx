import React, { FC } from 'react';
import SkyComponent from './Sky';
import { TRoom } from '../Model/Image360/@types';
import CameraComponent from './Camera'


export interface RoomProps {
    room?: TRoom
    cameraRef?: any
}

const Room: FC<RoomProps> = (props) => {
    const { room = {} as TRoom, cameraRef } = props;

    return (
        <>
            {room.id &&
                <>
                    <SkyComponent
                        sky={room.sky}
                    />
                    <CameraComponent

                    />
                </>
            }
        </>
    )
}


export default Room
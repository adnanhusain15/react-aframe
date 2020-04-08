import React, { FC } from 'react';
import { TSky } from '../Model/Image360/@types';


export interface SkyProps {
    sky?: TSky
}

const SkyComponent: FC<SkyProps> = (props) => {
    const { sky = {} as TSky } = props;
    console.log('sky ', sky.src)
    return (
        <a-sky {...sky}></a-sky>

    )
}

export default SkyComponent

export interface TSky {
    src: string
}

export interface TPosition {
    x: number;
    y: number;
    z: number;
}

export interface TMarkers {
    id: string
    src: string
    name?: string
    position: TPosition
    description?: string
}

export interface TCamera {
    position?: TPosition
    rotation?: TPosition
    cursor?: string
}
export interface TRoom {
    sky: TSky
    id: string
    name?: string
    description?: string
    markers: TMarkers[]
    camera?: TCamera
}

export interface TScene {
    startRoomId: string;
    rooms: TRoom[];
    id: string
}
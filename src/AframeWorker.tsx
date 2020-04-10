
import { get } from 'lodash'
const AFRAME = window.AFRAME
export default function () {


    //AFRAME.registerComponent('cursor-listener', {
    //     init: function () {
    //         this.el.addEventListener('click', (evt) => {
    //             console.log(evt)
    //             const type = evt.detail.type
    //             const cursorPos = evt.detail.intersection && evt.detail.intersection.point
    //             // console.log(cursorPos)

    //             if (type === 'setMarkerInfo') {
    //                 currentEntityId = evt.detail.entityId
    //                 setMarkerXYZ = evt.detail.setMarkerXYZ
    //             }

    //             cursorPos && setMarkerXYZ && setMarkerXYZ({ ...cursorPos })

    //             const [infoMa] = document.querySelectorAll(`[id^="${currentEntityId}"]`)
    //             console.log(infoMa, cursorPos, `[id^="${currentEntityId}"]`)
    //             cursorPos && infoMa && infoMa.setAttribute('position', `${cursorPos.x} ${cursorPos.y} ${cursorPos.z}`)

    //         });
    //     }
    // }),
    return (
        AFRAME.registerComponent('cursor_log', {
            init: function () {
                console.log('asdasd')
                this.el.addEventListener('click', function () {
                    // const posEl: HTMLElement | null = document.getElementById('alpha')
                    // console.log(posEl)

                    // const cursorPos = get(posEl, 'object3D').getWorldPosition()
                    // console.log(cursorPos)
                    // const infoMa = document.getElementById('infoMarker1')
                    // cursorPos.z = -10
                    // console.log(infoMa, cursorPos)
                    // infoMa?.setAttribute('position', `${cursorPos.x} ${cursorPos.y} ${cursorPos.z}`)
                })
            }
        })
    )
}
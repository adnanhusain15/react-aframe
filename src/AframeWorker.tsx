
import { get } from 'lodash'
const AFRAME = window.AFRAME
export default function () {
    return (
        AFRAME.registerComponent('cursor_log', {
            init: function () {
                console.log('asdasd')
                this.el.addEventListener('click', function () {
                    const posEl: HTMLElement | null = document.getElementById('alpha')
                    console.log(posEl)

                    const cursorPos = get(posEl, 'object3D').getWorldPosition()
                    console.log(cursorPos)
                    // const infoMa = document.getElementById('infoMarker1')
                    // cursorPos.z = -10
                    // console.log(infoMa, cursorPos)
                    // infoMa?.setAttribute('position', `${cursorPos.x} ${cursorPos.y} ${cursorPos.z}`)
                })
            }
        })
    )
}
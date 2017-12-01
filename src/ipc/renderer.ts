import * as Canvas from 'canvas'
import * as ipc from 'node-ipc'
import { Socket } from 'net'
console.log(Canvas)

ipc.config.rawBuffer = true
ipc.config.encoding = 'hex'

export default (ipcNamespace: string) => {
    const canvas = new Canvas(1920, 1080)
    const ctx = canvas.getContext('2d')

    ipc.connectTo(ipcNamespace, (...args) => {
        console.log(args)
        const sock: Socket = ipc.of[ipcNamespace]

        sock.on('connect', () => {
            console.log('Client connection successful')
        })

        sock.on('data', (buffer: Buffer) => {
            console.log('Receive data from host', buffer.byteLength)
            sock.emit(canvas.toBuffer('raw'))
        })
    })
}




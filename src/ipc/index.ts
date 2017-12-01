import * as ipc from 'node-ipc'
import { Socket } from 'net'
import renderer from './renderer'

const IPC_NAMESPACE = 'FrameTransfer'

ipc.config.id = IPC_NAMESPACE
ipc.config.rawBuffer = true
ipc.config.encoding = 'hex'

ipc.serve(() => {
    ipc.server.on('connect', (sock: Socket) => {
        console.log('Client socket connected')
        ipc.server.emit(sock, [0x01])
    })

    ipc.server.on('data', (buffer) => {
        console.log('Data received', buffer.byteLength)
    })

    ipc.server.on('end', (buffer) => {
        console.log('End')
    })

})

ipc.server.start()
renderer(IPC_NAMESPACE)

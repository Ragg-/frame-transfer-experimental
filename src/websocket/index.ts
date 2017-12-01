import { Server } from 'uws'
import * as MsgPack from 'msgpack-lite'

const wss = new Server({ port: 3000 })
wss.on('connection', sock => {
    sock.on('message', (data, flags) => {
        const message = MsgPack.decode(data)
        console.log(message)
    })
})

MsgPack.encode({})

declare module 'canvas' {
    class Canvas {
        constructor(width: number, height: number);

        getContext(type: '2d', options?: Partial<{
            pixelFormat: 'A8'|'A1'
        }>);

        toBuffer(type?: 'raw')
    }

    export = Canvas
}

/// <reference types='node' />

declare module 'rtmpdump' {
    import {Readable} from "stream";
    import split = require('split')

    function parseInfo(chunk: string): object;

    export function createStream(options: StreamOptions): Readable;

    type StreamOptions = {
        rtmp: string,
        playpath?: string,
        pageUrl?: string,
        swfVfy?: string,
        v?: null
    };
}
import os from 'os'


export function getUser(){

    return os.platform()

}

export function getFreeSystemMemory(){

    return os.freemem()

}
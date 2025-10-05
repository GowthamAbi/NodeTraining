import os from 'os'
import { getFreeSystemMemory, getUser } from './osUtils.mjs'

console.log("Os platfrom:"+getUser())
console.log("Free memory: "+getFreeSystemMemory())



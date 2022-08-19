import { HeAssembly } from './heassembly'
import fs from 'fs'
const code = fs.readFileSync(process.argv[2], 'utf8').split('\n')
new HeAssembly().exec(code)

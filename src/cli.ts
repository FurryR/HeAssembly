import { HeLang2 } from './helang'
import fs from 'fs'
const code = fs.readFileSync(process.argv[2], 'utf8').split('\n')
new HeLang2().exec(code)

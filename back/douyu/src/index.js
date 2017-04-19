import {getAsync} from '../utils/client'
import {roomUrl, chuan} from '../utils/_data'

getAsync(roomUrl+chuan).then(ret=>{
  console.log(ret)
})





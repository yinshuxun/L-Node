const type_api = 'http://api.douyutv.com/api/v1/live/lol'
const room_api = 'http://open.douyucdn.cn/api/RoomApi/room/'

const req = require("then-request")

module.exports = function (roomId) {
  return req('get', room_api + roomId)
}


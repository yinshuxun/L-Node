var type_api = 'http://api.douyutv.com/api/v1/live/';
var room_api = 'http://open.douyucdn.cn/api/RoomApi/room/';

export const roomUrl = roomId => {
  return `${room_api}${roomId}`
};

export const typeUrl = type => {
  return `${type_api}${type}`
}

export const CHUAN = '85829'

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (roomId) {
    return req('get', room_api + roomId);
};

var type_api = 'http://api.douyutv.com/api/v1/live/lol';
var room_api = 'http://open.douyucdn.cn/api/RoomApi/room/';

var req = require("then-request");
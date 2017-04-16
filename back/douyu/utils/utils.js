module.exports = function decode(s){
  return unescape(s.replace(/\\(u[0-9a-fA-F]{4})/gm, '%$1'));
}
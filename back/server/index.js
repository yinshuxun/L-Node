const req = require('then-request')
const cheerio = require("cheerio")

const url = "https://www.douyu.com/85829"
let html = ""
req('get', url).done((res) => {
  html = res.getBody('utf-8')
  let $ = cheerio.load(html)
  console.log($(".num-v[data-anchor-info='ol-num']").text())

})
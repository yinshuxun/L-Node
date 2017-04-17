import http from 'http'
import util from 'util'
import queryString from 'querystring'

export const createRequest = async(host, port, path, method, headers, encoding = 'utf-8') => {
  const options = {
    host, port, path, method, headers
  }
  let body = ''

  let req = await http.request(options, res => {
    // console.log(`STATUS:${res.statusCode}`);
    // console.log(`HEADERS:${JSON.stringify(res.headers)} `);
    res.setEncoding(encoding)
    res.on('data', chunk => {
      body += chunk
    });
  }).on('error', (e) => {
    util.log(`problem with request ${e.message}`)
  })

  req.end()

  return body.then(e=>{console.log(e)})
}

export const get = url => {
  return createRequest(url, '', '', 'get')
}
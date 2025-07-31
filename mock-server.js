const http = require("http")

const server = http.createServer((req, res) => {
  let body = []
  req.on("data", (chunk) => body.push(chunk))
  req.on("end", () => {
    body = Buffer.concat(body).toString()

    console.log("--- New Request ---")
    console.log(new Date().toISOString())
    console.log("IP:", req.socket.remoteAddress)
    console.log("Method:", req.method)
    console.log("URL:", req.url)
    console.log("Headers:", req.headers)
    console.log("Body:", body)
    console.log("-------------------")

    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("OK\n")
  })
})

server.listen(3000, () => {
  console.log("Mock server listening on http://localhost:3000")
})

import fs from "fs"
// fs = require('fs')

fs.writeFileSync("chunks/resultado.mp3", Buffer.concat([fs.readFileSync("chunks/1695290068.891-120.007.mp3"), fs.readFileSync("chunks/1695290188.898-119.980.mp3")]))
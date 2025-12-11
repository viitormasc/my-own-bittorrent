'use strict'
import * as torrentParser from './torrent-parser.js'
import * as tracker from './tracker.js'

const torrent = torrentParser.open('puppy.torrent')
console.log('torrent', torrent);

tracker.getPeers(torrent,peers => {
  console.log('list of peers: ', peers)
}) 

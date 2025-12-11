'use strict'
import fs from 'fs'
import bencode from 'bencode'
import * as torrentParser from './torrent-parser'
import * as tracker from './tracker'

const torrent = torrentParser.open('puppy.torrent')

tracker.getPeers(torrent,peers => {
  console.log('list of peers: ', peers)
}) 

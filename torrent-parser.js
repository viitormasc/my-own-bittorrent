'use strict'

import fs from 'fs'
import bencode from 'bencode'

export const open = (filepath) =>  {
  return bencode.decode(fs.readdirSync(filepath))
}


export const size = (torrent) =>  {
}

export const infoHash = (torrent) =>  {
}

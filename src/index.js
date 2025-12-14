"use strict";
import * as torrentParser from "./torrent-parser.js";
import * as tracker from "./tracker.js";

const torrent = torrentParser.open("2050952.torrent");

tracker.getPeers(torrent, (peers) => {
  console.log("list of peers: ", peers);
});

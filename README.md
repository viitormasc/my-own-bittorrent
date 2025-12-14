# BitTorrent CLI Clone

A lightweight BitTorrent client you can run entirely from the command line.  
It supports downloading torrent files, connecting to peers, and managing piece
downloads directly from your terminal — no GUI required.

Link to project: https://github.com/your-username/bittorrent-cli-clone

---

## How It's Made:

**Tech used:**  Node.js with Javascript, TCP/UDP, websocket, BitTorrent Protocol, CLI tooling

This project was built as a deep dive into how BitTorrent works under the hood.
I started by implementing a basic CLI interface that accepts a `.torrent` file
and parses its metadata (info hash, piece length, file structure).

From there, I implemented the BitTorrent wire protocol: performing handshakes
with peers, exchanging bitfields, requesting pieces, and validating downloaded
data using SHA-1 hashes. The client manages multiple peer connections
concurrently and writes pieces to disk as they are verified.

The focus was on correctness, readability, and learning the protocol rather than
building a full-featured production client. Everything runs in the terminal,
making it easy to test, debug, and understand each step of the download process.

---

## Optimizations

- Implemented concurrent piece downloading from multiple peers to maximize
  throughput.
- Added piece verification and retry logic to avoid corrupt downloads.
- Refactor the peer connection loop to reduce blocking I/O and improve overall
  download speed.
- Reused TCP connections and buffered disk writes to minimize overhead.

These improvements will significantly increase download stability and performance,
especially on torrents with many peers.

---

## Lessons Learned:

Building a BitTorrent client from scratch gave me a much deeper understanding of
networking, binary protocols, and concurrency. I learned how distributed systems
coordinate without a central server and how small protocol details can have a
huge impact on performance and reliability.

One of the biggest takeaways was learning to debug low-level networking issues
and gaining confidence working closer to the system level than typical
high-level application code.

---




Stream = require('node-rtsp-stream')
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://192.168.1.20:554/user=admin_password=tlJwpbo6_channel=1_stream=0.sdp?real_stream',
  wsPort: 554,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})
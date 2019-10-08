import React from 'react';
import { socket, configuration } from '../../../actions/webRtc';
import ComeInRoom from './comeInRoom';

class debate extends React.Component {
  static async getInitialProps({}) {}

  state = {
    sendToggle: true,
    peer: '',
    offer: '',
    remoteCandidates: [],
    peerReady: false,
    talkingToggle: false,
    userId: ''
  };

  componentDidMount() {
    this.setState({
      peer: new RTCPeerConnection(configuration)
    });

    // 상대 peer 가 연결되기 전에 iceCandidate 를 보낸다면 에러가 생길 수 있음
    // 그러므로 배열에 담아두었다가 보낸다
    socket.on('icecandidate', iceCandidate => {
      const { peerReady, remoteCandidates, peer } = this.state;
      if (iceCandidate) {
        if (peerReady) {
          peer.addIceCandidate(iceCandidate);
          while (remoteCandidates.length > 0) {
            peer.addIceCandidate(remoteCandidates.pop());
          }
        } else {
          if (peerReady) {
            peer.addIceCandidate(iceCandidate);
          } else {
            remoteCandidates.push(iceCandidate);
          }
        }
      }
    });

    socket.on('offer', offer => {
      this.setState(
        {
          sendToggle: false,
          offer
        },
        () => {
          this.reciveCall();
        }
      );
    });

    socket.on('answer', answer => {
      try {
        const { peer, remoteCandidates } = this.state;
        peer.setRemoteDescription(new RTCSessionDescription(answer));
        while (remoteCandidates.length > 0) {
          peer.addIceCandidate(remoteCandidates.pop());
        }
        this.setState({
          peerReady: true
        });
      } catch (err) {
        console.log('on answer socket err');
      }
    });
  }

  comeInUser = e => {
    this.setState({
      userId: e.target.previousSibling.value
    });
  };

  sendCall = async () => {
    try {
      const { peer } = this.state;
      this.onCallReady();

      const localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });

      peer.addStream(localStream);
      this.localVideo.srcObject = localStream;

      let offer = peer.createOffer(offer).then(res => {
        socket.emit('call', res);
        peer.setLocalDescription(res);

        this.setState({
          sendToggle: false,
          talkingToggle: true
        });
      });
    } catch (err) {}
  };

  reciveCall = async () => {
    const { peer, offer, remoteCandidates } = this.state;
    try {
      this.onCallReady();

      const localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });

      peer.addStream(localStream);
      this.localVideo.srcObject = localStream;
      console.log('why~!!!!', localStream);
      socket.emit('debateStream', localStream);

      peer.setRemoteDescription(new RTCSessionDescription(offer));
      let answer = peer.createAnswer(answer).then(res => {
        peer.setLocalDescription(res);
        while (remoteCandidates.length > 0) {
          peer.addIceCandidate(remoteCandidates.pop());
        }
        this.setState({
          peerReady: true
        });
        socket.emit('answer', res);
      });
    } catch (err) {
      console.log('reciveCall error');
    }
  };

  onCallReady = () => {
    const { peer } = this.state;
    peer.onaddstream = e => {
      console.log('?', e);
      this.remoteVideo.srcObject = e.stream;
    };
    peer.onicecandidate = e => {
      socket.emit('icecandidate', e.candidate);
    };
  };

  render() {
    const { sendToggle, talkingToggle, userId } = this.state;
    return (
      <>
        {!userId ? (
          <ComeInRoom comeInUser={this.comeInUser} />
        ) : (
          <div>
            <h2>debate Page</h2>
            <h4>hello {userId}</h4>
            <button
              onClick={this.sendCall}
              disabled={sendToggle ? '' : 'disabled'}
            >
              토론시작
            </button>
            <button disabled={talkingToggle ? '' : 'disabled'}>사용자1</button>
            <button disabled={talkingToggle ? '' : 'disabled'}>사용자2</button>
            <hr />
            화면
            <video
              ref={ref => {
                this.localVideo = ref;
              }}
              className="local_video"
              autoPlay
            />
            화면2
            <video
              ref={ref => {
                this.remoteVideo = ref;
              }}
              className="remote_video"
              autoPlay
            />
          </div>
        )}
      </>
    );
  }
}

export default debate;

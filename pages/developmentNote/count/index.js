import React from 'react';

class Count extends React.Component {
  state = {};

  users = ['Kevin', 'Alax', 'Brod', 'Jong', 'Rkfl'];

  onStartTimer = e => {
    e.target.disabled = 'disabled';
    let id = e.target.name;

    this[e.target.name] = setInterval(() => {
      if (this.state[id]) {
        this.setState({
          [id]: ++this.state[id]
        });
      } else {
        let defaultTime = 0;
        this.setState({
          [id]: ++defaultTime
        });
      }
    }, 1000);
  };

  onEndTimter = e => {
    e.target.previousSibling.disabled = '';
    console.log('stop', e.target.name);
    clearInterval(this[e.target.name]);
  };

  changeTimer = time => {
    let getTime;
    if (time < 60) {
      return (getTime = `${time}초`);
    }

    if (time >= 60 && time < 3600) {
      let mm = parseInt(time / 60);
      let ss = time % 60;
      getTime = `${mm}분 ${ss}초`;
      return getTime;
    }

    if (time >= 3600) {
      let hh = parseInt(time / 3600);
      let mm = parseInt((time % 3600) / 60);
      let ss = time % 60;
      getTime = `${hh}시 ${mm}분 ${ss}초`;
      return getTime;
    }
  };

  render() {
    return (
      <>
        <div>
          {this.users.map(user => (
            <div>
              <h3>
                {user} :
                {this.state[user] ? this.changeTimer(this.state[user]) : '0초'}
              </h3>
              <div>
                <button name={user} onClick={this.onStartTimer}>
                  시작
                </button>
                <button name={user} onClick={this.onEndTimter}>
                  멈춤
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Count;

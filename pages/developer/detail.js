import React from 'react';

class Detail extends React.Component {
  render() {
    return (
      <>
        {/* <!-- Heading --> */}
        <div id="heading">
          <h1>Jong's Devaloper</h1>
        </div>

        {/* <!-- Main --> */}
        <section id="main" className="wrapper">
          <div className="inner">
            <div className="content" style={{ height: 1000 }}>
              <h3 className="devaloper-title">Jong's devaloper title</h3>
              <p>rkflrkfl</p>
              <iframe
                className="developer-iframe"
                src="/developmentNote"
              ></iframe>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Detail;

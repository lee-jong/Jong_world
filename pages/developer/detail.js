import React from 'react';
import { detailDeveloper, deleteDeveloper } from '../../actions/developer';
import Router from 'next/router';

class Detail extends React.Component {
  static async getInitialProps({ query }) {
    let res = {};
    try {
      res = await detailDeveloper(query.seq);
    } catch (err) {}

    return {
      res
    };
  }

  componentDidMount() {
    // 스크롤 상단으로 초기화
    scrollTo(0, 0);
  }

  deletedDeveloper = async (seq, img) => {
    try {
      let res = await deleteDeveloper(seq, img);
      if (res.status === 200) {
        let href = `/developer`;
        Router.push(href);
      } else {
        alert('삭제 실패');
      }
    } catch (err) {}
  };

  render() {
    const {
      seq,
      title,
      sub_title,
      content,
      sample,
      img
    } = this.props.res.result[0];
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
              <h3 className="devaloper-title">{title}</h3>
              <p>{sub_title}</p>
              <p>{content}</p>
              <iframe
                className="developer-iframe"
                src={`/developmentNote${sample ? '/' + sample : ''}`}
              ></iframe>

              <hr />
              <div className="devaloper-footer">
                <button
                  className="devaloper-button"
                  onClick={() => this.deletedDeveloper(seq, img)}
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Detail;

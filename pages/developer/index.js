import React from 'react';
import Router from 'next/router';
import DeveloperList from '../../components/listComponent/developerList';
import { getDeveloperList } from '../../actions/developer';
import { exception } from '../../helpers/utils';

class Developer extends React.Component {
  static async getInitialProps({ query }) {
    let developerList = {};
    try {
      let data = {
        active: 1
      };
      developerList = await getDeveloperList(data);
      if (exception(developerList)) {
        developerList = { result: [], total: 0 };
      }
    } catch (err) {
      developerList = { result: [], total: 0 };
    }

    return {
      developerList
    };
  }

  state = {
    itemList:
      this.props.developerList.total === 0
        ? []
        : this.props.developerList.result
  };

  goToDetailPage = seq => {
    let href = `/developer/detail?seq=${seq}`;
    Router.push(href);
  };

  goToCreatePage = () => {
    let href = '/developer/insert';
    Router.push(href);
  };

  render() {
    const { itemList } = this.state;
    return (
      <>
        {/* <!-- Heading --> */}
        <div id="heading">
          <h1>Jong's Devaloper</h1>
        </div>

        {/* <!-- Main --> */}
        <section id="main" className="wrapper">
          <DeveloperList
            itemList={itemList}
            goToDetailPage={this.goToDetailPage}
            goToCreatePage={this.goToCreatePage}
          />
        </section>
      </>
    );
  }
}

export default Developer;

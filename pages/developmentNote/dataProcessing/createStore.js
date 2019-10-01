import React from 'react';
import { insertBE } from '../../../actions/dataProcessing';
import Router from 'next/router';

class CreateStore extends React.Component {
  state = {
    name: '',
    boss: '',
    adress: '',
    be_number_one: '',
    be_number_two: '',
    be_number_three: '',
    phone_number_one: '',
    phone_number_two: '',
    phone_number_three: '',
    name_err: '',
    boss_err: '',
    adress_err: '',
    be_number_err: '',
    phone_number_err: ''
  };

  onChangeInput = e => {
    const {
      phone_number_one,
      phone_number_two,
      phone_number_three,
      be_number_one,
      be_number_two,
      be_number_three
    } = this.state;

    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name + '_err']: ''
    });

    if (
      e.target.name == 'phone_number_one' ||
      e.target.name == 'phone_number_two' ||
      e.target.name == 'phone_number_three'
    ) {
      if (phone_number_one && phone_number_two && phone_number_three)
        return this.setState({
          phone_number_err: ''
        });
    }

    if (
      e.target.name == 'be_number_one' ||
      e.target.name == 'be_number_two' ||
      e.target.name == 'be_number_three'
    ) {
      if (be_number_one && be_number_two && be_number_three)
        return this.setState({
          be_number_err: ''
        });
    }
  };

  createStoreFrom = async e => {
    const {
      name,
      boss,
      adress,
      be_number_one,
      be_number_two,
      be_number_three,
      phone_number_one,
      phone_number_two,
      phone_number_three
    } = this.state;

    if (!name) {
      this.setState({
        name_err: '업장명을 입력하세요.'
      });
    }

    if (!boss) {
      this.setState({
        boss_err: '사업자 성함을 입력하세요.'
      });
    }

    if (!adress) {
      this.setState({
        adress_err: ' 주소를 입력하세요.'
      });
    }

    if (!phone_number_one || !phone_number_two || !phone_number_three) {
      this.setState({
        phone_number_err: '휴대폰 번호를 입력하세요.'
      });
    }

    if (
      phone_number_one.length !== 3 ||
      phone_number_two.length !== 4 ||
      phone_number_three.length !== 4
    ) {
      this.setState({
        phone_number_err: '휴대폰 번호를 정확히 입력하세요.'
      });
    }

    if (!be_number_one || !be_number_two || !be_number_three) {
      this.setState({
        be_number_err: '사업자 번호를 입력하세요.'
      });
    }

    if (
      be_number_one.length !== 3 ||
      be_number_two.length !== 2 ||
      be_number_three.length !== 5
    ) {
      this.setState({
        be_number_err: '사업자 번호를 입력하세요.'
      });
    }

    if (
      !name ||
      !boss ||
      !adress ||
      !phone_number_one ||
      !phone_number_two ||
      !phone_number_three ||
      !be_number_one ||
      !be_number_two ||
      !be_number_three
    )
      return;

    try {
      let data = {
        name,
        boss,
        adress,
        be_number: be_number_one + be_number_two + be_number_three,
        phone_number: phone_number_one + phone_number_two + phone_number_three
      };

      let res = await insertBE(data);
      if (res.status === 200) {
        alert('등록을 완료하였습니다.');
        Router.push('/developmentNote/dataProcessing/storeManagement');
      } else {
        alert('등록을 완료하지 못 했습니다.');
      }
    } catch (err) {}
  };

  gotoListPage = () => {
    Router.push('/developmentNote/dataProcessing/storeManagement');
  };

  render() {
    const {
      name_err,
      boss_err,
      adress_err,
      be_number_err,
      phone_number_err
    } = this.state;

    return (
      <>
        <div className="creatrStore">
          <h2>매장 등록</h2>

          <table className="createStore-table">
            <colgroup>
              <col width="10%" />
              <col width="auto" />
            </colgroup>
            <tbody>
              <tr>
                <th>업장명 : </th>
                <th>
                  <td>
                    <input
                      name="name"
                      onChange={this.onChangeInput}
                      type="text"
                      autoComplete="off"
                    />
                  </td>
                  {name_err ? (
                    <td>
                      <p>{name_err}</p>
                    </td>
                  ) : (
                    ''
                  )}
                </th>
              </tr>
              <tr>
                <th>사업자명 :</th>
                <th>
                  <td>
                    <input
                      name="boss"
                      onChange={this.onChangeInput}
                      type="text"
                      autoComplete="off"
                    />
                  </td>
                  {boss_err ? (
                    <td>
                      <p>{boss_err}</p>
                    </td>
                  ) : (
                    ''
                  )}
                </th>
              </tr>
              <tr>
                <th>업장 주소 :</th>
                <th>
                  <td>
                    <input
                      name="adress"
                      onChange={this.onChangeInput}
                      type="text"
                      autoComplete="off"
                    />
                  </td>
                  {adress_err ? (
                    <td>
                      <p>{adress_err}</p>
                    </td>
                  ) : (
                    ''
                  )}
                </th>
              </tr>
              <tr>
                <th>사업자 번호 :</th>
                <th>
                  <td rowSpan="5">
                    <input
                      style={{ width: '40px' }}
                      maxLength="3"
                      name="be_number_one"
                      onChange={this.onChangeInput}
                      type="text"
                      autoComplete="off"
                    />
                  </td>
                  <td>-</td>
                  <td>
                    <input
                      style={{ width: '30px' }}
                      maxLength="2"
                      name="be_number_two"
                      onChange={this.onChangeInput}
                      type="text"
                      autoComplete="off"
                    />
                  </td>
                  <td>-</td>
                  <td>
                    <input
                      style={{ width: '60px' }}
                      maxLength="5"
                      name="be_number_three"
                      onChange={this.onChangeInput}
                      type="text"
                      autoComplete="off"
                    />
                  </td>
                  {be_number_err ? (
                    <td>
                      <p>{be_number_err}</p>
                    </td>
                  ) : (
                    ''
                  )}
                </th>
              </tr>
              <tr>
                <th>연락처 :</th>
                <th>
                  <td>
                    <input
                      style={{ width: '40px' }}
                      maxLength="3"
                      name="phone_number_one"
                      onChange={this.onChangeInput}
                      type="text"
                      autoComplete="off"
                    />
                  </td>
                  <td>-</td>
                  <td>
                    <input
                      style={{ width: '50px' }}
                      maxLength="4"
                      name="phone_number_two"
                      onChange={this.onChangeInput}
                      type="text"
                      autoComplete="off"
                    />
                  </td>
                  <td>-</td>
                  <td>
                    <input
                      style={{ width: '50px' }}
                      maxLength="4"
                      name="phone_number_three"
                      onChange={this.onChangeInput}
                      type="text"
                      autoComplete="off"
                    />
                  </td>
                  {phone_number_err ? (
                    <td>
                      <p>{phone_number_err}</p>
                    </td>
                  ) : (
                    ''
                  )}
                </th>
              </tr>
            </tbody>
          </table>
          <div className="createStore-footer">
            <button className="createStore-button" onClick={this.gotoListPage}>
              목록
            </button>
            <button
              className="createStore-button"
              onClick={this.createStoreFrom}
            >
              생성
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default CreateStore;

import { vaildToken } from '../actions/login';
import Router from 'next/router';

export const tokenVaildCheck = async token => {
  try {
    let res = await vaildToken(token);
    if (res.status === 200) {
    } else {
      Router.push('/login');
    }
  } catch (err) {
    Router.push('/login');
  }
};

// 두 패스워드가 동일한지
export const comparePasswordCheck = (pw1, pw2) => {
  if (pw1 !== pw2) return false;
  return true;
};

// 아아디 중복 체크
export const isUsableIdCheck = async id => {
  try {
    let res = await checkDuplicatedId(id);
    let resValue = res.code === 200 ? true : false;
    return resValue;
  } catch (err) {
    return false;
  }
};

// 아이디 validation 체크
export const isValidIdCheck = id => {
  let idReg = /^[a-zA-Z]{3}[_][a-zA-Z]{2}[0-9]{3}$/i;
  if (idReg.test(id)) return true;
  return false;
};

// export const isValidPasswordCheck = pw => {
//   let pwReg = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/; // 숫자, 영문, 특수문자 세가지 모두 이용
//   let pwReg2 = /^(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{10,16}$/; // 특수 문자, 숫자
//   let pwReg3 = /^(?=.*[a-zA-Z])(?=.*[0-9]).{10,16}$/; // 영문, 숫자
//   let pwReg4 = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{10,16}$/; // 특수 문자, 영문
//   if (pwReg.test(pw) || pwReg2.test(pw) || pwReg3.test(pw) || pwReg4.test(pw))
//     return true;
//   return false;
// };

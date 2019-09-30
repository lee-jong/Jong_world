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

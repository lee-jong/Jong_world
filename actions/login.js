import { axiosInstance, handleSuccess, handleError } from './actionCofing';

export const loginTest = async data => {
  return await axiosInstance
    .post('/getToken', data)
    .then(handleSuccess)
    .catch(handleError);
};

export const vaildToken = async token => {
  let data = {
    token
  };
  return await axiosInstance
    .post('/vaildToken', data)
    .then(handleSuccess)
    .catch(handleError);
};

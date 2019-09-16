import { axiosInstance, handleSuccess, handleError } from './actionCofing';
import { getLimit } from '../helpers/setting';
import { async } from 'q';

// limit, offset 추가 해야함
export const getImgList = async option => {
  let data = {
    limit: getLimit,
    offset: option.offset * getLimit
  };
  return await axiosInstance
    .post('/imgBoard', data)
    .then(handleSuccess)
    .catch(handleError);
};

export const insertImgItem = async formData => {
  return await axiosInstance
    .post('/imgInsert', formData)
    .then(handleSuccess)
    .catch(handleError);
};

export const deleteImgItem = async (seq, img) => {
  let data = {
    seq,
    img
  };
  return await axiosInstance
    .post('/deleteImg', data)
    .then(handleSuccess)
    .catch(handleError);
};

export const searchGetImgList = async option => {
  let data = {
    search: option.search,
    type: option.type
  };

  return await axiosInstance
    .post('/searchImgBoard', data)
    .then(handleSuccess)
    .catch(handleError);
};

import { axiosInstance, handleSuccess, handleError } from './actionCofing';

// limit, offset 추가 해야함
export const getImgList = async option => {
  let data = {
    limit: option.limit,
    offset: option.offset
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

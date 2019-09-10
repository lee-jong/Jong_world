import { axiosInstance, handleSuccess, handleError } from './actionCofing';

// limit, offset 추가 해야함
export const getImgList = async () => {
  return await axiosInstance
    .get('/imgBoard')
    .then(handleSuccess)
    .catch(handleError);
};

export const insertImgItem = async formData => {
  return await axiosInstance
    .post('/imgBoard', formData)
    .then(handleSuccess)
    .catch(handleError);
};

export const deleteImgItem = async seq => {
  let data = {
    seq
  };
  return await axiosInstance
    .post('/deleteImg', data)
    .then(handleSuccess)
    .catch(handleError);
};

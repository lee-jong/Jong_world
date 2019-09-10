import { axiosInstance, handleSuccess, handleError } from './actionCofing';

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

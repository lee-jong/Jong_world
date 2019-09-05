import { axiosInstance, handleSuccess, handleError } from './actionCofing';

export const getImgList = async () => {
  return await axiosInstance
    .get('/imgBoard')
    .then(handleSuccess)
    .catch(handleError);
};

export const insertImgItem = async req => {
  let data = {
    title: req.title,
    place: req.place,
    content: req.content,
    image: req.image
  };

  return await axiosInstance
    .post('/imgBoard', data)
    .then(handleSuccess)
    .catch(handleError);
};

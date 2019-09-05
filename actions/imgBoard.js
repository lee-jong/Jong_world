import { axiosInstance, handleSuccess, handleError } from './actionCofing';

export const getTest = async () => {
  let data = {
    message: 'hi'
  };

  return await axiosInstance
    .get('/', data)
    .then(handleSuccess)
    .catch(handleError);
};

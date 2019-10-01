import { axiosInstance, handleSuccess, handleError } from './actionCofing';

// limit, offset 추가 해야함
export const getBEList = async option => {
  let data = {
    search: option.search,
    offset: (option.active - 1) * getDeveloperLimit,
    limit: getDeveloperLimit
  };
  return await axiosInstance
    .post('/getBEList', data)
    .then(handleSuccess)
    .catch(handleError);
};

export const insertBE = async info => {
  let data = {
    BE_name: info.name,
    BE_BE_name: info.boss,
    BE_adress: info.adress,
    BE_BLN: info.be_number,
    BE_phone: info.phone_number
  };

  return await axiosInstance
    .post('/insertBE', data)
    .then(handleSuccess)
    .catch(handleError);
};

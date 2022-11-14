import moRequest from '@/service/index';
export const addCake = (cakeObj: any) =>
  moRequest.post('/classes/category', {
    data: cakeObj,
  });

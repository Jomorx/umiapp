import moRequest from '../service/index';

export const getStu = () =>
  moRequest.get('/classes/stu', {
    method: 'GET',
  });
export const deleteStu = (id: number) =>
  moRequest.delete(`/classes/stu?id=${id}`, {
    method: 'DELETE',
  });

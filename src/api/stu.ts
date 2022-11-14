import { request } from 'umi';
export const getStu = () =>
  request('/classes/stu', {
    method: 'GET',
  });
export const deleteStu = (id: number) =>
  request(`/classes/stu?id=${id}`, {
    method: 'DELETE',
  });

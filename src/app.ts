import { message } from 'antd';
const requestInterceptor = (url: string, options: any) => {
  return options;
};

const responseInterceptor = async (response: any, options: any) => {
  // console.log('相应', response, options);
  const res = await response.json();
  if (options.method.toLowerCase() === 'post' && res.objectId) {
    message.success('新增成功');
  }
  return { data: res.results };
};
export const request = {
  requestInterceptors: [requestInterceptor],
  responseInterceptors: [responseInterceptor],
};

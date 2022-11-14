const requestInterceptor = (url: string, options: any) => {
  // options.url = `https://gyh18ggr.lc-cn-n1-shared.com/1.1${url}`;
  // options.headers = {
  //   'X-LC-Id': 'GYh18GGR02guei6PEX5N0Pme-gzGzoHsz',
  //   'X-LC-Key': 'Y760GQQskThvYzqN3TAP99EM',
  //   'Content-Type': 'application/json',
  // };

  return options;
};

const responseInterceptor = async (response: any, options: any) => {
  // console.log('相应', response, options);
  const { results } = await response.json();
  return { data: results };
};
export const request = {
  requestInterceptors: [requestInterceptor],
  responseInterceptors: [responseInterceptor],
};

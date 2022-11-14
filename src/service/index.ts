import { baseUrl, baseHeaders } from './config';
import { request } from 'umi';
import { RequestOptionsInit } from 'umi-request';
class MoRequest {
  protected baseUrl;
  protected headers;
  constructor(baseUrl: string, headers: object) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  request<T>(
    url: string,
    options?: RequestOptionsInit & { skipErrorHandler?: boolean },
  ) {
    return request<T>(this.baseUrl + url, options);
  }
  get<T>(
    url: string,
    options?: RequestOptionsInit & { skipErrorHandler?: boolean },
  ) {
    return request<T>(this.baseUrl + url, {
      method: 'GET',
      headers: baseHeaders,
      ...options,
    });
  }
  post<T>(
    url: string,
    options?: RequestOptionsInit & { skipErrorHandler?: boolean },
  ) {
    return request<T>(this.baseUrl + url, {
      method: 'POST',
      headers: baseHeaders,
      ...options,
    });
  }
  delete<T>(
    url: string,
    options?: RequestOptionsInit & { skipErrorHandler?: boolean },
  ) {
    return request<T>(this.baseUrl + url, {
      method: 'DELETE',
      headers: baseHeaders,
      ...options,
    });
  }
  put<T>(
    url: string,
    options?: RequestOptionsInit & { skipErrorHandler?: boolean },
  ) {
    return request<T>(this.baseUrl + url, {
      method: 'PUT',
      headers: baseHeaders,
      ...options,
    });
  }
}
export default new MoRequest(baseUrl, baseHeaders);

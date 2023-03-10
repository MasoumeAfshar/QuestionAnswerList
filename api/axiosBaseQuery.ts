import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import axiosConfig from './axiosConfig';

const basePath = axiosConfig.baseURL;

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      axiosConfig?: AxiosRequestConfig;
      headers?: AxiosRequestHeaders;
      withHeaders?: boolean;
    },
    any
  > =>
  async (
    {
      url,
      method,
      data,
      params,
      headers = {},
      withHeaders = false,
      axiosConfig = {},
    },
  ) => {
    try {
      const result = await axios({
        url: basePath + baseUrl + url,
        method,
        data,
        params,
        headers,
        ...axiosConfig,
      });
      if (!withHeaders) return { data: result.data };
      else return { data: { result: result.data, headers: result.headers } };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

export default axiosBaseQuery;

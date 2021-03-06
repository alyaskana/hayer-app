import axios, { AxiosRequestConfig, AxiosError } from "axios";
import * as SecureStore from "expo-secure-store";

import { stringify } from "./utils/stringify";

const fetcher = axios.create({
  baseURL: "http://localhost:3001/api",
});

fetcher.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync("token");

  if (token) {
    return { ...config, headers: { ...config.headers, Authorization: token } };
  }
  return config;
});

// fetcher.interceptors.response.use(undefined, async (error: AxiosError) => {
//   if (error.response?.status == 401) {
//     window.location.href = "/auth/login";
//   }

//   return Promise.reject(error);
// });

type TGetParams = {
  path: string;
  params?: Record<string, string | number | undefined | boolean>;
  headers?: Record<string, string>;
};

type TPostParams = {
  path: string;
  params?: Record<string, string | number | unknown> | FormData;
  headers?: AxiosRequestConfig<any>;
};

export class API {
  fetcher = fetcher;

  get<R>({ path, params = {}, headers = {} }: TGetParams) {
    return this.fetcher.get<R>(`${path}?${stringify(params)}`, {
      headers: {
        ...headers,
      },
    });
  }

  post<R>({ path, params = {}, headers = {} }: TPostParams) {
    return this.fetcher.post<R>(path, params, {
      ...headers,
    });
  }

  patch<R>({ path, params = {}, headers = {} }: TPostParams) {
    return this.fetcher.patch<R>(path, params, {
      ...headers,
    });
  }

  put<R>({ path, params = {}, headers = {} }: TPostParams) {
    return this.fetcher.put<R>(path, params, {
      ...headers,
    });
  }

  delete<R>({ path, params = {} }: TPostParams) {
    return this.fetcher.delete<R>(path, { data: params });
  }
}

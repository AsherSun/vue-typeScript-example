declare namespace Ajax {
  export interface AxiosResponse {
    data: ResponseData
  }
  export interface ResponseData {
    code: number,
    data: any,
    message?: string
  }
}
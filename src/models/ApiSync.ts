import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

class ApiSync<T extends HasId> {
  constructor(public API_URL: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.API_URL}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (!id) {
      return axios.post(this.API_URL, data);
    } else {
      return axios.patch(`${this.API_URL}/${id}`, data);
    }
  }
}

export default ApiSync;

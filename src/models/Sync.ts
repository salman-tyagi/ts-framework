import axios, { AxiosPromise } from 'axios';

interface HasId {
  id: number;
}

class Sync<T extends HasId> {
  fetch(id: number): AxiosPromise {
    return axios.get(`http://localhost:3000/users/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (!id) {
      return axios.post('http://localhost:3000/users', data);
    } else {
      return axios.patch(`http://localhost:3000/users/${id}`, data);
    }
  }
}

export default Sync;

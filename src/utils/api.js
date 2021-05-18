export class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    
    getData() {
      return fetch(`${this._baseUrl}/courses`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error(`Ошибка: ${res.status}`));
        });
    }
};

  export const api = new Api({
    baseUrl: 'https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56',
  })
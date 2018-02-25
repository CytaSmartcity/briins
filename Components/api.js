// POST
const api = {
    postPayment() {
        let url = 'URL_ENDPOINT';
        // Place the URL
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
              },
             body: {"name" : "Kyriakos Michael"}
        })
        .then (res => res.json())
        .then((res) => {console.log(data)})
       .catch((error) => {console.error(error)})}};

export default api;

  // GET
const api = {
    getPayment() {
        let url = 'URL_ENDPOINT';
        // Place the URL
        return fetch(url, {
            method: 'GET'
        })
        .then (res => res.json())
        .then((res) => {console.log(data)})
       .catch((error) => {console.error(error)})}};


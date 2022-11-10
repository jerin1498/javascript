// api - applicaion programe interface
// REST-api - reprentational state transfer

// to create create - post
// to get data - get
// to update a data - patch
// totally update - put
// to delete data - delete

// restful api

// key things

// url (end point)
// method (get, post, put, patch , delete)

// fetch, XMLHttpRequest

// fetch("https://jsonplaceholder.typicode.com/todos/10")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// console.log(axios);

async function getData() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log(response.data);
}

getData();

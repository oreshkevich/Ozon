const getData = (str) => {
  // return fetch(`./db/db.json`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     return data;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  return fetch(
    `https://test3-ef4ef-default-rtdb.firebaseio.com/goods.json?${
      str ? `search = ${str}` : ""
    }`
  ).then((response) => {
    return response.json();
  });
};

export default getData;

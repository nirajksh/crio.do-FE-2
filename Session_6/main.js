const data = fetch("https://api.kanye.rest/")
  .then(function (res) {
    return res.json();
  })
  .catch(function (err) {
    throw new Error(err);
  });

data.then((res) => console.log(res));

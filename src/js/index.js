const func = async () => {
  await fetch("")
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson));
    });
    
};


func();

new App(document.querySelector('.app'))
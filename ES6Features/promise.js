let prom = new Promise((res, rej) => {
    console.log('synchronously executed');
    if (Math.random() > 0.5) {
      res('Success');
    } else {
      rej('Error');
    }
  })
  
  
  prom.then((val) => {
    console.log('asynchronously executed: ' + val);
  }).catch((err) => {
    console.log('asynchronously executed: ' + err);
  }).finally(() => {
    console.log('promise done executing');
  });
  
  
  console.log('last log');
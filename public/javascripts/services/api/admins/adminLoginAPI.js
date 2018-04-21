export default (loginData) => {
  return new Promise((resolve, reject) => {
    const path = "/api/admins/login";
    let request = new XMLHttpRequest();

    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject(request.responseText);
        }
      }
    }

    request.open('POST', path);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(loginData));
  });
}

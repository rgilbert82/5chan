export default (commentID) => {
  return new Promise((resolve, reject) => {
    const path = `/api/comments/${commentID}`;
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

    request.open('DELETE', path);
    request.setRequestHeader('Authorization', document.cookie || '');
    request.send();
  });
}

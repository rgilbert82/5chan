export default (postSlug) => {
  return new Promise((resolve, reject) => {
    const path  = `/api/posts/${postSlug}`;
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

    request.open('GET', path);
    request.send();
  });
}

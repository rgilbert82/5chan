export default () => {
  const expiredDate = new Date(1970, 1, 1).toUTCString();
  const cookieString = `token=; expires=${expiredDate}`;
  document.cookie = cookieString;
}

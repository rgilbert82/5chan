export default () => {
  const token = document.cookie.split('token=')[1];
  return token;
}

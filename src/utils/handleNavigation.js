import axios from 'axios';
const handleNavigation = (url, dataUrl, callback) => {
  window.history.pushState(null, null, url);

  axios({
    method: 'get',
    url: dataUrl
  }).then(({ data }) => {
    callback(data);
  });
}

export default handleNavigation;

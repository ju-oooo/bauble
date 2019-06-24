// import md5 from 'js-md5'

export function getType(param) {
  if (/^\d{10}$/.test(param)) {


    return 'username';
  } else if (/^1[34578]\d{9}$/.test(param)) {
    return 'phone';
  } else if (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(param)) {
    return 'card';
  } else if (/^(?:[a-zA-Z0-9]+[_\-\+\.]?)*[a-zA-Z0-9]+@(?:([a-zA-Z0-9]+[_\-]?)*[a-zA-Z0-9]+\.)+([a-zA-Z]{2,})+$/.test(param)) {
    return 'email';
  } else {
    return 'error';
  }
}

export function getPassword(param) {
  // return md5.hex(param)
  return param
}

export function getLocalStorage(param) {

  return localStorage.getItem(param);
}

export function putLocalStorage(param) {

  return localStorage.setItem(param[0], param[1]);
}

export function removeLocalStorage() {

  return localStorage.clear();
}

export function isLogin() {
  return localStorage.getItem('userToken') != null ? true : false;
}




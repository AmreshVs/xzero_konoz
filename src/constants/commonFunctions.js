

export const getUserData = () => {
  let userData = localStorage.getItem('xzero_user');
  return JSON.parse(userData);
}

export const getJWT = async () => {
  // let jwt = await AsyncStorage.getItem('@xzero_jwt');
  // return JSON.parse(jwt);
}

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export const dateDiffInDays = (a, b) => {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export const getFormatedDate = (date) => {
  return String(date.getDate()).padStart(2, '0') + "/" + String(date.getMonth() + 1).padStart(2, '0') + "/" + date.getFullYear();
}

export const getFormattedDateTime = (date) => {
  return String(date.getDate()).padStart(2, 0) + "-" + String(date.getMonth() + 1).padStart(2, 0) + "-" + date.getFullYear() + " " + String(date.getHours()).padStart(2, 0) + ":" + String(date.getMinutes()).padStart(2, 0) + ":" + String(date.getSeconds()).padStart(2, 0);
}

export const firstLetterUpper = (name) => {
  return name !== undefined ? name.charAt(0).toUpperCase() + name.slice(1) : '';
};

export const handleMobileNumber = (mobile_number) => {
  let mobile = String(mobile_number);
  mobile.replace('+', '');

  let extension_pattern = /971/g;
  if (!extension_pattern.test(mobile)) {
    return String('+971' + mobile);
  }

  return String('+' + mobile);
};

export const calculatePercentage = (y, x) => {
  let p = y / x;
  return Math.round(p * 100);
}

export const getAuthenticationHeader = (jwt) => {
  if (jwt !== '') {
    return {
      context: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
      },
    }
  }
  return {};
}

export const thumbnailUrl = (url) => {
  return url && url.replace('/uploads/', '/uploads/thumbnail_')
}

export const smallUrl = (url) => {
  return url && url.replace('/uploads/', '/uploads/small_')
}

function createURL(baseLink = '', params = {}) {
  let paramsArr = [];

  for (const [key, value] of Object.entries(params)) {
    paramsArr.push(`${key}=${value}`);
  }

  return `${baseLink}?${paramsArr.join('&')}`;
}

export default createURL;

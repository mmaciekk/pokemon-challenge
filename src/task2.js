const transformEmails = function transformEmails(string) {
  if (!string) {
    string = this;
  }
  const emailRegex = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
  const array = string.split(',');
  const arrayNoWhitespace = array.map(el => el.trim());
  const arrayWithValidEmails = [];
  arrayNoWhitespace.forEach((el) => {
    if (emailRegex.test(el)) {
      arrayWithValidEmails.push(el.toLowerCase());
    }
  });
  return arrayWithValidEmails;
};

// eslint-disable-next-line
String.prototype.transformEmails = transformEmails;

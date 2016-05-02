module.exports = {
  setUserName: function (userName) {
    userName = userName.split(' ').join('');
    userName = userName.replace(/[^a-zA-Z0-9]/g, '');
    return userName.toLowerCase();
  }
}

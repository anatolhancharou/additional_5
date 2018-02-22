module.exports = function check(str, bracketsConfig) {
  // your solution
  var result = str;
  var count = str.length;
  for (var i = 0; i < bracketsConfig.length; i++) {
    result = result.split(bracketsConfig[i][0] + bracketsConfig[i][1]).join('');
    if (result.length < count) {
      count = result.length;
      i = -1;
    }
  }
  return result.length === 0 ? true : false;
}

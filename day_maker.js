exports.now = function () {
  return new Date();
};

exports.get_prev = function (date) {
  return new Date(date.setDate(date.getDate() - 1));
};

exports.get_next = function (date) {
  return new Date(date.setDate(date.getDate() + 1));
};

exports.date_to_id = function (date) {
  return '' + date.getFullYear() + ('0' + (date.getMonth()+1)).slice(-2) + ('0' + date.getDate()).slice(-2);
};

exports.id_to_int = function (id) {
  return parseInt(id, 10);
};

exports.date_to_int = function (date) {
  return exports.id_to_int(
    exports.date_to_id(date)
  );
};

exports.id_to_date = function (id) {
  return new Date(
      id.slice(0, 4)
      + '-' +
      id.slice(4, 6)
      + '-' +
      id.slice(6, 8)
    );
};
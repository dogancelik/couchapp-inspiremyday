function (doc) {

var now = new Date();
var now_date = '' + now.getFullYear() + ('0' + (now.getMonth()+1)).slice(-2) + ('0' + now.getDate()).slice(-2);

if (doc._id == now_date)
  emit(doc._id, doc);

}
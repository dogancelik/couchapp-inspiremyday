function (doc, req) {

var page_maker = require('page_maker'),
    day_maker = require('day_maker');

provides("html", function() {
  var row = getRow();
  var that_date = day_maker.id_to_date(row.value._id),
      prev_date = day_maker.get_prev(that_date),
      prev_id = day_maker.date_to_id(prev_date);
  return page_maker.make(
    row.value.quote,
    row.value.style ? row.value.style : '',
    prev_id
  );
});

} 
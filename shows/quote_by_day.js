function (doc, req) {

var page_maker = require('page_maker'),
    day_maker = require('day_maker');

var now_date = day_maker.now(),
    that_date = day_maker.id_to_date(doc._id);

var now_id = day_maker.date_to_id(now_date),
    prev_id = day_maker.date_to_id(day_maker.get_prev(that_date));

// I had to do get_next twice to get next day (fix me maybe?)
var next_id = day_maker.date_to_id(day_maker.get_next(day_maker.get_next(that_date)));

return {
'body': page_maker.make(
    doc.quote,
    doc.style,
    prev_id,
    that_date < now_date ? (next_id == now_id ? '' : next_id) : undefined
  )
};

}
function (doc) {

if (doc.quote)
  emit(doc._id, doc);

}
import DS from 'ember-data';

export default DS.Model.extend({
    fileName: DS.attr("string"),
    fileType: DS.attr("string"),
    ext: DS.attr("string"),
    url: DS.attr("string")
});

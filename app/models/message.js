import DS from 'ember-data';

export default DS.Model.extend({
  messageText: DS.attr(),
  memberName: DS.attr(),
  date: DS.attr('string'),
  group: DS.belongsTo('group', { async:true })
});

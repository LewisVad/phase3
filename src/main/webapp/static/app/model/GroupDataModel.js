Ext.define('GroupDataModel', {
  extend: 'Ext.data.Model',
  schema: {
    namespace: 'Group.model'
  },
  fields: [
    { name: 'ID', type: 'int', defaultValue: 0},
    {name: 'name', type : 'string'}],

  validations: [{
    type: 'presence',
    field: 'name'
  }],
  autoLoad: true
});

var GroupStore = Ext.create('Ext.data.Store', {
  autoLoad: true,
  model: 'GroupDataModel',
  proxy: {
    type  : 'ajax',
    url   : '/groups.json',
    reader: {
      type        : 'json',
      rootProperty: 'groups'
    }
  },
});
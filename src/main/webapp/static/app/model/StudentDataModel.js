Ext.define('StudentDataModel', {
  extend: 'Ext.data.Model',
  schema: {
    namespace: 'Student.model'
  },
  fields: [
    // {name: 'Id', mapping : 'id', defaultValue: 0},
    {name: 'firstName', mapping  : 'firstName'},
    {name: 'lastName',  mapping  : 'lastName'},
    // {name: 'gender',    mapping  : 'gender'},
    // {name: 'picture',   mapping  : 'picture'},
    // {name: 'email',   mapping  : 'email'},
    // {name: 'dateOfBirth',   mapping  : 'dateOfBirth'},
    // {name: 'group',   type : 'group'},
    // {name: 'phones',   type : 'phones'}
  ],
// });
//
// store = Ext.create('Ext.data.Store', {
//   model: 'StudentDataModel',
//   proxy: {
//     type: 'ajax',
//     url: '/students.json',
//     reader: {
//       type: 'json',
//       rootProperty: 'students'
//     }
//   },
  autoLoad: true,
  validations: [{
    type: 'presence',
    field: 'firstName'
  }],
});
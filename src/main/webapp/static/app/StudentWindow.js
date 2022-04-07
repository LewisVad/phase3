Ext.define('Student', {
  extend: 'Ext.data.Model',
  fields: [ 'firstName','lastName', 'gender', 'email' ],

  store: {
    model: 'Student',
    data: [

    ]}
});
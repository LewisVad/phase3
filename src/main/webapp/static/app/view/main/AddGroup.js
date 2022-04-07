Ext.define('phase3.view.main.AddGroup', {
  extend     : "Ext.window.Window",
  // xtype      : 'form-fieldtypes',
  profiles   : {
    classic           : {
      displayfieldColor: 'green'
    },
    neptune           : {
      displayfieldColor: 'green'
    },
    graphite          : {
      displayfieldColor: '#ccc'
    },
    'classic-material': {
      displayfieldColor: '#2196F3'
    }
  },
  frame      : true,
  title      : 'Form Groups',
  width      : 400,
  bodyPadding: 10,
  layout     : 'form',
  title      : 'Add Group',

  items: [{
    xtype     : 'textfield',
    name      : 'groupName',
    fieldLabel: 'Name',
    value     : 'Name'
  }],

  buttons : [{
    text: 'Save',
    action: 'save'
  }, {
    text: 'Cancel',
    handler: function () { this.up('window').close(); }
  }]

})
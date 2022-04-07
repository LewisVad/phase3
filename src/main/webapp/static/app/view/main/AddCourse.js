Ext.define('phase3.view.main.AddCourse', {
  extend     : "Ext.window.Window",
//  xtype      : 'form-fieldtypes',
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
  title      : 'Form Course',
  width      : 400,
  bodyPadding: 10,
  layout     : 'form',
  title      : 'Add course',

  items: [{
    xtype     : 'textfield',
    name      : 'courseTitle',
    fieldLabel: 'Title',
    value     : 'Title'
  }],

  buttons : [{
        text: 'Save',
        action: 'save'
      }, {
        text: 'Cancel',
        handler: function () { this.up('window').close(); }
      }]

})
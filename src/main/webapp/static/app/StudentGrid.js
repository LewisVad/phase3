Ext.define('phase3.view.main.StudentGrid', {
  xtype : 'student-grid',
  extend: 'Ext.grid.Panel',
  viewModel : {    type : 'studentview'  },

  bind: {
    store : '{StudentListStore}',
  //   autoLoad: true,
  //   // proxy   : {
  //   //   method: 'GET',
  //   //   type  : 'rest',
  //   //   url   : 'http://localhost:8080/students',
  //   // }
  //   proxy   : {
  //     type  : 'rest',
  //     url   : 'http://localhost:8080/students',
  //     reader: {
  //       type        : 'json',
  //       rootProperty: 'students'
  //     }
  //   }
  // }
  },

    // dockedItems: [{
    //   xtype: 'toolbar',
    //   dock : 'top',
    //   items: [{
    //     xtype: 'button',
    //     id: 'new',
    //     text: 'Add student',
    //     iconCls: 'x-fa fa-plus',
    //     handler: function(){
    //       pop = Ext.create('phase3.view.main.AddStudent');
    //       pop.show(),
    //           console.warn("abc")
    //     }
    //   }]
    // }],

    columns: [
      // {text: 'ID', dataIndex: 'person_id', width: 50},
      // {text: 'Picture', dataIndex: 'picture', flex: 1},
      {text: 'First name', dataIndex: 'firstName', flex: 1},
      {text: 'Last name', dataIndex: 'lastName', flex: 1}
      // {text: 'Date of birth', dataIndex: 'dateOfBirth', flex: 1},
      // {text: 'Gender', dataIndex: 'gender', flex: 1},
      // {text: 'Email', dataIndex: 'email', flex: 1},
      // {text: 'Address', dataIndex: 'address', flex: 1},
      // {text: 'Phone', dataIndex: 'phone', flex: 1},
      // {text: 'Library Abonament', dataIndex: 'membership', flex: 1},
      // {text: 'Marks', dataIndex: 'marks', flex: 1},
      // {
      //   xtype: 'actioncolumn',
      //   width: 50,
      //   menuDisabled: true,
      //   sortable: false,
      //   items: [{
      //     iconCls: 'x-fa fa-pen green icon-margin',
      //     handler: 'onEditClick'
      //   }, {
      //     iconCls: 'x-fa fa-trash red',
      //     handler: 'onRemoveClick'
      //   }]
    ],
  })
Ext.define('phase3.view.main.StudentView', {
  extend : 'Ext.app.ViewModel',
  alias : 'viewmodel.studentview',

  stores: {
    StudentListStore : {
      autoLoad: true,
      storeId : 'StudentListStore',
      alias : 'store.StudentListStore',
      proxy   : {
        type  : 'rest',
        url   : 'http://localhost:8080/students',
        reader: {
          type        : 'json',
          rootProperty: 'students'
        }
      }
    }
  }
})
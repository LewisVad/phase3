Ext.define('phase3.view.main.StudentList', {
  extend: 'Ext.grid.Panel',
  xtype : 'student-list',

  title: 'Students',

  items: [{
    xtype: 'student-grid'
  }],



});
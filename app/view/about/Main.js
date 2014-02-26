Ext.define('MobileScoreBoard.view.about.Main', {

	extend: 'Ext.Container',
	xtype: 'aboutMain',

	config: {

		title: 'InfoMain',
        iconCls: 'time',
		fullscreen: true,
		layout: 'hbox',
        autoDestroy: false,

		items: [
			{
				xtype: 'panel',
				html: 'message list',
				flex: 1
			},
			{
				xtype: 'panel',
				html: 'message preview',
				flex: 2
			}
		]
	}
});

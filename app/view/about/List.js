Ext.define('MobileScoreBoard.view.about.List', {

	extend: 'Ext.List',
	xtype: 'aboutList',

	config: {
		title: 'Setup',
		ui: 'round',
		//itemTpl: [ '{title}' ],
		item: [
			{
				xtype: 'button',
				text: 'to Main',
				handler: function() {
					MobileScoreBoard.app.redirectTo('showMain');
					//Ext.Viewport.hideMenu(side);
				}
			},
			{
				xtype: 'button',
				text: 'to Login',
				handler: function() {
					MobileScoreBoard.app.redirectTo('showLogin');
					//Ext.Viewport.hideMenu(side);
				}
			},
			
			{
				xtype: 'button',
				text: 'Star',
				iconCls: 'star',
				//scope: this,
				handler: function() {
					console.log('login .... settings');
					//Ext.Viewport.hideMenu(side);
				}
			}
		]
	},

	onBackButtonTap: function(){
		this.callParent(arguments); 
		alert('back button pressed');
	},
	
	initialize: function() {
		
		//this.callParent();
		//this.setData(MobileScoreBoard.app.aboutPages);
	}
});

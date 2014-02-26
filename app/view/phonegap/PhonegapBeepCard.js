Ext.define('MobileScoreBoard.view.phonegap.PhonegapBeepCard', {
	extend: 'Ext.Container',
	title : 'title main',
	xtype: 'phonegapBeepCard',
	
	config: {
			scrollable : true,
			layout: 'vbox',
			fullscreen: false,
			cls: 'note',
			//width:'100%', 
			//height:'100%',
			layout: { type:'vbox', pack:'start', align:'center' },
			//tabBar : false,
			items : [
						{
							xtype: 'label',
							html: 'Beep',
							width : '95%',
							cls: 'note red rounded front'
						},
						{
							xtype: "button",
							text: "Beep",
							width : '95%',
							padding: '10 10 10 10',
							margin: '10 10 10 10',
							handler: function() 
								{
									navigator.notification.beep(3);
								}
						}
					]
			
		}
}); 
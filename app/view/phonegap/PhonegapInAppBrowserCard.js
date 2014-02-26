Ext.define('MobileScoreBoard.view.phonegap.PhonegapInAppBrowserCard', {
	extend: 'Ext.Container',
	title : 'title main',
	xtype: 'phonegapInAppBrowserCard',
	
	config: {
			scrollable : false,
			layout: 'vbox',
			fullscreen: false,
			cls: 'note',
			//width:'100%', 
			//height:'100%',
			layout: { type:'vbox', pack:'start', align:'center' },
			//tabBar : false,
			items : [
						{
							xtype: "button",
							text: "InAppBrowser",
							width : '95%',
							padding: '10 10 10 10',
							margin: '10 10 10 10',
							handler: function() {
								var ref = window.open('http://federadati.provincia.rimini.it/mt/doc/index.html', '_blank', 'location=off,closebuttoncaption=chiudi');
							}
						},
						{
							xtype: 'button',
							width : '95%',
							padding: '10 10 10 10',
							margin: '10 10 10 10',
							text: 'go home',
							handler: function() {
								MobileScoreBoard.app.redirectTo('showLogin');
							} 
						}
					]
			
		}
}); 
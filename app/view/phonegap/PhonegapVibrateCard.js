Ext.define('MobileScoreBoard.view.phonegap.PhonegapVibrateCard', {
	extend: 'Ext.Container',
	title : 'title main',
	xtype: 'phonegapVibrateCard',
	
	config: {
			scrollable : null,
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
							html: 'Beep Vibration',
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
						},
						{
							xtype: "button",
							text: "Vibrate",
							padding: '10 10 10 10',
							margin: '10 10 10 10',
							width : '95%',
							handler: function() {
								navigator.notification.vibrate(2000);
							}
						},
						{
							xtype: "button",
							text: "Notification",
							padding: '10 10 10 10',
							margin: '10 10 10 10',
							width : '95%',
							handler: function() {
								navigator.notification.alert(
										'You are the winner!',  // message
										null,         // callback
										'Game Over',            // title
										'Done'                  // buttonName
								);
							}
						},
						
						{
							xtype: 'button',
							text: 'test env phonegap',
							ui: 'action',
							padding: '10 10 10 10',
							margin: '10 10 10 10',
							width: '95%',
							handler: function() {
										var msg = 'Ver:' + device.cordova + ' pla:' + device.platform + ' mod:' + device.model + ' os:' + device.version;
										console.log(msg);
										Ext.Msg.alert(msg); 
							} 
						}
					]
			
		}
}); 
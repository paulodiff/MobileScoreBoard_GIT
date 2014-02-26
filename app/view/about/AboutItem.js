Ext.define('MobileScoreBoard.view.about.AboutItem', {
    extend: 'Ext.Container',
    xtype: 'aboutItem',
	//requires: ['Ext.TitleBar','Ext.Video'],
    
	config: {
        //tabBarPosition: false, 
		fullscreen: true,
		//layout: 'vbox',
		layout: { type:'vbox', pack:'start', align:'center' },
		cls : 'css3darkbackgound',
		scrollable: true,
		width: '100px',
		
		/*
		border: 3,
		style: 'border-color: blue; border-style: solid;',
		*/
		
        items: 
		[
			{
				xtype: 'container',
				//layout: 'vbox',
				width:'90%', 
				height:'90%', 
				padding: '5 10 10 10',
				//baseCls: 'note',
				items:
				[
					{   
						xtype:'label',
						cls: 'note rounded front',
						//flex: 1,
						html: "<h3>Mobile Score Board</h1>" +
						      "<p>About ----------izzazione dei ticket Information Technology della piattaforma Sharepoint 2013</p>" +
							  "<p>Solo gli utenti autorizzati possono accedere e gli accessi sono tracciati</p>" + 
							  "<p>Versione Beta!</p>"
							  
					}/*,
					{   
						xtype:'label',
						cls: 'note red rounded front',
						//flex: 1,
						hideAnimation: 'fadeOut',
                        showAnimation: 'fadeIn',
						html: "VERSIONE BETA!",
						itemId: 'mainMessageLabel'
					}*/
				]
			},
			{ 
				xtype: 'container', 
				//padding: 30, 
				width: '95%',
				items: 
				[
					{
						xtype: 'button',
						text: 'Inizia',
						padding: '20 20 20 20',
						//id : 'btnStartMobileTicket', 
						ui: 'action'
					},
					{
						xtype: 'button',
						text: '- test -',
						//padding: '20 20 20 20 ',
						margin:  '20 20 20 20',
						//ui: 'action',
						//width: '90%',
						handler: function() {
							//Ext.MessageBox('Title1', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);
							var msg = '';
							msg = ''; // + MobileScoreBoard.util.Config.isPhoneGap() + '<br/>';
							//msg = msg + '' + MobileScoreBoard.util.Config.getServiceUrl();
							//console.log(MobileScoreBoard.util.Config.isPhoneGap());
							//console.log(MobileScoreBoard.util.Config.getDemo());
							//console.log(MobileScoreBoard.util.Config.getDbName());
							//console.log(MobileScoreBoard.util.Config.getServiceURL());
							//console.log(MobileScoreBoard.util.Config.service_URL());
							//msg = MobileScoreBoard.util.Config.service_URL();
							//Ext.Msg.alert('isPhonegap ' + MobileScoreBoard.util.Config.isPhoneGap()); 
							//console.log(msg);
							MobileScoreBoard.app.redirectTo('showAbout');
							//Ext.Msg.alert(msg); 
                        } 
					}
				] 
			}
		]
    },
	// show message on Main Form
	setMainMessageLabel: function (message) {
        var label = this.down('#mainMessageLabel');
		console.log('setMainMessageLabel:' + label.getHtml());
        label.setHtml(message);
		console.log('setMainMessageLabel: after update' + label.getHtml());
		label.hide();
        //label.show();
    }
});

			

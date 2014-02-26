Ext.define('MobileScoreBoard.view.main.MainItem', {
    extend: 'Ext.Container',
    xtype: 'mainItem',
	//requires: ['Ext.TitleBar','Ext.Video'],
    
	config: {
        //tabBarPosition: false, 
		fullscreen: true,
		//layout: 'vbox',
		layout: { type:'vbox', pack:'start', align:'center' },
		cls : 'css3darkbackgound',
		scrollable: true,
		
		/*
		border: 3,
		style: 'border-color: blue; border-style: solid;',
		*/
		
        items: 
		[
			{
				xtype: 'container',
				//layout: 'vbox',
				width:'95%', 
				//height:'90%', 
				padding: '10 0 10 1',
				//baseCls: 'note',
				items:
				[
					{   
						xtype:'label',
						cls: '',
						//flex: 1,
						
						html: 	"<div  class='noteFRONT'>"+
								"<h3>Mobile Score Board</h3>"+
								"<br/>"+
								"<h2>App mobile per segnare i punti non avendo penna e carta!</h2>" +
								"<h2>Versione Beta!</h2>"+
								"</div>"
							  
					}/*,
					{   
					
					
					<div class="note rounded">
<div class="h_container">
  <span  class="h_span"><img class="h_img"         
      src="http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/64/Actions-view-calendar-list-icon.png" /></span>
    <p class="h_title">Mobile Ticket</p>
</div>
    <p class="h_subtitle">Info1</p>
    <h2>9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar rhoncus risus 9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar rhoncus risus</h2>
     <h2>9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar rhoncus risus</h2>
     <h2>9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar rhoncus risus</h2>
</div>

					
					
					
					
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
					/*{
						xtype: 'button',
						text: 'Inizia',
						padding: '20 20 20 20',
						id : 'btnStartMobileTicket', 
						ui: 'action'
					},*/
					{
						xtype: 'button',
						text: 'SCOREBOARD',
						padding: '20 20 20 20',
						id : 'btnStartScoreboard', 
						ui: 'action',
						handler: function() {
							MobileScoreBoard.app.redirectTo('showScoreboard');
						}
					},
					{
						xtype: 'button',
						text: 'test',
						padding: '10 10 10 10 ',
						margin:  '20 0 20 0',
						//ui: 'action',
						//width: '95%',
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

			/*,
			{ 	xclass: 'MobileScoreBoard.view.ticketSL.Card' },
			{   xclass: 'MobileScoreBoard.view.about.Card'	}*/

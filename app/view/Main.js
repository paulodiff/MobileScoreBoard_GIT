Ext.define('MobileScoreBoard.view.Main', {
    extend: 'Ext.Container',
    xtype: 'mainCard',
	//requires: ['Ext.TitleBar','Ext.Video'],
    
	config: {
        //tabBarPosition: false, 
		fullscreen: true,
		//layout: 'vbox',
		layout: { type:'vbox', pack:'start', align:'center' },
		//baseCls: 'my-home-container',
		
		/*
		border: 3,
		style: 'border-color: blue; border-style: solid;',
		*/
		
        items: 
		[
			{
				xtype: 'container',
				//layout: 'vbox',
				//width:'90%', 
				//height:'90%', 
				//padding: 5,
				baseCls: 'note',
				items:
				[
					{   
						xtype:'label',
						baseCls: 'note',
						flex: 1,
						html: "<h3>Mobile Ticket</h3><p>App mobile per la visualizzazione dei ticket Information Technology della piattaforma Sharepoint 2013</p><br/>"
					}//,{ xtype: 'container', padding: 20, items: [{xtype: 'button',text: 'Inizia ...',id : 'btnStartMobileTicket', ui: 'forward'}] }
				]
			},
			{ 
				xtype: 'container', 
				padding: 20, 
				items: 
				[
					{
						xtype: 'button',
						text: 'Inizia ',
						id : 'btnStartMobileTicket', 
						ui: 'forward'
					}
				] 
			}
		]
    }
});

			/*,
			{ 	xclass: 'MobileScoreBoard.view.ticketSL.Card' },
			{   xclass: 'MobileScoreBoard.view.about.Card'	}*/

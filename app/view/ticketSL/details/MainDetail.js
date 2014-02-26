Ext.define('MobileScoreBoard.view.ticketSL.details.MainDetail', {
	extend: 'Ext.Container',
	title : 'title main',
	xtype: 'maindetailpanel',
	
	config: {
			//cls : 'details-tabpanel default-bg',
			//tabBar : {	docked : 'bottom'	},
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
							xtype : 'infodetailpanel',
							flex: 1
							//height:'80%',
							//width:'100%'
						}, //{xtype : 'gallery'}, //{xtype : 'review'},
						//{	html: 'Center item',	height: '10%'	},
						//{ xtype: 'container', padding: 10, items: [{xtype: 'button'}] },
						{ 
							xtype: 'container', 
							padding: 20, 
							width:'95%',
							items: 
								[
									{
										xtype: 'button',
										text: 'chiudi',
										ui : 'confirm',
										id : 'closeBtnFormDetail'
									}
								] 
						}
						//{ xtype: 'container', padding: 20, items: [{xtype: 'button',text: 'close'}] }
						/*
						,
						
						{	xtype: 'button',
							padding: 10,
							ui : 'confirm',
							text: 'chiudi vista',
							id : 'closeBtnFormDetail'
						}
						*/
					]
			
		}
});

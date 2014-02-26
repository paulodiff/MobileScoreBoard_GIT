Ext.define('MobileScoreBoard.view.dataview.CardDataView', {

    extend: 'Ext.Container',
    xtype: 'cardDataView',
	requires: ['Ext.Menu'],
	
    config: {
		layout: 'fit',
		animation : 'flip',
		autoDestroy: false,
		//navigationBar: true,		
		navigationBar: { hidden: true  }, /* nasconde la barra di navigazione */
	
	
	
	
		tab: {
			title: 'DW List',
			//iconCls: 'download',
			action: 'dataviewTab'
		}, 
		
        items: [
            {
                xtype: 'dataview',
				itemId: 'dataview1',
				scrollable: { direction: 'vertical' },
				//plugins: [{xclass: 'Ext.plugin.PullRefresh',pullText: 'Pull down'}],
                store: 'TicketStore',
				baseCls: 'my-dataview',
				itemTpl: '<div><img src="resources/icons/icon.png"> {Autore} ({Stato_Ticket}) <br/>{Descrizione}</div>'
				/*
				listeners: {
						itemtap: function(list, index, item, record) {console.log("itemtap");},
						itemswipe: function( t, index, target, record, e, eOpts ) {
							console.log("itemswipe : " + e.direction + index);
						}
				}
				*/
            }
        ]
    } 
});


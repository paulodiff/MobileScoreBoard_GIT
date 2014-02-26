Ext.define('MobileScoreBoard.view.ticketSL.List', {

	extend: 'Ext.List', 
	xtype: 'ticketSLList',
	fullscreen : true,
	

	config: {
		title: false ,
		//cls : 'css3darkbackgound', 
		padding : '0px 0px 0px 0px',
		margin : '0px 0px 0px 0px',
		navigationBar: { hidden: true  }, /* nasconde la barra di navigazione */
		variableHeights: true, 	
		emptyText: '<p class="note yellow">Nessun dato corrispondente ai parametri di ricerca. Riprovare con altri dati o ricaricarli.</p>',		
		plugins: [
			{	
			
				/*
				xclass: 'Ext.plugin.PullRefresh',
				pullText: 'Pull down ... txt',
				listeners : {
					updatedata : function() {
						console.log('Pull refresh : ' + MobileScoreBoard.app.storeMaxId);
						//var proxy = this.getProxy();
						//proxy.setExtraParam('$filter', 'Id lt ' + MobileScoreBoard.app.storeMaxId);
						
					}
				}
				*/
				
				
				xclass: 'Ext.ux.touch.PullRefreshFn',
				pullRefreshText: 'Pull down for more new data!',
				pullText: 'Pull down ... txt',
				refreshFn: function() { 
					console.log('MobileScoreBoard.view.ticketSL.List:PullRefreshFn:Start');
					MobileScoreBoard.app.storeMaxId = 10000;
					console.log('MobileScoreBoard.view.ticketSL.List:PullRefreshFn:RemoveAll');
					Ext.getStore('TicketStore').removeAll();
					console.log('MobileScoreBoard.view.ticketSL.List:PullRefreshFn:Refresh');
					Ext.getStore('TicketStore').fireEvent('refresh');
					console.log('MobileScoreBoard.view.ticketSL.List:PullRefreshFn:Load');
					Ext.getStore('TicketStore').load();
					/*
					Ext.getStore('TicketStore').getProxy().setExtraParams({	
																			'$filter', ' Id lt ' + MobileScoreBoard.app.storeMaxId}
																		);
					console.log('MobileScoreBoard.app.storeMaxId : ' + MobileScoreBoard.app.storeMaxId);
					Ext.getStore('TicketStore').load();
					*/
				}
			
			},
			{	
				xclass: 'Ext.plugin.ListPaging',
				loadMoreText : 'Clicca per altri dati',  
                noMoreRecordsText : 'Nessun record da mostrare',
				autoPaging: true
			}
		],
		//store: 'List3',
		//itemTpl: Ext.create('Ext.XTemplate', '<div class="itemTicket">({ID})  {Descrizione}</div>') 
		
		itemTpl: Ext.create('Ext.XTemplate',
			'<div class="{[this.get_CSS_Class(values.Stato_Ticket)]}">',
			'<div class="h_container">',
			'<span class="h_span"><img class="h_img" src="{[this.get_ICO_Status(values.Stato_Ticket)]}" /></span>',
      		'<h2>{ID} del {DataCreazione}</h2>',
			'<h2>{Autore}</h2>',			
			'</div>',
			    //'<div class="{[this.get_ICO_Status(values.Stato_Ticket)]}">',//
                //'<div class="note red">',
				//'<div class="photo"><img src="{[this.get_ICO_Status(values.Stato_Ticket)]}" /></div>',
				//'<div class="icon-wrapper"><div class="icon" style="-webkit-mask-image:url(resources/icons/icon.png);" ></div></div>',
				//'<h2>{ID} {DataCreazione} {Autore} - {Stato_Ticket} </h2>', 
				'<hr>',
				'<p class="h_subtitle">{Titolo}</p>',
				//'<img src="resources/icons/icon.png">',
                //'<span style="{[this.get_CSS_Color(values.Stato_Ticket)]}">[ {ID} {Stato_Ticket} ]</span> <small><b>{Autore} {DataCreazione}</b></small>',
				//'<span>[ {ID} {Stato_Ticket} ]</span> <small>{Autore} {DataCreazione}</small>',
                //'<div>',
     			//	'<small>{[this.MYhtmlEncode(values.Descrizione)]}</small>',
                //'</div>',
				
            '</div>',
            {
			
			   get_ICO_Status: function(stato_ticket){
					if(stato_ticket === 'Risolto') 
						return 'resources/images/switch48.png';
					if(stato_ticket === 'Aperto') 
						return 'resources/images/error48.png';
					if(stato_ticket === 'Preso in carico') 	
						return 'resources/images/reboot48.png';
			   },
			
			   MYhtmlEncode : function(value){
			   
					//console.log(value);
					//console.log(String(value));
					//console.log(value.replace(/à/g, "&agrave;"));				
			   
					return !value ? value : String(value)
                                        .replace(/&/g, "&amp;")
                                        .replace(/>/g, "&gt;")
                                        .replace(/</g, "&lt;")
                                        .replace(/"/g, "&quot;")
                                        .replace(/'/g, "'")
                                        .replace(/à/g, "&agrave;")
                                        .replace(/è/g, "&egrave;")
										.replace(/é/g, "&egrave;")
                                        .replace(/ì/g, "&igrave;")
                                        .replace(/ò/g, "&ograve;")
                                        .replace(/ù/g, "&ugrave;")
                                        ;
				},
			
                get_CSS_Class: function(stato_ticket) {
					//console.log('get_CSS_Class:' + stato_ticket);
					
					if(stato_ticket === 'Risolto') return 'note green rounded';
					if(stato_ticket === 'Aperto') return 'note red rounded';
					if(stato_ticket === 'Preso in carico') return 'note yellow rounded';
                },
			
                get_CSS_Color: function(stato_ticket) {
					//console.log(stato_ticket);
					
					if(stato_ticket === 'Risolto') return 'color:green;';
					if(stato_ticket === 'Aperto') return 'color:red;';
					if(stato_ticket === 'Preso in carico') return 'color:yellow;';
                },

                required: function(required) {
                    return required ? '(' + required + ' required)' : '';
                }
            }
        ) 
		
		/*
		itemTpl: [
			'<h2>{ID} ({Stato_Ticket}) {Autore} - {Categoria}</h2>',
			'<h4>{Descrizione}</h4>'
		].join('')
		*/
    }
});

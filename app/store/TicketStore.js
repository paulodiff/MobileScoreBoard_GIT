/* Store per il caricamento dei ticket attraverso dati fittizi ... ora test online */

Ext.define('MobileScoreBoard.store.TicketStore', {
    extend: 'Ext.data.Store',
	requires: ['Ext.data.proxy.Rest','MobileScoreBoard.util.CustomReader'],

    config: {
		model: "MobileScoreBoard.model.TicketModel",
		remoteFilter: true,
		remoteSort: true,
		autoLoad: false,
		listeners : {
			load : function(){
				console.log('TicketStore : load ' + MobileScoreBoard.util.Config.getServiceURL());
			},
			
			refresh : function() {
					console.log('TicketStore : refresh ' + MobileScoreBoard.app.serviceURL);
					console.log('TicketStore : MobileScoreBoard.app.storeMaxId : ' + MobileScoreBoard.app.storeMaxId);
					var proxy = this.getProxy();
					console.log('TicketStore : SetExtraParams : ' + 'Id lt ' + MobileScoreBoard.app.storeMaxId);
					
					if (MobileScoreBoard.app.storeCurFilter != '') {
						console.log('TicketStore : filter enabled : ' + MobileScoreBoard.app.storeCurFilter);
						var tmp_filter = '( Id lt ' + MobileScoreBoard.app.storeMaxId + ' ) and ' + MobileScoreBoard.app.storeCurFilter;
						console.log('TicketStore : proxy ExtraParam : ' + tmp_filter); 
						proxy.setExtraParam('$filter', tmp_filter);	
					} else {
						console.log('TicketStore : filter DISABLED : ' + MobileScoreBoard.app.storeCurFilter);
						proxy.setExtraParam('$filter', 'Id lt ' + MobileScoreBoard.app.storeMaxId);
					}
					
					
					
					
										
					/* Get login_token */
					
					var MTSessionStoreDS = Ext.getStore("MTSessionStore");
					var index = MTSessionStoreDS.find('recordId','loginToken');
					
			        if(index === -1){
						console.log('TicketStore: Sessione non trovata ... ');
						//MobileScoreBoard.app.redirectTo('showLogin');
					}
					else{
						var logon_item = MTSessionStoreDS.getAt(index); 
						console.log('TicketStore: Sessione trovata per :  ' + logon_item.data.username);
						console.log(logon_item);
						//action.resume()
						console.log('TicketStore : SetExtraParams : ' + 'login_token:' + logon_item.data.token);
						proxy.setExtraParam('login_token', logon_item.data.token);
					}
			}
		},
		/*
		refresh: function( t, d, eO ){
			console.log('Store : refresh : ' + MobileScoreBoard.app.storeMaxId);
		},
		
		onBefore: function(){
			console.log('Store : onBefore : ' + MobileScoreBoard.app.storeMaxId);
		},
		*/
		/*
		filters: [
			{
				property: "$filter Id le ",
				value: MobileScoreBoard.app.storeMaxId
			}
		],
		*/
		pageSize: 10, //numero di elementi per pagina
		//sorters: [ {   property: 'ID', direction: 'DESC' } ],
		/*
		proxy: {
			type: 'rest',
			url : 'data/dataHD.json',
            reader: {
                type: 'json'
            }
        }
		*/
		// Modifiche al proxy per l'accesso ai dati tramite proxy php
		proxy: {
			type: 'ajax',
			//url : 'http://federadati.provincia.rimini.it/mt/test/proxySP.php',
			url : MobileScoreBoard.util.Config.service_URL(),
			//url : MobileScoreBoard.app.serviceURL,
			limitParam : '$top',
			extraParams : {
				//csurl : 'https://api.mongolab.com/api/1/databases/demo_123/collections/ticket',
				csurl : 'http://example.com',
				//apiKey : 'ukaQ2csqWZq1vklruSC-U4L_7VQe8Caw',
				//$cucu : 'ABC',
				$orderby: 'Id desc'
				//$skip: 2
			},
            reader: {
				// Custom reader definito per modificare i dati...
                type: 'CustomReader'
            }
        }
		
    }
});

  //fields: ['ID', 'Autore', 'Descrizione', 'Stato_Ticket', 'Priorità'],

/*
        listeners: {
            beforeload: function(){
                var proxy = this.getProxy();
                proxy.getMethod = function() { return "GET" }
            }
        },

		
        pageSize: 10,
        proxy: {
            type: 'rest',
            //url: 'http://1schematic-ipsum.herokuapp.com/?n=15',
			url:  'http://127.0.0.1:8899/mt/data/dataHD.json',
			//url : 'https://api.mongolab.com/api/1/databases/demo_123/collections/projects?apiKey=ukaQ2csqWZq1vklruSC-U4L_7VQe8Caw',
			//actionMethod : {create: 'POST', read: 'POST', update: 'POST', destroy: 'POST'},

            extraParams: {
                "type": "object",
                "properties[id][type]":"string",
                "properties[id][ipsum]":"id",
                "properties[from_user][type]":"string",
                "properties[from_user][ipsum]":"first name",
                "properties[profile_image_url][type]":"string",
                "properties[profile_image_url][ipsum]":"small image",
                "properties[text][type]":"string",
                "properties[text][ipsum]":"sentence",
                "properties[created_at][type]":"string",
                "properties[created_at][format]":"date-time"
            }
        },
		
		*/

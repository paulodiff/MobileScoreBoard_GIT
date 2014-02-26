/* Local Store per la memorizzazione dei dati di login */

Ext.define('MobileScoreBoard.store.MTSessionStore', {
    extend: 'Ext.data.Store',
	requires: ['Ext.data.proxy.LocalStorage'],

    config: {
		model: "MobileScoreBoard.model.SessionModel",
		//remoteFilter: true,
		//remoteSort: true,
		autoLoad: true,
		/*
		listeners : {
			refresh : function() {
					console.log('Store : MobileScoreBoard.app.storeMaxId : ' + MobileScoreBoard.app.storeMaxId);
					var proxy = this.getProxy();
					console.log('Store : SetExtraParams : ' + 'Id lt ' + MobileScoreBoard.app.storeMaxId);
					proxy.setExtraParam('$filter', 'Id lt ' + MobileScoreBoard.app.storeMaxId);
			}
		},
		pageSize: 10, //numero di elementi per pagina
		*/
		proxy: {
			type: 'localstorage',
			id: 'MTSessionStore'
        }
		
    }
});


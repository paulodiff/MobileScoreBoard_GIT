/*
 Twitter has deprecated the public Search. This application will simulate tweet data using schematic-ipsum.
 until an oauth solution is developed.
*/

Ext.define('MobileScoreBoard.store.List3', {
    extend: 'Ext.data.Store',

    config: {
        fields: ['ID', 'Autore', 'Descrizione', 'Stato_Ticket', 'Priorità'],
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
		
		autoLoad: true
		
    }
});

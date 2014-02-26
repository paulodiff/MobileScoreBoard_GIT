/* Model per i dati di testi...  */
Ext.define('MobileScoreBoard.model.TicketModel', {
    extend: 'Ext.data.Model',
	xtype: 'TicketModel',
    config: {
        fields: [
			{name: "ID"    , type: "int"},
            {name: "Titolo"	, type: "string"},
            {name: "Data_e_ora" , type: "string"},
            {name: "Stato_Ticket", type: "string"},
			{name: "Priority", type: "string"},
			{name: "Descrizione", type: "string"},
			{name: "AuthorId", type: "string"},
			{name: "AssignedToId", type: "string"},
			{name: "EditorId", type: "string"},
			{name: "Autore", type: "string"},
			{name: "AssegnatoA", type: "string"},
			{name: "EditorDa", type: "string"},
			{name: "DataCreazione", type: "string"},
			{name: "DataModifica", type: "string"},
			{name: "Feedback", type: "string"},
			{name: "Azioni", type: "string"}
        ]
    }
});


			/*
           {name: "description",    type: "string", mapping: "description.texts.en"},
 			{name: "image", type: "string", mapping: "image.id", convert: function(value, record) {
                return "http://kiva.org/img/w80h80/" + value + ".jpg";
            }},
            'terms', 'location',
            {
                name: 'percent_funded', convert: function(v, record) {
                    return parseInt(record.data.funded_amount / record.data.loan_amount * 100, 10);
                }
            }
			
			*/
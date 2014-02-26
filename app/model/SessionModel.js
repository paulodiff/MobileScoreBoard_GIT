/* Model per memorizzare i dati delle sessioni  */
Ext.define('MobileScoreBoard.model.SessionModel', {
    extend: 'Ext.data.Model',
	xtype: 'SessionModel',
    config: {
        fields: [
			{name: "uuid"    , type: "string"},
			{name: "recordId"    , type: "string"},
            {name: "timestamp"	, type: "string"},
			{name: "token"	, type: "string"},
            {name: "username" , type: "string"},
            {name: "password", type: "string"}
			
			/*,
			{name: "Descrizione", type: "string"},
			{name: "Priority", type: "string"},
			{name: "DataCreazione", type: "string"},
			{name: "DataModifica", type: "string"},
			{name: "Categoria", type: "string"},
			{name: "Attività_svolte", type: "string"},
			{name: "Feedback", type: "string"},
			{name: "Comment", type: "string"},
			{name: "Azioni", type: "string"},
			{name: "Autore", type: "string"}*/
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
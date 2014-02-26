Ext.define('MobileScoreBoard.util.CustomReader', {
    extend: 'Ext.data.reader.Json',
    alias : 'reader.CustomReader',

    getRoot: function(data) {
	
		console.log('CustomReader : getRoot ... ');
		//console.log(data);
		//console.log('MobileScoreBoard.util.CustomReader ... processing data ... ');
		
		/*
        if (this.rootAccessor) {
            data = this.rootAccessor.call(this, data);
        }

        var values = [],
            name;

        for (name in data) {
            values.push({
                name: name,
                value: data[name]
            });
        }

        return values;
		*/


// array per la decodifica degli utenti		
var SP_utenti = {
127:"Alessandro Leonardi", 
128:"Alessandro Lotti", 
96:"Andrea Depaoli", 
85:"Anna Rita Biondi", 
122:"Antonella Venturi", 
114:"Assunta Signorotti", 
70:"Augusto Braschi", 
21:"Barbara Pavani", 
105:"Barbara Raffaeli", 
46:"Barberini Grazia", 
53:"Carla Benassi", 
12:"Carlo Tanci", 
44:"Chiara Astolfi", 
107:"Chiara Canini", 
81:"Christian Ghigi", 
118:"Cinzia Vandi", 
71:"Claudia Berretta", 
32:"Claudia Ozzi", 
51:"Corazzi Antonella", 
1:"Cristian Berardi", 
41:"Cristina Biondi", 
116:"Cristina Schneider", 
28:"Damiana Bertozzi Fraternali", 
42:"Daniela Manfroni", 
130:"Daniela Valeriani", 
59:"Daniele Magnani", 
91:"Daniele Reciputi", 
39:"Daniele Ricci", 
62:"Davide Lombardelli", 
102:"Debora Duranti", 
40:"Denise Magrini", 
24:"Elena Malfatti", 
68:"Elisa Foschi", 
80:"Emilio Urbinati", 
109:"Enzo Finocchiaro", 
11:"Fabio Berardi", 
125:"Filippo Tognacci", 
106:"Francesca Faedi", 
57:"Francesco Bosco", 
78:"Francesco Santoro", 
64:"Franco Facondini", 
110:"Gabriele Ciavatti", 
63:"Gabriele Sartini", 
93:"Gianluca Botteghi", 
48:"Gianluca Rossi", 
37:"Gioacchino Romagnoli", 
55:"Giorgia Mussoni", 
20:"Giorgio Kottas", 
76:"Giovanna Ciavatti", 
13:"Giovanni Fattori", 
73:"Giovannino Vittori", 
108:"Giovanni Paganelli", 
103:"Giuseppe Fuschillo", 
87:"Gloria Bocchini", 
117:"Graziano Gregorini", 
100:"Ivana Baroni", 
112:"Laura Paolucci", 
129:"Luca Mazzi", 
131:"Luca Vannoni", 
25:"Luisella Candiracci", 
113:"Maddalena Dionigi", 
22:"Marco Balacchi", 
36:"Marco Magalotti", 
104:"Marco Succi", 
98:"Maria Rita Bedodi", 
66:"Marina Capacci", 
120:"Marinella Ronci", 
95:"Marino Campana", 
101:"Mary Paris", 
67:"Massimo Bartoletti", 
65:"Massimo Esposito", 
29:"Massimo Filippini", 
72:"Massimo Gavelli", 
86:"Massimo Semprini", 
8:"Massimo Venturelli", 
75:"Massimo Zaghini", 
69:"Maurizio Guidi", 
115:"Meris Soldati", 
90:"Michela Bertuccini", 
52:"Michele Gaudenzi", 
82:"Mirco Carlini", 
60:"Monica Andreini", 
54:"Monica Bertuccioli", 
119:"Moreno Casali", 
45:"Nicoletta Bonavita", 
38:"Oriella Tamburini", 
79:"Paola Giulianelli", 
23:"Paola Moscianese", 
17:"Paolo Canini", 
61:"Paolo Masper", 
121:"Paolo Tampieri", 
27:"Patrizia Dellavalle", 
126:"Pierclaudio Arrigoni", 
88:"Piero Dellapasqua", 
49:"Pierpaolo De Luigi", 
43:"Ranieri Boschi", 
31:"Renzo Moroni", 
26:"Rihab Ben Ammar", 
56:"Rino Menghi", 
123:"Roberta Laghi", 
74:"Roberto Baietti", 
19:"Roberto Martinelli", 
35:"Roberto Piovaccari", 
111:"Roberto Piraccini", 
18:"Rossella Righini", 
84:"Rossella Salvi", 
83:"Ruggeri Sabrina", 
10:"Ruggero Ruggeri", 
58:"Sara Santi", 
94:"Sauro Sarti", 
77:"Selena Mambelli", 
124:"Silvia Pesaresi", 
9:"Silvia Sarti", 
33:"Simonetta Monti", 
14:"SP Admin", 
99:"SP Service", 
97:"Stefano Capanni", 
50:"Stefano Casadei", 
92:"Tatiana Mazzotti", 
47:"Valerio Benelli", 
30:"Vittorio Rocchi"
}

	
		var outputModel = [];
		var results = data.d.results;
		console.log('CustomReader:' + results.length);
		console.log(results);
		
		for (var i = 0; i < results.length; i++) {
			var item = {};
			item['ID'] = results[i].ID;
			item['Titolo'] = results[i].Title;
			item['Stato_Ticket'] = results[i].Status;
				if ( item['Stato_Ticket'] == "RIsolto" ){
					item['Stato_Ticket'] = "Risolto";
				}
				
			item['Priority'] = results[i].Priority;	
			item['Descrizione'] = results[i].Comment;
			item['AuthorId'] = results[i].AuthorId;
			item['AssignedToId'] = results[i].AssignedToId;
			item['EditorId'] = results[i].EditorId;
			item['Autore'] = SP_utenti[results[i].AuthorId];
			item['AssegnatoA'] = SP_utenti[results[i].AssignedToId];
			item['EditorDa'] = SP_utenti[results[i].EditorId];
			item['DataCreazione'] = Ext.util.Format.date(results[i].Created,'d/m/Y');
			item['DataModifica'] = Ext.util.Format.date(results[i].Modified,'d/m/Y');
			item['Feedback'] = results[i].Feedback;
			item['Azioni'] = results[i].V3Comments;
			
			//console.log(item['Azioni']);
			//console.log(Ext.util.Format.date(item['DataCreazione'],'d/m/Y'));
			
			
			//console.log(results[i].ID);
			//console.log(MobileScoreBoard.app.storeMaxId);
			if ( (results[i].ID).valueOf() < MobileScoreBoard.app.storeMaxId ){
				MobileScoreBoard.app.storeMaxId = (results[i].ID).valueOf();
				//console.log('CurrMaxId:'  + MobileScoreBoard.app.storeMaxId);
			}
			
			
			outputModel.push(item);
		}

		
		console.log('Custom reader output data ... ');
		console.log(outputModel);
		
		
		return outputModel;
		
		
		
    }
});
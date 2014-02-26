Ext.define('MobileScoreBoard.view.ticketSL.details.InfoDetail', {
		extend: 'Ext.Container',
		xtype: 'infodetailpanel',
		config: {
			//cls : 'transparent details-info',
			//iconCls : 'info',
			//title : 'titolo da cambiare',
			scrollable : true,
			width:'100%', 
			height:'100%', 
			//padding: 5,
			
			tpl: Ext.create('Ext.XTemplate',
			'<div class="{[this.get_CSS_Class(values.Stato_Ticket)]}">',
			'<div class="h_container">',
			'<span class="h_span"><img class="h_img" src="{[this.get_ICO_Status(values.Stato_Ticket)]}" /></span>',
      		'<h2>{ID} del {DataCreazione}</h2>',
			'<h2>{Autore}</h2>',			
			'</div>',
					//'<div class="container">',
					  '<hr/>',					  
					  '<p class="h_subtitle"><b>Titolo:</b> {Titolo}</p>',
					  '<hr/>',
					  '<p class="h_subtitle"><b>Descrizione:</b> {Descrizione}</p>',
					  '<hr/>',						  
					  '<p class="h_subtitle"><b>Azioni:</b> {Azioni}</p>',
					  '<hr/>',							  
					  '<p class="h_subtitle"><b>Tecnico:</b> {AssegnatoA}</p>',
					  '<hr/>',							  
					  '<p class="h_subtitle"><b>Feedback:</b>{[this.get_Feedback(values.Feedback)]}</p>',
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
			
				get_Feedback: function(stato_ticket){
									
					if(stato_ticket === 'Molto soddisfatto') 
						return '<img src="resources/images/star_full.png"><img src="resources/images/star_full.png"><img src="resources/images/star_full.png">';
					if(stato_ticket === 'Soddisfatto') 
						return '<img src="resources/images/star_full.png"><img src="resources/images/star_full.png"><img src="resources/images/star_half.png">';
					if(stato_ticket === 'Insoddisfatto') 	
						return '<img src="resources/images/star_full.png"><img src="resources/images/star_full.png"><img src="resources/images/star_void.png">';
						
					return ' non assegnato ';
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
			
			
			/* OLD TEMPLATE 
			tpl: [
				'<div class="note rounded">',
					//'<div class="container">',
					  '<h1>{ID} {Stato_Ticket} - {DataCreazione} di {Autore} </h1>',
					  '<hr/>',					  
					  '<h2>{Titolo}</h2>',
					  '<p>Azioni:</p>',
					  '<h2>{Azioni}</h2>',
					  '<p>Comment:</p>',
					  '<div class="address">{Comment}</div>',
					  '<p>Descrizione:</p>',
					  '<p>Assegnato a:</p><h2>Assegnata a: {AssegnatoA}</h2>',	
					  '<hr/>',					  
					  '<div class="address">{Descrizione}</div>',
					  '<hr/>',
					  '<p>Feedback:</p>',
					  '<div class="name">{Feedback}</div>',
					//'</div>',
				'</div>'
			]
			*/
			
			/*
			tpl : Ext.create('Ext.XTemplate', 
				document.getElementById('tpl_place_details_info').innerHTML, {
								getRating : function(rating){
												return Locator.util.Util.getRating(rating);
								}
				})
			*/
		}
});

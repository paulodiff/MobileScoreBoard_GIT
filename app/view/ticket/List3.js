Ext.define('MobileScoreBoard.view.ticket.List3', {

    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
		'Ext.SegmentedButton'
    ],

	extend: 'Ext.List', 
	
	xtype: 'TicketList3',
	autoDestroy: false,

	config: {
		
		onItemDisclosure: function(){	console.log('TEST'); },
		
		//variableHeights: true,
		title: 'Ticket aperti',
        //iconCls: 'chat',
        //itemCls: 'TicketItem', // CSS aggiuntivo
		
		items: [
			{
				docked: 'top',
				xtype: 'toolbar',
				//ui: 'gray',

				items: [
					{
						width: '100%',
						defaults: {	flex: 1	},
						xtype: 'segmentedbutton',
						allowDepress: false
					}
				]
			}
		], 
		


        plugins: [
            { type: 'listpaging' },
            { type: 'pullrefresh' }
        ],


		emptyText: '<p class="no-searches">No .... found matching that search</p>',		

		
		grouped: false,
		//indexBar: true,
		store: 'List3',

		
		variableHeights: true,
		//useSimpleItems: true,
		

		itemTpl: [
			'<div class="avatar" style="background-image: url({photo});"></div>',
			'<h3>{ID} ({Stato_x0020_Ticket}) {Autore}</h3>',
			'<h3>{Descrizione}</h3>'
		]
	},
	

	
	initialize: function() {
	
		console.log(' ... initialize ... ');
	
		//this.config.title = 'init3'; //Oreilly.app.title;
		//this.callParent();

		var segmentedButton = this.down('segmentedbutton');
		
		var nomi = [
			{name : 'RIsolto',age : 43, text: 'RIsolto'},
			{name : 'Preso in carico',age : 12, text: 'Preso in carico'},
			{name : 'Aperto',age : 11, text: 'Aperto'}
			
		];
		
		console.log(' ... loading button ... ');
		
		Ext.Array.each(nomi, function(day) {
			console.log(day);
			segmentedButton.add(day);
		});
		

		
	} 
	
});

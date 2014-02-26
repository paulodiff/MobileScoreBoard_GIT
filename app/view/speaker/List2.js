Ext.define('MobileScoreBoard.view.speaker.List2', {

    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging'
    ],


	extend: 'Ext.List',
	xtype: 'speakers2',

	config: {
		
		variableHeights: true,
		title: 'Speakers-2',
        iconCls: 'chat',
        cls: 'speackers2',
	
	    items: [
            {
                docked: 'top',
				title: 'Speakers2',
                xtype: 'titlebar'
            }
        ],
	


        plugins: [
            { type: 'listpaging' },
            { type: 'pullrefresh' }
        ],


		emptyText: '<p class="no-searches">No .... found matching that search</p>',		

		
		grouped: false,
		indexBar: true,
		store: 'Tweets',


		itemTpl: [
			'<div class="avatar" style="background-image: url({photo});"></div>',
			'<h3>{first_name} {last_name}</h3>',
			'<h3>{text}</h3>',
			'<h4>{position}, {affiliation} Altro.</h4>'
		]
	}
});

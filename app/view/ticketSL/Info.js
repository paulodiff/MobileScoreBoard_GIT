Ext.define('MobileScoreBoard.view.ticketSL.Info', {

	extend: 'Ext.Container',
	xtype: 'ticketSLInfo',

	config: {

		cls: 'speakerInfo',
		tpl: [
			'<div class="header">',
				'<div class="avatar" style="background-image: url({photo});"></div>',
				'<h3>{ID} {Autore}</h3>',
				'<h4>{position}, {affiliation}</h4>',
			'</div>',
			'<p>altro</p>',
			'<p>{bio}</p>'
		]
	}
});

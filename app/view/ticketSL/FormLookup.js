/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('MobileScoreBoard.view.ticketSL.FormLookup', {
    extend: 'Ext.form.Panel',
	xtype: 'ticketSLFormLookup',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio'
    ],
    id: 'FormLookup',
    config: {
	
		/*
	
		layout: {
            type: 'card',
            animation: {
                type: 'flip'
            }
        },

		*/
		
        items: [
            {
                xtype: 'fieldset',
                id: 'fieldset1FormLookup',
                title: 'Filtra ticket ...',
                instructions: 'selezionare ...',
				cls: 'note rounded',
                defaults: {
                    labelWidth: '35%'
                },
                items: [
				
					/*
					{
                        xtype: 'selectfield',
                        name : 'Autore',
                        label: 'Autore',
                        options: [
							{text: 'Tutti', value: ''},
							{text: 'Cristian Berardi', value: 'Cristian Berardi'},
							{text: 'Giovanni Fattori', value: 'Giovanni Fattori'},
							{text: 'Carlo Tanci', value: 'Carlo Tanci'},
                            {text: 'Ruggero Ruggeri', value: 'Ruggero Ruggeri'}
                        ]
                    },
					*/
					/*
					{
                        xtype: 'selectfield',
                        name : 'Stato_Ticket',
                        label: 'Stato_Ticket',
                        options: [
                            {text: 'Tutti',   value: ''},
                            {text: 'Aperto',  value: 'Aperto'},
                            {text: 'Risolto', value: 'Risolto'},
							{text: 'In corso di elaborazione',    value: 'In corso di elaborazione'}
                        ]
                    },
					*/
					{xtype : 'togglefield',name : 'toggle_risolti',label : 'risolti'},
					{xtype : 'togglefield',name : 'toggle_aperti',label : 'aperti'},
					{xtype : 'togglefield',name : 'toggle_incarico',label : 'in carico'}
		
		
                ]
            },
            {
                xtype: 'container',
                defaults: {
                    xtype: 'button',
                    style: 'margin: .5em',
                    flex : 1
                },
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
						xtype: 'button',
                        text: 'Filtra',
						ui : 'confirm',
						id: 'lookupBtnFormLookup'
                    },
					{
						xtype: 'button',
						ui : 'normal',
						text: 'Annulla',
						id: 'cancelBtnFormLookup'
					}
                ]
            }
        ]
    }
});

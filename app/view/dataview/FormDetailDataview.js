/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('MobileScoreBoard.view.dataview.FormDetailDataView', {
    extend: 'Ext.form.Panel',
	xtype: 'dataviewFormDetailDataView',
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
    id: 'FormDetail',
    config: {
        items: [
            {
                xtype: 'fieldset',
                id: 'fieldset1FormDetail',
                //title: 'Personal Info',
                //instructions: 'Please enter the information above.',
                defaults: {
                    labelWidth: '35%'
                },
                items: [
				    {
                        xtype         : 'textfield',
                        name          : 'ID',
                        label         : 'Ticket n.11',
                        placeHolder   : 'Tom Roy',
                        autoCapitalize: true,
                        required      : true,
                        clearIcon     : true
                    },
                    {
                        xtype         : 'textfield',
                        name          : 'Autore',
                        label         : 'Autore',
                        placeHolder   : 'Tom Roy',
                        autoCapitalize: true,
                        required      : false,
						disabled	  : true,
                        clearIcon     : false
                    },
					{
                        xtype         : 'textfield',
                        name          : 'Stato_Ticket',
                        label         : 'Stato ticket',
                        label         : 'Stato ticket',
                        placeHolder   : 'Tom Roy',
                        autoCapitalize: true,
                        required      : false,
                        clearIcon     : true
                    },
					{
                        xtype         : 'textfield',
                        name          : 'Priority',
                        label         : 'Priorit&agrave;',
                        placeHolder   : 'Tom Roy',
                        autoCapitalize: true,
                        required      : false,
                        clearIcon     : true
                    },					
					{
                        xtype: 'textareafield',
                        name : 'Descrizione',
                        label: 'Descrizione'
                    }
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
						ui : 'confirm',
						text: 'chiudi',
						id : 'closeBtnFormDetailDataView'
					}
					
					
                ]
            }
        ]
    }
});

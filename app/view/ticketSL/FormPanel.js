/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('MobileScoreBoard.view.ticketSL.FormPanel', {
    extend: 'Ext.form.Panel',
	xtype: 'ticketSLFormPanel',
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
    id: 'FormPanel',
    config: {
        items: [
            {
                xtype: 'fieldset',
                id: 'fieldset1FormPanel',
                title: 'Personal Info',
                instructions: 'Please enter the information above.',
                defaults: {
                    labelWidth: '35%'
                },
                items: [
				    {
                        xtype         : 'textfield',
                        name          : 'ID',
                        label         : 'Ticket n.',
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
                        required      : true,
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
                        text: 'Disable fields',
                        scope: this,
                        hasDisabled: false,
                        handler: function(btn){
                            var fieldset1 = Ext.getCmp('fieldset1'),
                                fieldset2 = Ext.getCmp('fieldset2');

                            if (btn.hasDisabled) {
                                fieldset1.enable();
                                fieldset2.enable();
                                btn.hasDisabled = false;
                                btn.setText('Disable fields');
                            } else {
                                fieldset1.disable();
                                fieldset2.disable();
                                btn.hasDisabled = true;
                                btn.setText('Enable fields');
                            }
                        }
                    },
                    {
                        text: 'Reset',
                        handler: function(){
                            Ext.getCmp('basicform').reset();
                        }
                    },
					{
						xtype: 'button',
						ui : 'confirm',
						text: 'chiudi'
					}
                ]
            }
        ]
    }
});

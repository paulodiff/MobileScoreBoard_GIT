Ext.define('MobileScoreBoard.view.login.LoginItem', {
    extend: 'Ext.form.Panel',
	//extend: 'Ext.Container',
    xtype: "loginItem",
	
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img'],
    config: {
        title: 'Login',
		//navigationBar: false,
		fullscreen: true,
		cls : 'css3darkbackgound',
		
		layout: {
            type: 'vbox',
            pack: 'top',
            align: 'center',
			cls : 'css3darkbackgound',
			padding: '5 5 5 5'
        },
        items: [
					{
                        xtype: 'label',
                        //html: '<h3>Mobile Ticket</h3>',
						
						html: 	"<div  class='note gray rounded'>"+
								"<div  class='h_container'>"+
								"<span class='h_span'>"+
								"<img  class='h_img' src='resources/images/logorn.ico' />"+
								"</span>"+
								"<p class='h_title'>Mobile Ticket</p>"+
								"</div>"+
								"</div>",
						
						
						
						//cls: 'note rounded front',
						//height : 50,
						width : '95%'
                        //style: 'color:#990000'
                    },

                    {
                        xtype: 'label',
                        html: 'Login failed. Please enter the correct credentials.',
                        itemId: 'signInFailedLabel',
                        hidden: true,
						width : '95%',
                        hideAnimation: 'fadeOut',
                        showAnimation: 'fadeIn',
						cls: 'note bgred rounded'
                        //style: 'color:#990000'
                    },
					{ /* fieldset - start */
							xtype: 'fieldset',
							layout: {
								pack: 'center'
							},
							title: 'Inserire utente e password',
							cls: 'note rounded my-centered front',
							width : '95%',
							items: [
									{
										xtype: 'textfield',
										placeHolder: 'Username',
										itemId: 'userNameTextField',
										name: 'userNameTextField',
										required: true
									},
									{
										xtype: 'passwordfield',
										placeHolder: 'Password',
										itemId: 'passwordTextField',
										name: 'passwordTextField',
										required: true
									}
							]
                    }, /* fieldset - end*/
                    {
                        xtype: 'button',
						margin : '5 5 5 5',
						padding: '20 20 20 20',
						width: '95%',
                        id: 'logInButton',
                        ui: 'action',
                        //padding: '10px',
                        text: 'Log In'
                    }
					/*,
					{   xtype: 'label', html: '<br/>' },
                    {
                        xtype: 'button',
                        id: 'resetAccountButton',
                        ui: 'action',
                        //padding: '10px',
                        text: 'Reset account'
                    },
					{   xtype: 'label', html: '<br/>' },
                    {
                        xtype: 'button',
                        ui: 'confirm',
                        //padding: '10px',
                        text: 'Lista Ticket',
						handler: function() {
								// When you tap this button, show the picker.
								console.log('BtnHandler: redirect to ... : showTicketList');
								MobileScoreBoard.app.redirectTo('showTicketList');
						}
                    },*/
					/*
					{  //toolbar start 
						xtype: 'toolbar',
						docked: 'bottom',
						layout: {
								pack: 'center'
						}, // layout
						//ui: 'plain',
						items: 
						[
							{
								xtype: 'button',
								id: 'logInButton',
								ui: 'action',
								//padding: '10px',
								width: '70%',
								text: 'Log In'
							}
							,
							{
								xtype: 'button',
								id: 'resetAccountButton',
								ui: 'action',
								//padding: '10px',
								width: '31%',
								text: 'Reset account'
							},
							{
								xtype: 'button',
								text: 'Lista ticket',
								ui: 'confirm',
								width: '31%',
								handler: function (btn, evt) {
									console.log('BtnHandler: redirect to ... : showTicketList');
									MobileScoreBoard.app.redirectTo('showTicketList');
								} // handler
							}
						] // items (toolbar)
					}  // toolbar end */
         ]
    },
	showSignInFailedMessage: function (message) {
        var label = this.down('#signInFailedLabel');
        label.setHtml('<p class="h_subtitle">'+message+'</p>');
        label.show();
    }

});

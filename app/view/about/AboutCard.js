Ext.define('MobileScoreBoard.view.about.AboutCard', {

	extend: 'Ext.Container',
	xtype: 'aboutCardContainer',
	
	onBackButtonTap:function(){
		this.callParent(arguments); 
		console.log('MobileScoreBoard.view.about.Card : onBackButtonTap');
		//alert('back button pressed');
	},
	
	config: {

		title: 'About',
        iconCls: 'time',
		layout: { type:'vbox', pack:'start', align:'center' },
		//navigationBar: true,
        autoDestroy: false,
		scrollable: true,
		width: '100%',
		cls: 'css3darkbackgound',
		//baseCls: 'note',

		items: [
			{
				xtype:'label',
				padding: '10 10 10 10',
				margin: '10 10 10 10',
				html: "<p class='h_subtitle'>Mobile ScoreBoard ....<br/>ZZZZ@ZZZZ.COM<br/>Sviluppato con:<br/>Sencha Touch Framework<br/>Phonegap Framework</p>",
				width: '90%',
				cls: 'note yellow rounded'
			},
			{
				xtype: 'button',
				text: 'test env',
				ui: 'action',
				padding: '10 10 10 10',
				margin: '10 10 10 10',
				width: '90%',
				handler: function() {
							//Ext.MessageBox('Title1', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);
							var msg = '';
							msg = ''; // + MobileScoreBoard.util.Config.isPhoneGap() + '<br/>';
							//msg = msg + '' + MobileScoreBoard.util.Config.getServiceUrl();
							//console.log(MobileScoreBoard.util.Config.isPhoneGap());
							//console.log(MobileScoreBoard.util.Config.getDemo());
							//console.log(MobileScoreBoard.util.Config.getDbName());
							//console.log(MobileScoreBoard.util.Config.getServiceURL());
							//console.log(MobileScoreBoard.util.Config.service_URL());
							msg = MobileScoreBoard.util.Config.service_URL();
							//Ext.Msg.alert('isPhonegap ' + MobileScoreBoard.util.Config.isPhoneGap()); 
							console.log(msg);
							//MobileScoreBoard.app.redirectTo('showAbout');
							MobileScoreBoard.util.Config.testEnvironment();
							Ext.Msg.alert(msg); 
                } 
			},
			{
				xtype: 'button',
				text: 'to Phonegap',
				ui: 'action',
				padding: '10 10 10 10',
				margin: '10 10 10 10',
				width: '90%',
				handler: function() {
							MobileScoreBoard.app.redirectTo('showPhonegap');
                } 
			},
			{
				xtype: 'button',
				text: 'test connection',
				ui: 'action',
				padding: '10 10 10 10',
				margin: '10 10 10 10',
				width: '90%',
				handler: function() {
					
					Ext.Ajax.request({
							url: MobileScoreBoard.util.Config.test_URL(),
							//url: 'http://127.0.0.1:8899/mt/test/ok2.txt',
							method: 'get',
							success: function (response) {
								console.log('TEST OK');
								console.log(response);
								Ext.Msg.alert('Test OK');
							},

							failure: function (response) {
								console.log('onLoginButton: LoginFailure');
								console.log(response);
								Ext.Msg.alert('Errore di connessione');
							}
					});	
				
					//Ext.MessageBox('Title1', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);
					var msg = '';
					msg = ''; // + MobileScoreBoard.util.Config.isPhoneGap() + '<br/>';
					//msg = msg + '' + MobileScoreBoard.util.Config.getServiceUrl();
							//console.log(MobileScoreBoard.util.Config.isPhoneGap());
							//console.log(MobileScoreBoard.util.Config.getDemo());
							//console.log(MobileScoreBoard.util.Config.getDbName());
							//console.log(MobileScoreBoard.util.Config.getServiceURL());
							//console.log(MobileScoreBoard.util.Config.service_URL());
							msg = MobileScoreBoard.util.Config.service_URL();
							//Ext.Msg.alert('isPhonegap ' + MobileScoreBoard.util.Config.isPhoneGap()); 
							console.log(msg);
							//MobileScoreBoard.app.redirectTo('showAbout');
							Ext.Msg.alert(msg); 
                } 
			},

			{
				xtype: 'button',
				text: 'to home',
				ui: 'action',
				padding: '10 10 10 10',
				margin: '10 10 10 10',
				width: '90%',
				handler: function() {
							//Ext.MessageBox('Title1', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);
							var msg = '';
							msg = ''; // + MobileScoreBoard.util.Config.isPhoneGap() + '<br/>';
							//msg = msg + '' + MobileScoreBoard.util.Config.getServiceUrl();
							//console.log(MobileScoreBoard.util.Config.isPhoneGap());
							//console.log(MobileScoreBoard.util.Config.getDemo());
							//console.log(MobileScoreBoard.util.Config.getDbName());
							//console.log(MobileScoreBoard.util.Config.getServiceURL());
							//console.log(MobileScoreBoard.util.Config.service_URL());
							//msg = MobileScoreBoard.util.Config.service_URL();
							//Ext.Msg.alert('isPhonegap ' + MobileScoreBoard.util.Config.isPhoneGap()); 
							//console.log(msg);
							MobileScoreBoard.app.redirectTo('showMain');
							//Ext.Msg.alert(msg); 
                } 
			},
			{
				xtype: 'button',
				text: 'to test list',
				ui: 'action',
				padding: '10 10 10 10',
				margin: '10 10 10 10',
				width: '90%',
				handler: function() {
							//Ext.MessageBox('Title1', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);
							var msg = '';
							msg = ''; // + MobileScoreBoard.util.Config.isPhoneGap() + '<br/>';
							//msg = msg + '' + MobileScoreBoard.util.Config.getServiceUrl();
							//console.log(MobileScoreBoard.util.Config.isPhoneGap());
							//console.log(MobileScoreBoard.util.Config.getDemo());
							//console.log(MobileScoreBoard.util.Config.getDbName());
							//console.log(MobileScoreBoard.util.Config.getServiceURL());
							//console.log(MobileScoreBoard.util.Config.service_URL());
							//msg = MobileScoreBoard.util.Config.service_URL();
							//Ext.Msg.alert('isPhonegap ' + MobileScoreBoard.util.Config.isPhoneGap()); 
							//console.log(msg);
							MobileScoreBoard.app.redirectTo('showTestList');
							//Ext.Msg.alert(msg); 
                } 
			}
			
		]
	}
	
	
	/* Menu handler...  
	
	doSetHidden: function(hidden) {
	
		console.log('doSetHidden 1...');
	
        this.callParent(arguments);

        if (hidden) {
            Ext.Viewport.removeMenu('left');
            Ext.Viewport.removeMenu('right');
            Ext.Viewport.removeMenu('bottom');
            Ext.Viewport.removeMenu('top');
        } else {
            Ext.Viewport.setMenu(this.menuForSide('top'), {
                side: 'top'
            });

            Ext.Viewport.setMenu(this.menuForSide('bottom'), {
                side: 'bottom',
                cover: false
            });

            Ext.Viewport.setMenu(this.menuForSide('left'), {
                side: 'left',
                reveal: true
            });

            Ext.Viewport.setMenu(this.menuForSide('right'), {
                side: 'right',
                reveal: true
            });
        }
    },
	
	*/
	
	/*
	
	initialize: function( a, eOpts ) {
		console.log('initialize .. .. ');
		
		var menu = Ext.create('Ext.Menu', {
			 items: [
				 {
					 text: 'Settings1',
					 iconCls: 'settings'
				 },
				 {
					 text: 'New Item1',
					 iconCls: 'compose'
				 },
				 {
					 text: 'Star1',
					 iconCls: 'star'
				 }
			 ]
		});
		
		Ext.Viewport.setMenu(menu, {
			side: 'left',
			reveal: true
		});
	}

	*/
	/*
	
	menuForSide: function(side) {
        var items = [
            {
                text: 'Settings',
                iconCls: 'settings',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                }
            },
            {
                text: 'New Item www',
                iconCls: 'compose',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                }
            },
            {
                xtype: 'button',
                text: 'Star',
                iconCls: 'star',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                }
            },
			            {
                xtype: 'button',
                text: 'Info',
                iconCls: 'time',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                }
            },
            {
                xtype: 'button',
                text: 'Home',
                iconCls: 'home',
                scope: this,
                handler: function() {
					//Ext.Viewport.add(Ext.create('MobileScoreBoard.view.Main'));
                    Ext.Viewport.hideMenu(side);
                }
            }
        ];

        var className = 'Ext.Menu';
        if (Ext.theme.name == "Blackberry") {
        	if (['top', 'bottom'].indexOf(side) != -1) {
    	       	className = 'Ext.ux.ApplicationMenu';
	        } else {
	        	className = 'Ext.ux.ContextMenu';
	        }
        }

        return Ext.create(className, {
            items: items
        });
    }

	*/
	
});

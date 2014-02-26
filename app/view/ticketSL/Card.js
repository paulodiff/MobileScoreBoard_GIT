Ext.define('MobileScoreBoard.view.ticketSL.Card', {

    extend: 'Ext.NavigationView',
    xtype: 'ticketSLCard',
	requires: ['Ext.Menu'],

	
    config: {

		animation : 'flip',
		autoDestroy: false,
		//navigationBar: true,		
		navigationBar: { hidden: true  }, /* nasconde la barra di navigazione */
	
		listeners : {
					initialize : function() {
						console.log('MobileScoreBoard.view.ticketSL.Card : initialize');
						console.log('MobileScoreBoard.view.ticketSL.Card : inizialize : store');
						console.log('MobileScoreBoard.view.ticketSL.Card : inizialize : store removeAll');
						Ext.getStore('TicketStore').removeAll();
						console.log('MobileScoreBoard.view.ticketSL.Card : inizialize : Store fire Refresh');
						Ext.getStore('TicketStore').fireEvent('refresh');
						console.log('MobileScoreBoard.view.ticketSL.Card : inizialize : Store load');
						Ext.getStore('TicketStore').load();
					},
					pop:  function() {console.log('ticketSL.Card : pop');},
					show: function() {
										console.log('ticketSL.Card : show');
										MobileScoreBoard.app.redirectTo('login');	
									 },
					hide: function() {console.log('ticketSL.Card : hide');},
					activeitemchange : function() {console.log('ticketSL.Card : activeitemchange');},
					push: function() {console.log('ticketSL.Card : push');}
		},
		
	
		tab: {
			title: 'Ticket List',
			iconCls: 'team',
			action: 'speakersTab'
		}, 
		
        items: [
			{
				docked: 'top',
				xtype: 'toolbar',
                //ui   : 'green',
                items: [
					{
						xtype: 'button',
                        iconCls: 'bookmarks',
						handler: function() {
							console.log('MobileScoreBoard.view.ticketSL.Card : Menu..1.. toogle left');
							Ext.Viewport.toggleMenu('left');
						} 
					},
					{
						xtype: 'button',
                        iconCls: 'search',
						id: 'btnSearchOnList' //apre il filtro di ricerca
					},
					{ xtype: 'spacer' },
                    {
                        xtype: 'title',
                        title: 'Lista Ticket'
                    }
                ]
			
			},
            {
                xtype: 'ticketSLList',
                store: 'TicketStore',
                grouped: false,
                pinHeaders: true
            }
        ]
    }, /*  config */
	
	
	/* Menu handler...  */
	
	doSetHidden: function(hidden) {
		console.log('MobileScoreBoard.view.ticketSL.Card: doSetHidden ...');
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
	
	
	
	menuForSide: function(side) {
        var items = [
            /*
			{
                text: 'Search',
                iconCls: 'search',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                }
            },
			*/
			/*
            {
                text: 'New Item',
                iconCls: 'compose',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                }
            },
			*/
			/*
            {
                xtype: 'button',
                text: 'Star',
                iconCls: 'star',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu(side);
				}
            },*/
            {
                xtype: 'button',
                text: 'Home',
                iconCls: 'home',
                scope: this,
                handler: function() {
					//Ext.Viewport.add(Ext.create('MobileScoreBoard.view.Main'));
					Ext.Viewport.hideMenu(side);
					console.log('MobileScoreBoard.view.ticketSL.Card: redirect to main');
					MobileScoreBoard.app.redirectTo('showMain');
                }
            },			
			{
                xtype: 'button',
                text: 'Setup',
                iconCls: 'settings',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu(side);
					console.log('MobileScoreBoard.view.ticketSL.Card: redirect to about');
					MobileScoreBoard.app.redirectTo('showAbout');
                }
            },
            {
                xtype: 'button',
                text: 'Login',
                iconCls: 'info',
                scope: this,
                handler: function() {
					//Ext.Viewport.add(Ext.create('MobileScoreBoard.view.Main'));
					Ext.Viewport.hideMenu(side);
					console.log('MobileScoreBoard.view.ticketSL.Card: redirect to login');
					MobileScoreBoard.app.redirectTo('showLogin');
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
});

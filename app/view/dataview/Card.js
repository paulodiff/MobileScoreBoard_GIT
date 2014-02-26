Ext.define('MobileScoreBoard.view.dataview.Card', {

    extend: 'Ext.NavigationView',
    xtype: 'dataviewCard',
	requires: ['Ext.Menu'],

	
    config: {

		animation : 'flip',
		autoDestroy: false,
		//navigationBar: true,		
		navigationBar: { hidden: true  }, /* nasconde la barra di navigazione */
	
		tab: {
			title: 'DW List',
			//iconCls: 'team',
			action: 'dataviewTab'
		}, 
		
        items: [
		
			{
				docked: 'top',
				xtype: 'toolbar',
                //ui   : 'green',
                items: [
					{
						xtype: 'button',
                        iconCls: 'settings'
					},
					{
						xtype: 'button',
                        iconCls: 'bookmarks',
						handler: function() {
							console.log('Menu..1..');
							Ext.Viewport.toggleMenu('left');
						} 
					},
					{ xtype: 'spacer' },
                    {
                        xtype: 'title',
                        title: 'Mobile Ticket'
                    },
                    { xtype: 'spacer' },
                    {
                        xtype: 'button',
                        iconCls: 'refresh',
						id: 'btnRefreshTicketForm'
                    }
                ]
			
			},
            {
                xtype: 'dataviewList',
                store: 'TicketStore',
                grouped: false,
                pinHeaders: true
            }
        ]
    }, /*  config */
	
	
	/* Menu handler...  */
	
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
                text: 'New Item',
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
	
	
	
});

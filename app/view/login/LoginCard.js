Ext.define('MobileScoreBoard.view.login.LoginCard', {

	extend: 'Ext.NavigationView',
	xtype: 'loginCardContainer',
	requires: ['Ext.Menu'],

	onBackButtonTap:function(){
		this.callParent(arguments); 
		//alert('back button pressed');
	},
	
	config: {

		title: 'LoginManager',
        //iconCls: 'time',
		navigationBar: false,
        autoDestroy: false,
		fullscreen: true,
		cls: 'css3darkbackgound',		
	

		items: [
			{
				xtype: 'loginItem'
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

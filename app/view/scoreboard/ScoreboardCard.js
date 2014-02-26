Ext.define('MobileScoreBoard.view.scoreboard.ScoreboardCard', {

	extend: 'Ext.Container',
	xtype: 'scoreboardCard',
	
	onBackButtonTap:function(){
		this.callParent(arguments); 
		console.log('MobileScoreBoard.view.about.Card : onBackButtonTap');
		//alert('back button pressed');
	},
	
	config: {

		title: 'scoreboardCard',
        iconCls: 'time',
		//layout: { type:'hbox', pack:'start', align:'center' },
		layout: { type:'vbox' },
		defaults: {
			flex: 1
        },
		//navigationBar: true,
        autoDestroy: false,
		//scrollable: false,
		//width: '100%',
		//cls: 'css3darkbackgound',
		fullscreen : true,
		//baseCls: 'note',

		items: 
		[
			//TOOLBAR - START
			{
				docked: 'top',
				xtype: 'toolbar',
                //ui   : 'green',
                items: [
                    { xtype: 'title', title: 'Msb' },
					{
						xtype: 'button',
                        iconCls: 'arrow_up',
						id : 'btnToolbarDirection',
						handler: function() {
							var me = this;
							console.log('btnToolbarDirection');
							console.log('STATUS:' + MobileScoreBoard.util.Config.getCounterDirection());
							console.log('IconClass:' + me.getIconCls());
							
							if (MobileScoreBoard.util.Config.getCounterDirection() == 'up'){
								MobileScoreBoard.util.Config.setCounterDirection('down');
								me.setIconCls('arrow_down');
							} else {
								me.setIconCls('arrow_up');
								MobileScoreBoard.util.Config.setCounterDirection('up');
							}
							console.log('STATUS:after:' + MobileScoreBoard.util.Config.getCounterDirection());
							console.log('IconClass:after:' + me.getIconCls());
						} 
					},
					{
						xtype: 'button',
                        text: '*I*',
						id : 'btnToolbarIncreaseText',
						handler: function() {
							MobileScoreBoard.util.Config.IncreaseButtonSize();
						}
					},
					{
						xtype: 'button',
                        text: '*D*',
						id : 'btnToolbarDecreaseText',
						handler: function() {
							MobileScoreBoard.util.Config.DecreaseButtonSize();
						}
					},
					{
						xtype: 'button',
                        text: '*RESET*',
						id : 'btnToolbarReset',
						handler: function() {
							Ext.getCmp('btnScore01').setText('0');
							Ext.getCmp('btnScore02').setText('0');
							Ext.getCmp('btnScore03').setText('0');
							Ext.getCmp('btnScore04').setText('0');
						}
					}
					
					
                ]
			
			},
			
			{ 	xtype : 'container',
				layout: { type:'vbox' },
				id : 'containerButton',
				defaults: { flex: 1 },
				items : [
	
			
			//TOOLBAR - END
			{	xtype: 'button', 
				text: '0', 
				id: 'btnScore01',
				cls: 'btnStyle',
				handler: function() {
					MobileScoreBoard.util.Config.IncreaseButtonScore('btnScore01');
                }
			},
			{
				xtype: 'button', 
				text: '0', 
				id: 'btnScore02',
				ui: 'action',
				cls: 'btnStyle',
				handler: function() {
					MobileScoreBoard.util.Config.IncreaseButtonScore('btnScore02');
                }
			},
			{
				xtype: 'button', 
				text: '0',
				id: 'btnScore03',
				ui: 'decline',
				cls: 'btnStyle',
				handler: function() {
					MobileScoreBoard.util.Config.IncreaseButtonScore('btnScore03');
                }
			},
			{	xtype: 'button', 
				text: '0',
				id: 'btnScore04',
				ui: 'confirm',
				cls: 'btnStyle',
				handler: function() {
					MobileScoreBoard.util.Config.IncreaseButtonScore('btnScore04');
                }
			}			
			
			]}
			
			
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

/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

/* Modifica per il PulltoRefresh  */
Ext.Loader.setPath({  
	'Ext': 'touch/src',  
    'Ext.ux.touch': 'ux/touch'  
});
/* -------------- PulltoRefresh */


/* Classi necessarie per la lettura dati e per la configurazione */
Ext.require('MobileScoreBoard.util.CustomReader');
Ext.require('MobileScoreBoard.util.Config');


Ext.application({
    name: 'MobileScoreBoard',
	
	twitterSearch: '#w2s',
	
	storeMaxId: 10000, // MobileScoreBoard.app.storeMaxId
	storeCurFilter: '', //MobileScoreBoard.app.storeCurFilter  remote filterded data ...
	login_isLoggedOn: false,
	login_Token: '', //MobileScoreBoard.app.login_Token 
	
	

    requires: [
        'Ext.MessageBox',
		'Ext.Label'
    ],

	models: [
        //'Speaker',
		//'Loan',
		'SessionModel',
		'TicketModel'
    ],
	
    views: [
	
        'main.MainCard',
		'main.MainItem',
		 
		'login.LoginCard',
		'login.LoginItem',
		
		//'dataview.CardDataView',
		//'dataview.FormDetailDataView',
		
		
		'about.AboutCard',
        'about.AboutItem',
     
		
		'phonegap.PhonegapCard',
		'phonegap.PhonegapVibrateCard',
		'phonegap.PhonegapPhotoCard',
		'phonegap.PhonegapInAppBrowserCard',
		

		'ticketSL.Login',
		'ticketSL.Card',
		'ticketSL.List',
		'ticketSL.Info',
		'ticketSL.FormPanel',
		'ticketSL.FormLookup',
		'ticketSL.FormDetail',
		'ticketSL.details.InfoDetail',
		'ticketSL.details.MainDetail',
		'test.TestCard',
		'test.TestList',
		
		// scoreBoard
		'scoreboard.ScoreboardCard'
		
    ],

    controllers: [
	   //'Speakers',
	   //'List3',
	   //'About',
	   //'Loans',
	   'ticketSL'
    ],

    stores: [
        //'Speakers',
		//'List3',
		//'Loans',
		'MTSessionStore',
		'TicketStore'
		//'TestStore'
    ],	
	
	
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
		Ext.fly('appMessageIndicator').destroy();

		// loading Data...
		
		/*
		MobileScoreBoard.util.Proxy.process('data/feed.js', function() {
            Ext.Viewport.add(Ext.create('MobileScoreBoard.view.Main'));
            //Ext.Viewport.setMasked(false);
        });
		*/
		
		
		//Ext.Viewport.add(Ext.create('MobileScoreBoard.view.FrontPage'));
		
        // Initialize the main view
        Ext.Viewport.add(Ext.create('MobileScoreBoard.view.main.MainCard'));
		//Ext.app.redirectTo('showMain');
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

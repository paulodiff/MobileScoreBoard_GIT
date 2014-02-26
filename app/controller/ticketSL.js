/* Controller for all application*/


Ext.define('MobileScoreBoard.controller.ticketSL', {
	extend: 'Ext.app.Controller',
	requires: ['Ext.MessageBox', 'Ext.ActionSheet', 'Ext.picker.Picker'], 

	config: {
		refs: {
			//cardDataViewMain: 'cardDataView',
			//cardDataView: 'cardDataView dataview',
			//dataviewFormDetailDataView: 'dataviewFormDetailDataView',
			ticketSLs: 'ticketSLCard ticketSLList',
			ticketSLCard : 'ticketSLCard',
			ticketSLInfo : 'ticketSLInfo',
			ticketSLFormPanel : 'ticketSLFormPanel',
			ticketSLFormLookup : 'ticketSLFormLookup',
			ticketSLFormDetail : 'ticketSLFormDetail',
			mtticketSLdetailsMainDetail : 'maindetailpanel',
			mtticketSLdetailsInfoDetail : 'infodetailpanel',
			aboutCard : 'aboutCardContainer',
			aboutCardItem : 'aboutCardContainer aboutItem',
			phonegapCard : 'phonegapCardContainer',
			//speaker: 'speakerContainer speaker',
			//speakerInfo: 'speakerContainer speakerInfo',
			//sessions: 'speakerContainer speaker list',
			//settingsButton: 'button[iconCls=settings]',  /* all buttons iconCls=settings*/
			
			infoButton : 'button[iconCls=time]',
			refreshButton: 'button[iconCls=refresh]',
			homeMenuButton: 'button[iconCls=home]',
			mainCard : 'mainCardContainer',
			mainCardItem :  'mainCardContainer mainItem', 
			//loginForm: 'loginForm',
			loginCard: 'loginCardContainer',
			loginCardItem: 'loginCardContainer loginItem', 
			signInFailedLabel: 'signInFailedLabel',
			//scoreBoardCard
			scoreboardCard: 'scoreboardCard',
			
			
			/* test List*/
			testCard : 'testCard',
			testList : 'testList' 
			
			
		},
		
		control: {
			homeMenuButton: {  tap: 'homeMenuButton' },
			infoButton: {  tap: 'onInfoButtonTap' },
			//settingsButton: { tap: 'onSettingsButtonTap' },
			//ticketSLs: { itemtap: 'onSpeakerTap' },
			ticketSLs: { itemtap: 'onTicketListTap' },
			sessions: {	itemtap: 'onSessionTap'	},
			
			'#lookupBtnFormLookup': { tap: 'onLookupTapFormLookup' },
			'#cancelBtnFormLookup': { tap: 'onCancelTapFormLookup' },
			'#closeBtnFormDetail':  { tap: 'onCloseBtnFormDetail'  },
			'#closeBtnFormDetailSetView':  { tap: 'onCloseBtnFormDetailSetView'  },
			'#closeBtnFormDetailDataView':  { tap: 'onCloseBtnFormDetailDataView'  },
			'#btnStartMobileTicket': { tap: 'onBtnStartMobileTicket'  },
			'#btnRefreshTicketForm': {tap: 'onRefreshButtonTap'    },
			
			'#logInButton' : {tap: 'onLoginButton'    },
			'#resetAccountButton' : {tap: 'onResetAccountButton'    },
			
			'#btnSearchOnList': {tap: 'onSettingsButtonTap'},
			'button[action=push-TicketSLCard]': { tap: 'onPushTicketSLCard'	},
			'button[action=menuBar-Star]': { tap: 'onPushStarInfoCard' },
			cardDataView: {
				//select: 'onCardDataViewSelect',
				itemswipe: 'onCardDataViewSwipe',
				itemtap: 'onCardDataViewTap'
			}
		},
		
// #### ------------------------------ routes ----------------------------------
		
		before: {
			showTicketList: 'isAuthenticated'
		},
		
		routes: {
            '': 'showMain',
			//'showLogin': 'showLogin',
			'showLogin': 'showScoreboard',
			//'showTicketList' : 'showTicketList',
			'showMain': 'showMain',
			'showAbout': 'showAbout',
			'showSettings': 'showSettings',
			'showPhonegap': 'showPhonegap',
			'showScoreboard': 'showScoreboard',
			'showTestList': 'showTestList'
        } 
	},
	
// #### ---------------------------- CONTROLLER AZIONI ROUTE---- 
	
	showScoreboard : function(){
		console.log('#showScoreBoard');
		if (!this.scoreboardCard) {
			this.scoreboardCard = Ext.widget('scoreboardCard');
		}
		//this.getMainCard().hide();
		//console.log('#showTicketList:hide Main');
		Ext.Viewport.setActiveItem(this.scoreboardCard);
		this.getScoreboardCard().show();
		
	},
	
	
	showTestList: function(){
		console.log('#showTestList');
		if (!this.testCard) {
			this.testCard = Ext.widget('testCard');
		}
		//this.getMainCard().hide();
		//console.log('#showTicketList:hide Main');
		Ext.Viewport.setActiveItem(this.testCard);
		this.getTestCard().show();
	},
	
	
	showAbout: function(){
		console.log('#showAbout');
		
		if (!this.aboutCard) {
			console.log('showAbout: ... creating aboutCard');
			this.aboutCard = Ext.widget('aboutCardContainer');
		}

		console.log('showAbout: Setting ... aboutCard...');
		Ext.Viewport.setActiveItem(this.getAboutCard());
		this.getAboutCard().show();
		console.log('#showAbout.');
		
	},

	showPhonegap: function(){
		console.log('#showPhonegap');
		
		if (!this.phonegapCard) {
			console.log('showPhonegap: ... creating phonegapCard');
			this.phonegapCard = Ext.widget('phonegapCardContainer');
		}

		console.log('showPhonegap: Setting ... phonegapCardContainer...');
		Ext.Viewport.setActiveItem(this.getPhonegapCard());
		this.getPhonegapCard().show();
		console.log('#showPhonegap.');
		
	},

	
	showInfo: function(){
		console.log('#showInfo');
	},
		
	showMain: function(){
		console.log('#showMain');
		//this.getTicketSLCard().hide();
		// get login data
		
		var MTSessionStoreDS = Ext.getStore("MTSessionStore");
		var index = MTSessionStoreDS.find('recordId','loginToken');

        if(index === -1){
            console.log('showMain: Logon NON eseguito ... ');
			//MobileScoreBoard.app.redirectTo('showLogin');
        }
        else{
			var logon_item = MTSessionStoreDS.getAt(index); 
            console.log('showMain: Logon già eseguito da:  ' + logon_item.data.username);
			console.log(logon_item);
			//action.resume()
        }
		
		if (!this.mainCard) {
			console.log('showMain: ... creating mainCardContainer');
			this.mainCard = Ext.widget('mainCardContainer');
		}
	
		console.log('showMain: Setting ... MainCard...');
		Ext.Viewport.removeMenu('left');
		Ext.Viewport.setActiveItem(this.mainCard);
		this.getMainCard().show();
		
		
		//console.log('showMain: Setting ... main label...');
		//var mainItem =  this.getMainCardItem();
		//mainItem.setMainMessageLabel('TEST MESSAGE');

		//this.getMainCard().setMainMessageLabel('TEST MESSAGE');
		//this.getMainCard().show();
	},
	
	showTicketList: function(){
	
		console.log('#showTicketList');
		if (!this.ticketSLCard) {
			this.ticketSLCard = Ext.widget('ticketSLCard');
		}
		//this.getMainCard().hide();
		console.log('#showTicketList:hide Main');
		Ext.Viewport.setActiveItem(this.ticketSLCard);
		this.getTicketSLCard().show();
		//this.getMainCard().setActiveItem(this.ticketSLCard);
		//Ext.Viewport.setActiveItem(Ext.getCmp('main'));
        //Ext.getCmp('runForm').hide(); 
	},
	
	showLogin: function(){
		console.log('#showLogin');
				
		if (!this.loginCard) {
			this.loginCard = Ext.widget('loginCardContainer');
		}
		Ext.Viewport.removeMenu('left');
		Ext.Viewport.setActiveItem(this.loginCard);
		this.getLoginCard().show();
		
		// set logon description
		
		console.log('showLogin: gettings..logon data');
		
		var MTSessionStoreDS = Ext.getStore("MTSessionStore");
		var index = MTSessionStoreDS.find('recordId','loginToken');
		var loginViewItem =  this.getLoginCardItem();
		
        if(index === -1){
            console.log('showLogin: Logon NON eseguito ... set message');
			loginViewItem.showSignInFailedMessage('Logon non ancora eseguito!');
			//MobileScoreBoard.app.redirectTo('showLogin');
        }
        else{
			var logon_item = MTSessionStoreDS.getAt(index); 
			loginViewItem.showSignInFailedMessage('Account configurato per : ' + logon_item.data.username);
            console.log('showLogin: Logon già eseguito ... set message');
			//console.log(logon_item);
			//action.resume()
        }

		//Ext.Viewport.add({ xtype: 'loginForm'});
		//Ext.MessageBox('Title', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);
		//Ext.Msg.alert('Title');
	},

	isAuthenticated: function(action){
		console.log('isAuthenticated: ?');
		// check per controllare se l'utente ha già effettuato l'autenticazione
		
		var MTSessionStoreDS = Ext.getStore("MTSessionStore");
		var index = MTSessionStoreDS.find('recordId','loginToken');

        if(index === -1){
            console.log('isAuthenticated: logon NON eseguito ... redirect to showLogin ');
			MobileScoreBoard.app.redirectTo('showLogin');
        }
        else{
			var logon_item = MTSessionStoreDS.getAt(index); 
            console.log('isAuthenticated: logon già eseguito ... per : ' + logon_item);
            console.log('isAuthenticated: action.resume');
			action.resume()
        }
	
	},
	
	/* ------------------- ROUTE FUNCTION ----------------------------- */

	onBtnStartMobileTicket: function(){
	
		//Ext.Msg.alert('Title');
		console.log('Controller ticketSL : onBtnStartMobileTicket : redirect to showTicketList');
		MobileScoreBoard.app.redirectTo('showTicketList');
	},

	
	// Elimina l'account
	onResetAccountButton: function(){
		var MTSessionStoreDS = Ext.getStore("MTSessionStore");
		var index = MTSessionStoreDS.find('recordId','loginToken');

        if(index === -1){
            console.log('Logon NON eseguito ... ');
			var loginViewItem =  this.getLoginCardItem();
			loginViewItem.showSignInFailedMessage('Account eliminato. Reinserire di dati di autenticazione');
			//MobileScoreBoard.app.redirectTo('showLogin');
        }
        else{
			MTSessionStoreDS.removeAt(index); 
			var loginViewItem =  this.getLoginCardItem();
			loginViewItem.showSignInFailedMessage('Account eliminato. Reinserire di dati di autenticazione');
            console.log('Account eliminato ... ');
        }
	
	},
	
	onLoginButton: function(){
		console.log('onLoginButton');
		
		console.log('onLoginButton: DEBUG SET LOGIN VALUES');
		this.getLoginCardItem().setValues(
			{
			userNameTextField: "*********", 
			passwordTextField: "*********"
			}
		);
		
		
		console.log('onLoginButton: getting from ... getLoginCardItem:');
		var formValues = this.getLoginCardItem().getValues();
		
		//console.log(this.getLoginForm());
		console.log(formValues);
		
		
		this.getLoginCard().setMasked({
			xtype: 'loadmask',
			message: 'Signing In...'
        });
		
		var message =  formValues + 'Errore di login riprovare con utente e password';
		var loginView = this.getLoginCard();
		var loginViewItem =  this.getLoginCardItem();

		MobileScoreBoard.app.login_isLoggedOn = false;
		MobileScoreBoard.app.login_Token = '';
		var login_token =  "D_PRO_RN/" + formValues.userNameTextField +  ":" + formValues.passwordTextField;
		
		
		console.log('onLoginButton:ajax call .... to: ' + MobileScoreBoard.util.Config.getServiceURL());
				
		Ext.Ajax.request({
            
			//url: 'http://federadati.provincia.rimini.it/mt/test/proxySP.php',
			url: MobileScoreBoard.util.Config.service_URL(),
			//url: MobileScoreBoard.app.serviceURL,
			//serviceURL : '/mt/test/proxySP.php',
            method: 'get',
            params: {
				csurl : 'http://example.com',
				login_token : login_token,
				$top : 1,
				$skip: 0
            },
			
            success: function (response) {
			
				loginView.setMasked(false);
				loginViewItem.showSignInFailedMessage('Account configurato : ' + formValues.userNameTextField);
				
				MobileScoreBoard.app.login_isLoggedOn = true;
				MobileScoreBoard.app.login_Token = "D_PRO_RN/" + formValues.userNameTextField +  ":" + formValues.passwordTextField;
				
				/* Session data save to storage */
				var MTSessionStoreDS = Ext.getStore("MTSessionStore");
				var sessionData = {
						uuid:'loginToken',
						id:'loginToken',
                        recordId:'loginToken',
                        timestamp:'00:00;00', //TODO
						token : "D_PRO_RN/" + formValues.userNameTextField +  ":" + formValues.passwordTextField,
                        username:formValues.userNameTextField,
                        password:formValues.passwordTextField
                    }
				MTSessionStoreDS.add(sessionData);
                MTSessionStoreDS.sync();
				
				console.log('onLoginButton: LoginSuccess route to Main ?');
				MobileScoreBoard.app.redirectTo('showTicketList');
				
			},

            failure: function (response) {
				console.log('onLoginButton: LoginFailure');
				console.log(response);
				loginView.setMasked(false);
		        loginViewItem.showSignInFailedMessage('Login errato ... riprovare.');
				MobileScoreBoard.app.login_isLoggedOn = false;
				MobileScoreBoard.app.login_Token = '';

                //me.sessionToken = null;
                //me.signInFailure('Login failed. Please try again later.');
            }
        });

	},
	
	onPushStarInfoCard : function(){
		console.log('onPushStarInfoCard');
		//this.getMainCard().setActiveItem(this.getTicketSLCard());
		//Ext.Viewport.setActiveItem({xtype: 'ticketSLCard'});
		//Ext.Viewport.add({xtype: 'ticketSLCard' });
	},
	
	
	
	homeMenuButton : function() {
		console.log('home menu');
		
		//this.getMainCard().setActive();
		
		/*
		if (!this.ticketHomePage) {
			this.mainCard = Ext.widget('mainCard');
		}
		//this.mainCard.config.title = 'Parametri ricerca ...'; //record.getFullName();
		
		//Ext.Viewport.animateActiveItem({xtype: 'Eligibelity'}, {type:'slide', direction: 'left'});
		this.getTicketSLCard().animateActiveItem(this.mainCard, {type:'flip', direction: 'left'});
		*/
	},

	onPushTicketSLCard : function(){
		console.log('onPushTicketSLCard');
		//this.getMainCard().setActiveItem(this.getTicketSLCard());
		
		
		if (!this.ticketSLFormLookup) {
			this.ticketSLFormLookup = Ext.widget('ticketSLFormLookup');
		}
		this.getFrontPage().animateActiveItem(this.ticketSLFormLookup, {type:'flip', direction: 'left'});
		
		
		//this.getFrontPage().setActiveItem(this.getTicketSLCard());
		//Ext.Viewport.setActiveItem({xtype: 'ticketSLCard'});
		//Ext.Viewport.add({xtype: 'ticketSLCard' });
	},
	
	onRefreshButtonTap : function(){
	    console.log('onRefreshButtonTap');
		
		var store = Ext.getStore('TicketStore');
        /*
		var hasValue = Boolean(this.getSearchField().getValue().length);
        if (!hasValue) {
            store.clearFilter();
        }
		*/
		store.clearFilter(true); 
		//store.filter('ID',117);
		//store.filter([{ property: 'ID', value: 117}]);
		//store.filter('Autore',/Ruggero Ruggeri/); OK!
		store.sort([{property : 'ID',direction: 'DESC'}]);
        //store.load();
		
		
		
	},
	
	onInfoButtonTap : function(){
		console.log('onInfoButtonTap');
		this.getMainCard().setActiveItem(this.getAboutContainer());
	},
	
	onSettingsButtonTap : function(){
		console.log('onSettingsButtonTap');
		if (!this.ticketSLFormLookup) {
			this.ticketSLFormLookup = Ext.widget('ticketSLFormLookup');
		}
		this.ticketSLFormLookup.config.title = 'Parametri ricerca ...'; //record.getFullName();
		this.getTicketSLCard().animateActiveItem(this.ticketSLFormLookup, {type:'flip', direction: 'left'});
	},
		
	onLookupTapFormLookup : function(){
		console.log('onLookupTapFormLookup:');
		
		var runFilter = [];
		//var obj = {};
		//obj[name] = val;
		//ary.push(obj);
		
		/*
		if (this.getTicketSLCard()) {
			this.getTicketSLCard().deselectAll();
			console.log(' -> deselectAll  <- ');
		} 
		*/
				
		console.log(Ext.getCmp('FormLookup').getValues());
		
		el = Ext.getCmp('FormLookup').getValues();
		
		/*
		
		Object {
			Autore: "Ruggero Ruggeri", 
			toggle_risolti: 0, 
			toggle_aperti: 0, 
			toggle_incorso: 1
		}
		
		*/

		console.log('onLookupTapFormLookup: build remote filter add data ');

		// reset counter and filter
		MobileScoreBoard.app.storeMaxId = 10000;
		MobileScoreBoard.app.storeCurFilter = ''; //MobileScoreBoard.app.storeCurFilter  remote filterded data ...
		
		var filter_to_build = '';
		
		if(el.toggle_risolti == 1){
			filter_to_build =  "( Status eq 'RIsolto' )";
		}
		if(el.toggle_aperti == 1){
			if (filter_to_build == '') { filter_to_build = " ( Status eq 'Aperto' )" }
			else { filter_to_build = filter_to_build + " or ( Status eq 'Aperto' )" }
		}
		if(el.toggle_incarico == 1){
			if (filter_to_build == '') { filter_to_build = " ( Status eq 'Preso in carico' )" }
			else { filter_to_build = filter_to_build + " or ( Status eq 'Preso in carico' )" }
		}
		
		MobileScoreBoard.app.storeCurFilter = filter_to_build;
		
		//store = Ext.getStore('TicketStore');
		//store.clearFilter(true);
		
		console.log('onLookupTapFormLookup : applyFilter :' + MobileScoreBoard.app.storeCurFilter);
		
		console.log('onLookupTapFormLookup:Start');
		MobileScoreBoard.app.storeMaxId = 10000;
		console.log('onLookupTapFormLookup:Store:RemoveAll');
		Ext.getStore('TicketStore').removeAll();
		console.log('onLookupTapFormLookup:Store:Refresh');
		Ext.getStore('TicketStore').fireEvent('refresh');
		console.log('onLookupTapFormLookup:Store:Load');
		Ext.getStore('TicketStore').load();
		
		
		
		
		//Ext.getStore('List3').filter(Ext.getCmp('FormLookup').getValues());
		//Ext.getStore('TicketStore').filter('ID',1);
		//store.filter([{property : 'Autore', value: 'Ruggero Ruggeri'}]);

		//store.filter(runFilter);
		this.getTicketSLCard().pop();
	},
	
	onCancelTapFormLookup : function(){
		console.log(' -> onCancelTapFormLookup  <- ');
		this.getTicketSLCard().pop();	
	},
	
	onCloseBtnFormDetail : function(){
		console.log(' -> onCloseBtnFormDetail  <- ');
		this.getTicketSLCard().pop();	
	},

	/* -------------------------------------------- DATA VIEW ACTIONS -----------*/

	onCloseBtnFormDetailDataView : function(){
		console.log('onCloseBtnFormDetailDataView****');
		/*
		if (!this.ticketSLFormDetail) {
			this.ticketSLFormDetail = Ext.widget('ticketSLFormDetail');
		}

		this.ticketSLFormDetail.config.title = 'Scheda intervento'; //record.getFullName();
		
		console.log('onCardDataViewTap1****');
		*/
		this.getDataviewFormDetailDataView().hide();
		this.getCardDataViewMain().show();
		
		//console.log('onCardDataViewTap2');
		//this.getTicketSLFormDetail().setRecord(record);
		//this.getTicketSLCard().pop();	
	},

/* ----------------- Nuova versione chiamata al dettaglio */
	onTicketListTap: function(list, idx, el, record) {
		console.log('onTicketListTap');
	    console.log('onTicketListTap : load mtticketSLdetailsMainDetail');
		//console.log(list);console.log(idx);console.log(el);console.log(record);
		if (!this.mtticketSLdetailsMainDetail) {
			this.mtticketSLdetailsMainDetail = Ext.widget('maindetailpanel');
		}
		this.mtticketSLdetailsMainDetail.config.title = 'Scheda intervento'; //record.getFullName();
		this.getTicketSLCard().push(this.mtticketSLdetailsMainDetail);
		console.log(record);
		this.getMtticketSLdetailsInfoDetail().setRecord(record);
		
	},


/* -------------------- Vecchia versione della chiamata al dettaglio*/
	onSpeakerTap: function(list, idx, el, record) {
		console.log('onSpeakerTap');
	
		console.log(list);
		console.log(idx);
		console.log(el);
		console.log(record);
	
		if (!this.ticketSLFormDetail) {
			this.ticketSLFormDetail = Ext.widget('ticketSLFormDetail');
		}

	
		if (!this.ticketSLFormDetail) {
			this.ticketSLFormDetail = Ext.widget('ticketSLFormDetail');
		}

		this.ticketSLFormDetail.config.title = 'Scheda intervento'; //record.getFullName();
		this.getTicketSLCard().push(this.ticketSLFormDetail);
		this.getTicketSLFormDetail().setRecord(record);
		
	},
	 
    /**
     * Called when a search is selected from the searchList. It sets the store of the flickrList to the flickrimages() store of the selected
     * search instance.
     */
	 
	 
	 
    onCardDataViewTap: function( t, index, target, record, e, eOpts ) {
        //var store = search.flickrimages();
        //this.getFlickrList().setStore(store);
        //store.load();
		console.log('onCardDataViewTap****');
		
		if (!this.dataviewFormDetailDataView) {
			this.dataviewFormDetailDataView = Ext.widget('dataviewFormDetailDataView');
		}

		this.dataviewFormDetailDataView.config.title = 'Scheda intervento'; //record.getFullName();
		
		console.log('onCardDataViewTap1****');
		this.getCardDataViewMain().setActiveItem(this.dataviewFormDetailDataView);
		
		console.log('onCardDataViewTap2');
		this.getDataviewFormDetailDataView().setRecord(record);
		this.getDataviewFormDetailDataView().show();
    },

    /**
     * Called when an item in the searchList is swiped.
     */
    onCardDataViewSwipe: function(t, index, target, record, e, eOpts) {
		
		console.log('onCardDataViewSwipe ... ');
		//console.log(index);
		//console.log(target);
		// determina il verso dello swipe
		//console.log(e);
		console.log(e.direction);
		var menu = Ext.create('Ext.Menu', {
			 items: [
				 {
					 text: 'Settings',
					 iconCls: 'settings'
				 },
				 {
					 text: 'New Item',
					 iconCls: 'compose'
				 },
				 {
					 text: 'Reload!',
					 iconCls: 'compose'
				 },
				 {
					 text: 'Star',
					 iconCls: 'star'
				 }
			 ]
		 });
		
		Ext.Viewport.setMenu(menu, {
			side: 'left',
			reveal: true
		});
		
		if (e.direction == 'left') {
			console.log('hideMenu');
			Ext.Viewport.hideMenu('left');
		} 
		
		if (e.direction == 'right'){
			console.log('showMenu');
			Ext.Viewport.showMenu('left');
		}
		
		

		
    }
	
	

});

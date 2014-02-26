// App.config.Config.getRelativeAjaxRedirect();
// code : MobileScoreBoard.util.Config.getRelativeAjaxRedirect();
// MobileScoreBoard.util.Config.getServiceURL()

Ext.define('MobileScoreBoard.util.Config', {
	singleton: true,
	
	config: {
		/*  DATABASE SETTINGS  */
		dbName: 'fbgmag',
		dbDescription: 'Footballguys Magazine',
		dbVersion: '1.00',
		dbSize: 5 * 1024 * 1024,
		// serviceURL : 'http://federadati.provincia.rimini.it/mt/test/proxySP.php',
		serviceURL : 'http://127.0.0.1:8899/mt/test/proxySP.php',
		/*   AJAX SETTINGS    */
		useAjaxRedirect: true,
		relativeAjaxRedirect: '../redirect.php',
		txtSize : 100,
		counterDirection : 'up',
		demo: function () { return 'ok'; }
	},
	
	service_URL : function () {
		console.log('MobileScoreBoard.util.Config.service_URL');
		if(this.isPhoneGap() || this.isWebAppRemote()){
			return 'http://federadati.provincia.rimini.it/mt/test/proxySP.php';
		}else{
			return 'http://127.0.0.1:8899/mt/test/proxySP.php';
		};
	},

	test_URL : function () {
		console.log('MobileScoreBoard.util.Config.test_URL');
		if(this.isPhoneGap() || this.isWebAppRemote()){
			return 'http://federadati.provincia.rimini.it/mt/test/ok.txt';

		}else{
			return 'http://127.0.0.1:8899/mt/test/ok.txt';
		};
	},

	
	constructor: function(config) {
		this.initConfig(config);
		return this;
	},
 
	// check if running in Phonegap or Cordova
	isPhoneGap : function () {
	
		console.log('MobileScoreBoard.util.Config.isPhoneGap');
	
		var b_cordova = true;
		var b_PhoneGap = true;
		var b_phonegap = true;
	
		if (typeof cordova === 'undefined') {
			b_cordova = false;
		}
		if (typeof PhoneGap === 'undefined') {
			b_PhoneGap = false;
		}
		if (typeof phonegap === 'undefined') {
			b_phonegap = false;
		}
	
		return (b_cordova || b_PhoneGap || b_phonegap) 
		&& /^file:\/{3}[^\/]/i.test(window.location.href) 
		&& /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
	},
 
 
	isWebApp: function() {
		if(document.URL.indexOf('http') != -1) {
		  return true;
		}
		return false;
	},
	
	isWebAppLocal: function() {
		if(document.URL.indexOf('http://127.0.0.1:8899') != -1) {
		  return true;
		}
		return false;
	},
	
	isWebAppRemote: function() {
		if(document.URL.indexOf('http://federadati.provincia.rimini.it') != -1) {
		  return true;
		}
		return false;
	},
	
	testEnvironment: function() {
		console.log('IsPhonegap :' + this.isPhoneGap());
		console.log('isWebAppLocal :' + this.isWebAppLocal());
		console.log('isWebAppRemote :' + this.isWebAppRemote());
		console.log(document.URL);
	},
	
	
	
	
	IncreaseButtonSize: function(size) {
	
		var fontPercentSize = MobileScoreBoard.util.Config.getTxtSize();
		fontPercentSize = fontPercentSize + 10;
		MobileScoreBoard.util.Config.setTxtSize(fontPercentSize);
	
		//var windowHeight = Ext.Viewport.getWindowHeight();
		//var fontSize = Math.round(0.095 * windowHeight).toString();
		var buttonsArray = Ext.ComponentQuery.query('#containerButton .button');
		Ext.Array.each(buttonsArray, function(item, index, allItems) {
				item.setStyle({'font-size': fontPercentSize + '%'});
				console.log(item.getText());
		});
	
	
		//var d = MobileScoreBoard.util.Config.getTxtSize();
		//MobileScoreBoard.util.Config.setTxtSize( d + 1);
		//console.log(MobileScoreBoard.util.Config.getTxtSize() + ' : ' + size);
	},
	
	
	DecreaseButtonSize: function(size) {
	
		var fontPercentSize = MobileScoreBoard.util.Config.getTxtSize();
		fontPercentSize = fontPercentSize - 10;
		MobileScoreBoard.util.Config.setTxtSize(fontPercentSize);
	
		//var windowHeight = Ext.Viewport.getWindowHeight();
		//var fontSize = Math.round(0.095 * windowHeight).toString();
		var buttonsArray = Ext.ComponentQuery.query('#containerButton .button');
		Ext.Array.each(buttonsArray, function(item, index, allItems) {
				item.setStyle({'font-size': fontPercentSize + '%'});
				console.log(item.getText());
		});
	
	},
	
	ResetButtonSize: function(size) {
		var fontPercentSize = MobileScoreBoard.util.Config.getTxtSize();
		fontPercentSize = 100;
		MobileScoreBoard.util.Config.setTxtSize(fontPercentSize);
		var buttonsArray = Ext.ComponentQuery.query('#containerButton .button');
		Ext.Array.each(buttonsArray, function(item, index, allItems) {
				item.setStyle({'font-size': fontPercentSize + '%'});
				console.log(item.getText());
		});
	},
	
	IncreaseButtonScore: function(btnId) {
		console.log('IncreaseButtonScore (' + btnId + ') : ' + MobileScoreBoard.util.Config.getCounterDirection());
		if (MobileScoreBoard.util.Config.getCounterDirection() == 'up'){
			var a = parseInt(Ext.getCmp(btnId).getText()) + 1;
		} else {
			var a = parseInt(Ext.getCmp(btnId).getText()) - 1;
		}
		Ext.getCmp(btnId).setText(a);
	},
	
	DescreaseButtonScore: function(btnId) {
		var a = parseInt(Ext.getCmp(btnId).getText()) + 1;
		Ext.getCmp(btnId).setText(a);
		//console.log(button);
		//console.log(button.getText());
		
	
		//var d = MobileScoreBoard.util.Config.getTxtSize();
		//MobileScoreBoard.util.Config.setTxtSize( d + 1);
		//console.log(MobileScoreBoard.util.Config.getTxtSize() + ' : ' + size);
	}	
	
	
	
   
});
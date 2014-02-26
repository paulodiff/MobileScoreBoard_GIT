Ext.define('MobileScoreBoard.controller.List3', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			title: 'tweets titlebar',
			sessionDayPicker: 'TicketList3 segmentedbutton',
			speakers: 'sessionContainer speakers',
			TicketInfo: 'TicketList3 TicketItem',
			TicketInfo2: 'TicketContainer TicketList3',
			TicketInfo3: 'TicketContainer TicketList3 list'
			
 
		},
		control: {
			tweets: {
				activate: 'onActivate'
			},
			sessionDayPicker: {
				toggle: 'onSessionDateChange'
			},
			TicketInfo: {
				itemtap: 'onTicketTap',
				select: 'onTicketTap' 
			},
			TicketInfo2: {
				itemtap: 'onTicketTap',
				select: 'onTicketTap'
			},
			TicketInfo3: {
				itemtap: 'onTicketTap',
				select: 'onTicketTap'
			}
		}
	},
	
	
	onTicketTap: function(list, idx, el, record) {
	
	
		console.log('onTicketTap');
		
		/*
	
		var speakerStore = Ext.getStore('SessionSpeakers'),
			speakerIds = record.get('speakerIds');

		speakerStore.clearFilter(true);
		speakerStore.filterBy(function(speaker) {
			return Ext.Array.contains(speakerIds, speaker.get('id'));
		});

		if (!this.session) {
			this.session = Ext.widget('session');
		}

		this.session.setTitle(record.get('title'));
		this.getSessionContainer().push(this.session);
		this.getSessionInfo().setRecord(record);
		
		*/
		
	}, 

	
	onSessionDateChange: function(seg, btn, toggle) {
		console.log(' onSessionDateChange ');
		//console.log(btn);
		//console.log(toggle);
		
        if (toggle) {
            this.filterByButton(btn);
        }
	},

	filterByButton: function(btn) {
		/*
		if (this.getSessionSpeakers()) {
			this.getSessionSpeakers().deselectAll();
		}
		*/
		
		console.log(' filter change ');
		//console.log(btn);
		
		Ext.getStore('List3').clearFilter(true);
		Ext.getStore('List3').filter(function(record) {
			//console.log(record.get('Stato_x0020_Ticket'));
			
			return record.get('Stato_x0020_Ticket') == btn.name;
		});
		
	},  
	
	
	onActivate: function() {
	
		console.log('onActivate....');
	
		if (!this.loadedTweets) {

			this.getTitle().setTitle(MobileScoreBoard.app.twitterSearch);


			/*Ext.getStore('Tweets').getProxy().setExtraParams({
				q: Oreilly.app.twitterSearch
			});*/
			
			Ext.getStore('List3').load();

			this.loadedTweets = true;
		}
	}

});

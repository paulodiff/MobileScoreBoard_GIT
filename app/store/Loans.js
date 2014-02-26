Ext.define('MobileScoreBoard.store.Loans', {
    extend: 'Ext.data.Store',

    config: {
        //model: 'MobileScoreBoard.model.Loan',
		model: 'MobileScoreBoard.model.TicketModel',
        autoLoad: true,
        remoteFilter: false // enable automatic filtering...
		
    }
});

Ext.define('MobileScoreBoard.view.ticket.Card', {

    extend: 'Ext.NavigationView',
    xtype: 'ticketContainer',

    config: {

	
        title: 'Ticket - lista',
        iconCls: 'time',
        autoDestroy: true,

        items: [
            {
                xtype: 'TicketList3',
                store: 'List3',
                grouped: false,
                pinHeaders: false
            }
        ]
    }
});

Ext.define('MobileScoreBoard.view.phonegap.PhonegapPhotoCard', {
	extend: 'Ext.Container',
	title : 'title main',
	xtype: 'phonegapPhotoCard',
	
	config: {
			scrollable : null,
			layout: 'vbox',
			fullscreen: false,
			cls: 'note',
			//width:'100%', 
			//height:'100%',
			layout: { type:'vbox', pack:'start', align:'center' },
			//tabBar : false,
			items : [
					{
						xtype: "image",
						src: "http://placehold.it/200x200",
						width: 200,
						height: 200
					},
					{
						xtype: "button",
						text: "Photo",
						padding: '10 10 10 10',
						margin: '10 10 10 10',
						handler: function() {
							function success(image_uri) {
								Ext.Msg.alert('success');
								var img = Ext.ComponentQuery.query("image")[0];
								img.setSrc(image_uri);
								Ext.Msg.alert('success');
							}

							function fail(message) {
								Ext.Msg.alert("Failed: " + message);
							}

							navigator.camera.getPicture(success, fail, 
								{
									quality: 50,
									destinationType: navigator.camera.DestinationType.FILE_URI,
									sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
								}
							);
						}
					}
					]
			
		}
}); 
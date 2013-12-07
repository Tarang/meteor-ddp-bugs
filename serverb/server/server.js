ddp_conn = DDP.connect("http://localhost:3000")

ddp_conn.subscribe("data");

Data = new Meteor.Collection("data", { connection: ddp_conn});

Meteor.publish("data", function() {
	

	//Uncomment to trigger Bug 1, sorting isn't too relevant to DDP but it is needed to use 'limit'

	//return Data.find({}, {sort: {number: -1}, limit: 3});

	return Data.find({});

});
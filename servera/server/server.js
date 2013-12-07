data = new Meteor.Collection("data");

data.allow({
    insert: function() { return true },
    update: function() { return true },
    remove: function() { return true }
});

Meteor.publish("data", function() {
    return data.find();
});

var seed = function() {
	if(data.find().count() !== 0) return;

	sets = [
		{text: "One", number: 1},
		{text: "Two", number: 2},
		{text: "Three", number: 3},
		{text: "Four", number: 4},
		{text: "Five", number: 5},
		{text: "Six", number: 7}	//Intentionally Incorrect (To test editing)
	]

	sets.forEach(function(point) {
		data.insert(point);
	});
}

Meteor.startup(seed);
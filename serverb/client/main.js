Data = new Meteor.Collection("data");

Meteor.subscribe('data');

Template.listOfNumbers.numbers = function() {

	return Data.find({});
}

Template.listOfNumbers.events({
	'click button': function () {
		var dataToUpdate = Data.findOne({text: 'Six'});
		Data.update({_id: dataToUpdate._id}, {$set: {number: 6}});
	}
});
var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';

    ///alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('DaysTillIntent');
    },

    'DaysTillIntent': function () {
        var str = daysTillLastJedi()
        this.emit(':tell', 'There are ' + str + ' days till Episode 8' );
    },

    'AMAZON.HelpIntent': function() {
      this.emit(':ask', 'Try asking how many days are left')
    },

    'AMAZON.StopIntent': function() {
        this.emit(':tell', 'may the force be with you');
    }
};

function daysTillLastJedi(){
    var sec = new Date(2017, 11, 15).valueOf() - Date.now()
    var days = sec / 1000 / 60 / 60 /24
    return String(Number(days.toFixed(0)))
}

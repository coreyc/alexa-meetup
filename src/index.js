require('dotenv').config();
const meetup = require('meetup-api')({
    key: process.env.MEETUP_API_KEY,
    oauth: {
        key: process.env.MEETUP_OAUTH_KEY,
        secret: process.env.MEETUP_OAUTH_SECRET
    }
});

const getOpenEvents = (city, state, country, topic, desc) => {
    meetup.getOpenEvents({
        city: city,
        state: state,
        country: country || 'US',
        topic: topic || null,
        desc: desc || null
    }, (err, events) => {
        if (err) console.log(err);
        else console.log(events.results.map((event) => {
            return {
                event: event.name,
                date: new Date(event.time).toString(),
                venue: event.venue.name,
                location: event.venue.city
            }
        }));
    });
}

module.exports = getOpenEvents;

require('dotenv').config();
const meetup = require('meetup-api')({
    key: process.env.MEETUP_API_KEY,
    oauth: {
        key: process.env.MEETUP_OAUTH_KEY,
        secret: process.env.MEETUP_OAUTH_SECRET
    }
});

meetup.getOpenEvents({
    city: 'Hartford',
    state: 'CT',
    country: 'US',
    topic: 'sports',
    desc: true
}, (err, events) => {
    if (err) console.log(err);
    else console.log(events);
});

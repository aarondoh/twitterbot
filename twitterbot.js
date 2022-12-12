// Load the required libraries and modules
const Twitter = require('twitter');
const secrets = require('./secrets');

// Create a new Twitter client
const client = new Twitter({
  consumer_key: secrets.consumerKey,
  consumer_secret: secrets.consumerSecret,
  access_token_key: secrets.accessToken,
  access_token_secret: secrets.accessTokenSecret
});

// Set the tweet that you want to reply to
const tweetId = '1234567890';
const replyText = 'This is a reply to the original tweet';

// Send the reply
client.post('statuses/update', {
  status: replyText,
  in_reply_to_status_id: tweetId
}, (error, tweet, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Reply sent: ${tweet.text}`);
  }
});

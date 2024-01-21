const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
  appKey: "1xa8Lii720zV9ZdxrOIPDzR3i",
  appSecret: "ngBOw6MBvqCNhsWKOPqOPgMHcqO1bDBtpPrNczxyx5BLHFoncD",
  accessToken: "1748954627150585856-KgzsKDApaY1jYYzgj8m0tVHpm6nCmr",
  accessSecret: "xiZtQLlzHiH3oXhzxPZs9TA32gzVtKBsuB2JCzqWzwrnx",
});

async function postTweet(tweetText) {
  try {
    const tweet = await client.v2.tweet(tweetText);
    console.log(`Tweet posted with ID ${tweet.data.id}`);
  } catch (error) {
    console.error(`Failed to post tweet: ${error}`);
  }
}

postTweet("Hello world! This is my first tweet with the Twitter API v2.");

//Create 3 variables to house a specific array, each containing tweets for each topic
//User selects their choice of topic
//Create an event listener for the submit button, that will grab the value of the selection's value
//Use math.random to randomly select a tweet from the chosen topic's array
//Display the tweet in a format that resembles an actual tweet

const viralTweets = {
    code: [
        {
            tweet: '1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
        {
            tweet: '2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
        {
            tweet: '3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
    ],
    politics: [
        {
            tweet: '4Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
        {
            tweet: '5Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
        {
            tweet: '6Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
    ],
    culture: [
        {
            tweet: '7Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
        {
            tweet: '8Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
        {
            tweet: '9Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
    ]
};

$(document).ready(function () {

//randomize function up here
function randomTweet(outputArray) {
    const shuffle = Math.floor(Math.random() * outputArray.length);
    return outputArray[shuffle];
}

$('form').on('submit', function(event) {
    event.preventDefault();
    console.log('intialize', event);

    const topic = $('input[name=topic]:checked').val();
    // console.log(topic);

    const selection = viralTweets[topic];
    // console.log(selection);

    //Display function down here
    const displayTweet = randomTweet(selection);
    console.log(displayTweet.tweet);

    $('.dynamic-tweet').html(`<p>${displayTweet.tweet}</p>`);
})

});


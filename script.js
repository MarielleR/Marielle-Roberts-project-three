//Create 3 variables to house a specific array, each containing tweets for each topic
//User selects their choice of topic
//Create an event listener for the submit button, that will grab the value of the selection's value
//Use math.random to randomly select a tweet from the chosen topic's array
//Display the tweet in a format that resembles an actual tweet

const viralTweets = {
    code: [
        {
            tweet: 'JUNIOR DEVELOPER WANTED: Must have all the experience of a senior developer, but be content with a tiny salary.'
        },
        {
            tweet: 'Want to travel back in time and fight yourself? Web development is the career for you!'
        },
        {
            tweet: 'After years of being a developer, it seems the answer to every coding question is: it depends...'
        },
    ],
    politics: [
        {
            tweet: 'How does one book a landscaping store as a venue?'
        },
        {
            tweet: 'Tried on an old jacket and it does not fit. I refuse to believe results. Clearly there has been widespread fraud.'
        },
        {
            tweet: 'Things that Election 2020 in the US and The Notebook have in common: mail that was not received, a white house, a lot of arguments, it is not over, it still is not over.'
        },
    ],
    culture: [
        {
            tweet: 'These cannot be the same men Dolly Parton begged Jolene not to take.'
        },
        {
            tweet: 'In Oceans 11 it was one persons job to give someone a suitcase and another persons job to do acrobatics inside a vault. WHY DID THEY GET THE SAME PAYOUT?'
        },
        {
            tweet: 'Millenials DO NOT have printers at home. Please stop asking us to print things.'
        },
    ]
};

$(document).ready(function () {

$("i").on('click', function(){
    $(this).css("color", "orangered");
});

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


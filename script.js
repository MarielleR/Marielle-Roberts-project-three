//Create 3 variables to house a specific array, each containing tweets for each topic
//User selects their choice of topic
//Create an event listener for the submit button, that will grab the value of the selection's value
//Use math.random to randomly select a tweet from the chosen topic's array
//Display the tweet in a format that resembles an actual tweet

const viralTweets = {
    code: [
        {
            tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
        {
            tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
        {
            tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
    ],
    politics: [
        {
            tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
        {
            tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
        {
            tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
    ],
    culture: [
        {
            tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
        {
            tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
        },
        {
            tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorum molestias nemo soluta iusto sunt quae illo aspernatur culpa doloribus!'
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

    const code = $('input[name=code]:checked').val();
    const politics = $$('input[name=politics]:checked').val();
    const culture = $('input[name=code]:checked').val();

    const selection = viralTweets[tweets];
    const output = [];

    for(let i = 0; i < selection.length; i++) {
        const tweetSelected = selection[i];

        if(tweetSelected.tweet === code || politics || culture) {
            output.push(tweetSelected);
        }
    }

    //Display function down here
    const displayTweet = randomTweet(output);
    
})

});


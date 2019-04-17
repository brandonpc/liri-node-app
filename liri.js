// LIRI - Spotify(songs), Bands in Town (concerts), OMDB (movies)


// require variables
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

// TO ACCESS KEYS/
var spotify = new Spotify(keys.spotify);


// Node command line variables (to, ya know, get it to WORK)
var userCommand = process.argv[2];
var userQuery = process.argv[3];

userOptions(userCommand);
// global variables



// 2nd parameter: , userQuery

// Commands: switch statement (start: catch each command (consolelog example to test(think frontend buttons: you start with "you clicked button 1!", then write js to have the button DO something)))

function userOptions(userCommand, userQuery) {
    //2nd parameter: , userQuery
    switch (userCommand) {
        case 'concert-this':
            spotifyThis(userQuery);
            // console.log(function);   ????
            console.log("here's the CONCERT you wanted!");
            break;
        case 'spotify-this-song':
            console.log("here's the SONG you wanted!");
            break;
        case 'movie-this':
            console.log("here's the MOVIE you wanted!");
            break;
        case 'do-what-it-says':
            console.log("I WROTE what you wanted!");
            break;
        default:
            console.log("Invalid command. Valid commands: concert-this | spotify-this-song | movie-this | do-what-it-says");
            break;
    }
}

// ___________________________________________________________________________________________________
// NOTE: Each command is a function, call the function with switch satement userOptions (ABOVE)
// ---------------------------------------------------------------------------------------------------
// **BEFORE START**: npm!!!!!! with each npm add the "require" for the module (ABOVE)
// ___________________________________________________________________________________________________
// ___________________________________________CODE BELOW______________________________________________
// concert-this
//               node liri.js concert-this <artist/band name>
//                   search the Bands in Town Artist Events API for an artist
//      (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`)
//                       Display: Name of venue, venue location, date of event (mm/dd/yyyy)
// --------------------------------------------------------------------------------------------------

// ___________________________________________________________________________________________________
// spotify-this-song
//               node liri.js spotify-this-song '<song name here>'
//                   use spotify npm to retrieve api info
//                       Display: Artist(s) , the song's name, A preview link of the song from Spotify, the album that the song is from
//                          (Default: "I'm Blue" by Eiffel 65)
// --------------------------------------------------------------------------------------------------
function spotifyThis(userQuery) {
    // NEED: Default search
    spotify.search({
                type: "track",
                query: userQuery
            },
            function (err, data) {
                if (err) {
                    console.log("Error: " + err);
                    return;
                }
                var songs = data.tracks.items;
                for (i = 0; i < data.tracks.items.length && i < 5; i++) {

                    var musicQuery = songs[i];
                    // console.log("---------------------------------");
                    // * Artist(s)
                    console.log("Artist: " + musicQuery.artists[0].name +
                        // * The song's name
                        "\nSong Name: " + musicQuery.name +
                        //* A preview link of the song from Spotify
                        "\nLink to Song: " + musicQuery.preview_url +
                        //* The album that the song is from
                        "\nAlbum Name: " + musicQuery.album.name +
                        "\n---------------------------------");
                }

            }
            // ___________________________________________________________________________________________________
            // movie-this
            //               node liri.js movie-this '<movie name here>'
            //                   axios: use 'trilogy' api key
            //                       Display: Artist(s) , the song's name, A preview link of the song from Spotify, the album that the song is from
            //                          (Default: "Mr. Nobody" | If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/> | It's on Netflix!)
            // --------------------------------------------------------------------------------------------------

            // ___________________________________________________________________________________________________
            // do-what-it-says
            //               node liri.js do-what-it-says
            //                  use: fs node package | run spotify-this-song (i want it that way)
            //                      (Play around with the other commands)
            // 
            // --------------------------------------------------------------------------------------------------

            // ___________________________________________________________________________________________________
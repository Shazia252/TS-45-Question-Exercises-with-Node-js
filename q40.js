// Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions with different value
var album1 = make_album("Shazia", "Album Title 1");
var album2 = make_album("Hassan", "Album Title 2");
// Printing the variables 
var album3 = make_album("Qasim", "Album Title 3", 10);
// Print the of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);

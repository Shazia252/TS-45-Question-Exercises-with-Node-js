// Define the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions with different value

let album1 = make_album("Shazia", "Album Title 1");
let album2 = make_album("Hassan", "Album Title 2");
// Printing the variables 
let album3 = make_album("Qasim", "Album Title 3", 10);
// Print the of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
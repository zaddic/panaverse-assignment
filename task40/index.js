function make_album(artist_name, album_title, number_of_traks) {
    if (number_of_traks == undefined) {
        return {
            artist_name: artist_name,
            album_title: album_title
        };
    }
    else {
        return {
            artist_name: artist_name,
            album_title: album_title,
            number_of_traks: number_of_traks
        };
    }
}
console.log(make_album('Some Artist', 'Some latest Album'));
console.log(make_album('Some Artist 1', 'Some latest Album 1'));
console.log(make_album('Some Artist 2', 'Some latest Album 2'));
console.log(make_album('Some Artist 2', 'Some latest Album 2', 8));

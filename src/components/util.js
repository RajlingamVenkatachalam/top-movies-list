export function sortMovies(movieList, keyName){
    if(keyName!==""){
        return movieList.sort((a,b) => a[keyName] - b[keyName]);
    }

    return movieList;
}
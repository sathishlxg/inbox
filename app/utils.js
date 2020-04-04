export function chunk(array, size) {
    var chunked_arr = [];
    var copied = [].concat(array);
    var numOfChild = Math.ceil(copied.length / size);

    for (let i = 0; i < numOfChild; i++) {
        chunked_arr.push(copied.splice(0, size));
    }

    return chunked_arr;
}

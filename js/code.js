let search = document.getElementById("search")
let char = document.getElementById("word")

search.addEventListener('click', () =>{
    let searched = document.getElementById("search").value;
    document.write(`Value was found at position: ${searched}`);
});

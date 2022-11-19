let search = document.getElementById("search")
let char = document.getElementById("char")

search.addEventListener("click", (e) =>{
    e.preventDefault();
    let searched = document.getElementById("sentence").value;

    // document.write(`Number of chars: ${searched.length}`)
    console.log(`Number of chars: ${searched.length}`);
    
});

char.addEventListener('click', (e) => {
    e.preventDefault();
    search= document.getElementById("sentence").value;
    let numberOfChar = document.getElementById("word").value;
    
    // document.write(`${numberOfChar} is at position: ${search.indexOf(numberOfChar)}`);
    console.log(`${numberOfChar} is at position: ${search.indexOf(numberOfChar)}`);
});
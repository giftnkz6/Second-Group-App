let search = document.getElementById("search")
let char = document.getElementById("char")

search.addEventListener("click", (e) =>{
    e.preventDefault();
    let searched = document.getElementById("sentence").value;
    console.log(`Number of chars: ${searched.length}`);
    document.getElementById("nSentence").innerHTML = `Number of chars: ${searched.length}`
    
});

char.addEventListener('click', (e) => {
    e.preventDefault();
    search= document.getElementById("sentence").value;
    let numberOfChar = document.getElementById("word").value;
    document.getElementById("nChars").innerHTML = `${numberOfChar} is at position: ${search.indexOf(numberOfChar)}`
});
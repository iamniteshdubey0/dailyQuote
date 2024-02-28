const api_url = `https://api.quotable.io/quotes/random?`;
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const tagsList = document.querySelector('.quote-tags');
let tag = "";


async function getQuote(){

    if (tag.length > 0){
        const response = await fetch(api_url+`tags=${tag}`);
        let data = await response.json();
        
        quote.innerText = data[0].content;
        author.innerText = "--" + data[0].author;
    } else {
        quote.innerText = "Please select a quote tag";
    }
    
}


tagsList.addEventListener("click", (event) => {
    if (event.target.classList.contains('quote-tag-btn')){
        tag = event.target.innerText;
        event.target.classList.toggle('active-tag');
    }
    console.log(tag);
})


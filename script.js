const accesskey = "PSaItLA_PZt1djUPOSwGpSqf3Lw5Y6QwIHL7mV8s-DQ";

const formE1 = document.querySelector("form");
const input1 = document.getElementById("search");
const searchResult = document.querySelector(".container");
const showMore = document.getElementById("showmore-btn");

let inputData = "";
let page = 1;

async function searchImages () {
inputData = input1.value;
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

const response = await fetch(url)
const data = await response.json();
const results = data.results;

if (page === 1) {
    searchResult.innerHTML = "";


}
results.map((result)=>{
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("container-image");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";
    imagelink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imagelink);
    searchResult.appendChild(imageWrapper);
});
page++;
if (page > 1){
    showMore.style.display = "block";
}
}
formE1.addEventListener("submit", (event)=>{
    event.preventDefault()
    page = 1;
    searchImages();
});

showMore.addEventListener("click", ()=>{
     searchImages();
});
// grabbing the elements once so we don't have to keep searching the DOM
const urlInput = document.getElementById("urlInput");
const searchBtn = document.getElementById("searchButton");
const iframeWindow = document.getElementById("iframeWindow");

// let them hit enter without the drama
urlInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        searchBtn.click();
    }
});

searchBtn.onclick = (e) => {
    e.preventDefault();

    let inputVal = urlInput.value.trim();
    if (!inputVal) return; // don't go nowhere if the input is empty lol

    let finalUrl;

    // if there's no dot, it's a vibe check (google search)
    if (!inputVal.includes(".")) {
        finalUrl = `https://www.google.com/search?q=${encodeURIComponent(inputVal)}`;
    } else {
        // if they forgot the protocol, we got them covered 🛡️
        finalUrl = inputVal.match(/^https?:\/\//) ? inputVal : `https://${inputVal}`;
    }

    // sending it through the ultraviolet portal 🌌
    console.log(`🚀 blasting off to: ${finalUrl}`);
    iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(finalUrl);
};

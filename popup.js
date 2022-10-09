/// activate this js when open popup

async function getCurrentTab(){
    let queryOptions = {active: true, currentWindow: true};
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

document.addEventListener("DOMContentLoaded",() => {
    alert('loaded');
});
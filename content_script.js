(() => {
    alert("Me extension!")

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {type, anything} = obj;

        if(type === "NEW"){
            alert("Received");
            chrome.runtime.getURL("assets/default.png");

            chrome.storage.sync.set({
                [anything]: JSON.stringify(obj)
            });
            
            chrome.storage.sync.get([anything],(obj) => {
                JSON.stringify(obj)
            });
        }
    });
})();
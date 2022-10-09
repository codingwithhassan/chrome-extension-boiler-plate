chrome.tabs.onUpdated.addListener((tabId, worker) => {
    
    console.log("Service Worker:",worker)
    if (worker.status === 'complete') {

        chrome.tabs.get(tabId)
        .then( (tab) => {
            console.log(`${tab.url} right? `);
            if (tab.url && tab.url.includes("127.0.0.1:8000/admin")) {
                chrome.tabs.sendMessage(tabId, {
                    type: "NEW",
                    anything: "anything"
                });
                console.log("Message Sent!")
            }
        })
        .catch(e => console.error(e));

    }

});
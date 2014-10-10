(function() {
    console.log("Starting Jobs");
    chrome.storage.sync.get({
        settings : {
            'removeAd' : true,
            'spamList' : []
        }
    }, function(item) {
        var settings = item.settings;
        if (settings.removeAd) {
            // TODO
            console.log("removeAd");
        };
        for (var i = 0; i < settings.spamList.length; i++) {
            console.log(settings.spamList[i]);
        }
    });
})()

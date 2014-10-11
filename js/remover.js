setTimeout(function() {
    function removeFloor(spam) {
        $(".l_post").each(function() {
            if ($(this).text().indexOf(spam) >= 0) {
                console.log("spam found");
                $(this).remove();
            };
        });
    };

    console.log("Starting Jobs");
    chrome.storage.sync.get({
        settings : {
            'removeAd' : true,
            'spamList' : []
        }
    }, function(item) {
        console.log('settings loaded');
        var settings = item.settings;
        console.log(settings);
        if (settings.removeAd) {
            $("#j_ten_years").remove();
            $(".BAIDU_CLB_AD").remove();
            $(".spreadad").remove();
            $(".banner_post").remove();
            $(".dasense").remove();
            $(".per_list").remove();
            $(".dasense").remove();
            $(".u9_head").remove();
        };
        console.log("spam removing start");
        for (var i = 0; i < settings.spamList.length; i++) {
            console.log(settings.spamList[i]);
            removeFloor(settings.spamList[i]);
        }
    });
}, 1000);

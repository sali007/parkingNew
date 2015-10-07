define('request', [
    'http',
    'log',
    ]
    , function(http, log) {

        function start(url, data, contentType, auth, header) {

            log(header);
            log(url);
            log(data);
            var response = http.request(http.POST,
                "http://crypto.qiwi.com:8080/crypto/https/",
                                        data,
                                        contentType,
                                        auth,
                                        header);
            return response;
        }


        return {
            start : start
        }

    });
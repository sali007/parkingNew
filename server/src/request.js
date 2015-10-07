define('request', [
    'http',
    'log',
    'config'
    ]
    , function(http, log, config) {

        var url = config.get('url'),
            proxy = config.get('proxy'),
            auth = config.get('auth'),
            contentType = "application/json";

        function init(data) {

            log(data);
            var response = http.request({
                    method : http.POST,
                    url : proxy,
                    data : JSON.stringify(data),
                    contentType : contentType,
                    auth : auth,
                    header : {
                             "crypto-https-proxy-target": url + config.get('initPath'),
                             "crypto-https-proxy-host-name-verifier": "allow-all"
                     }
            }, true
            );

            log(response);
            return response;
        }

        function vehicleTypes() {

          var r =  http.request({
              method : http.GET,
              url : proxy,
              header : {
                  "crypto-https-proxy-target" : url + config.get('initPath'),
                  "crypto-https-proxy-host-name-verifier" : "allow-all"
              }
          })

            //log(r);
        }


        return {
            init : init,
            vehicleTypes : vehicleTypes
        }

    });
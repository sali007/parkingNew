define('parking', [
    'log',
    'request',
    'state',
    'config',
    'util',
    ], function(log, request, state, config, util) {



        function init(op, conf) {

            var contentType = 'application/json';
            var url = config.get('url') + config.get('initPath');
            var cryptoUrl = config.get('cryptoUrl');

            var  auth = config.get('auth');
            var method = "POST";

            var header = {
                "crypto-https-proxy-target": "https://parking.fitdev.ru/qiwi/payment/init",
                "crypto-https-proxy-host-name-verifier": "allow-all"
            };


            var data = prepareData(op, 'balance');

            log(op);
         var response = request.start(
                cryptoUrl,
                data,
                contentType,
                auth,
                header);

        }

        function prepareData(op, reqType) {

            var d = {};

            d.zoneNumber = op.extra.zoneNumber;
            d.vrp = op.extra.vrp;
            d.duration = op.extra.duration;
            d.vehicleType = op.extra.vehicleType;

            if(reqType == 'start') {
                d.phone = op.account;
                d.sum = op.amount;
                d.paymentId = op.id;
            }

            return d;
        }

        function parseResponse(response) {
            return response.userMessage;
        }

        return {

            init : init

        }
    });
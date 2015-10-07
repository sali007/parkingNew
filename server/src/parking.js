define('parking', [
       'log',
       'request',
       'state',
       'util'
    ], function(log, request, state, config, util) {



        function init(op, conf) {

            var data = prepareData(op, 'balance');

            //log(op);

            var response = request.init(data);
        }

        function getVehicleType() {

           request.vehicleTypes();

        }

        function prepareData(op, reqType) {

            var d = {};
            d.phone = op.walletPhone;
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

            init : init,
            getVehicleTypes : getVehicleType

        }
    });
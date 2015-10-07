define('app', [
    'log',
    'wallet',
    'parking',
    'sinap',
    'util'

], function(log, wallet, parking, sinap, util) {

    wallet.dealer({
        check: function(pay, conf, meta) {

           var resp = parking.init(pay, conf);
           //return new Error(resp);

        }
        //auth: returnSuccess,
        //pay: returnSuccess
    });



    sinap.context('check', function(fields, local) {

    })


});
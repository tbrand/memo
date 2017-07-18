'use strict';

var noble = require('noble');
var knownDevices = [];
var counter = 0;

if (noble.state === 'poweredOn') {
    start()
} else {
    noble.on('stateChange', start);
}

function start () {
    console.log('スキャン開始...');

    noble.startScanning();
    noble.on('discover', function(peripheral) {
	//if(peripheral.advertisement.localName == 'Mambo_544636'){
	console.log('デバイス: ' + peripheral.advertisement.localName)
	console.log('UUID: ' + peripheral.uuid);
	//}
    });
}

const fs  = require('fs')

const debug = false

exports.getInfo = (pciIds) => {
  let result = {}
  const data = getPciIdsByString(pciIds)

  const vendorId = data.vendor.toLowerCase()
  const deviceId = data.device.toLowerCase()
  const deviceSubsysId = data.device_subsys.toLowerCase()
  const manufacturerId = data.manufacturer.toLowerCase()

  fs.readFileSync(__dirname + '/pci.ids').toString().split('\n').forEach(function (line) {
    if (line.substr(0, 4) === vendorId) {
      if(debug === true) {
        console.log('--- vendorId: ' + format(line.substr(4 + 2)))
      }
      result.vendorId = format(line.substr(4+2))
    }
    else if (line.substr(0, 5) === '\t' + deviceId) {
      if(debug === true) {
        console.log('--- deviceId: ' + format(line.substr(5 + 2)))
      }
      result.deviceId = format(line.substr(5+2))
    }
    else if (line.substr(0, 11) === '\t\t' + deviceSubsysId) {
      if(debug === true) {
        console.log('--- deviceSubsysId: ' + format(line.substr(11 + 2)))
      }
      result.deviceSubsysId = format(line.substr(11+2))
    }
    else if (line.substr(0, 4) === manufacturerId) {
      if(debug === true) {
        console.log('--- manufacturerId: ' + format(line.substr(4 + 2)))
      }
      result.manufacturerId = format(line.substr(4+2))
    }
  });
  return result;
}

function getPciIdsByString(value) {
  const splitA = value.split('&')
  return {
    vendor: splitA[0].substr(-4),
    device: splitA[1].substr(-4),
    device_subsys: splitA[2].substr(-4) + ' ' + splitA[2].substr(-8, 4),
    manufacturer: splitA[2].substr(-4)
  };
}

function format(value) {
  if(value.indexOf('Advanced Micro Devices') > -1) {
    return 'AMD'
  }
  else if(value.indexOf('Micro-Star International') > -1) {
    return 'MSI'
  }
  else if(value.indexOf('NVIDIA Corporation') > -1) {
    return 'NVIDIA'
  }
  return value
}

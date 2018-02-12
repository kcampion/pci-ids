# pci-ids

A nodejs library to parse the PCI IDs database file and make its contents available.
See [The PCI ID Repository](https://pci-ids.ucw.cz/) for details.

## Installation

```
$ npm install pci-ids
```

## Example

```javascript
const pciIds = require('pci-ids')

console.log(pciIds.getInfo('PCI\VEN_1002&DEV_67DF&SUBSYS_E3661DA2&REV_E7\6&2527380&0&002000E9'))
```
### Output
```javascript
{
  vendorId: 'AMD',
  deviceId: 'Ellesmere [Radeon RX 470/480/570/580]',
  deviceSubsysId: 'Radeon RX 570',
  manufacturerId: 'Sapphire Technology Limited'
}
```

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)


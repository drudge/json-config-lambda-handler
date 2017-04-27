json-config-lambda-handler
==========================

```js
const encryptedConfigHandler = require('json-config-lambda-handler');

function handleEvent({ evt , ctx, config }, cb) {
  console.log('evt = ', evt);
  console.log('config = ', config);
  cb();
}

exports.handle = encryptedConfigHandler(handleEvent);
```

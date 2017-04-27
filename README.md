json-config-lambda-handler
==========================

```js
const withConfig = require('json-config-lambda-handler');

function handleEvent({ evt , ctx, config }, cb) {
  console.log('evt = ', evt);
  console.log('config = ', config);
  cb();
}

exports.handle = withConfig(handleEvent);
```

# module.exports(handler)

* `handler` <[Function]> called when the handler is invoked
  * `args` <[Object]>
    * `evt` <[Object]> AWS Lambda uses this parameter to pass in event data to the handler
    * `ctx` <[Context Object]> AWS Lambda context object
    * `config` <[Object]> parsed JSON configuration
  * `callback` <[Function]> invoke to return info back to caller
    * `error` <[Error]> an optional parameter that you can use to provide results of the failed Lambda function execution. When a Lambda function succeeds, you can pass null as the first parameter.
    * `result` <[Mixed]> an optional parameter that you can use to provide the result of a successful function execution. The result provided must be JSON.stringify compatible. If an error is provided, this parameter is ignored.

# module.exports(environmentVariable, handler)
* `environmentVariable` <[String]> an optional parameter containing environment variable name used to store the configuration. If not used, a default value of `CONFIG` is used.
* `handler` <[Function]> called when the handler is invoked
  * `args` <[Object]>
    * `evt` <[Object]> AWS Lambda uses this parameter to pass in event data to the handler
    * `ctx` <[Context Object]> AWS Lambda context object
    * `config` <[Object]> parsed JSON configuration
  * `callback` <[Function]> invoke to return info back to caller
    * `error` <[Error]> an optional parameter that you can use to provide results of the failed Lambda function execution. When a Lambda function succeeds, you can pass null as the first parameter.
    * `result` <[Mixed]> an optional parameter that you can use to provide the result of a successful function execution. The result provided must be JSON.stringify compatible. If an error is provided, this parameter is ignored.

[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[Context Object]: http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
const { Stack, CfnOutput } = require('aws-cdk-lib');

// Import the Lambda module
const lambda = require('aws-cdk-lib/aws-lambda');

class InfraStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // Lambda function resource
    const myFunction = new lambda.Function(this, 'RunLambda', {
      runtime: lambda.Runtime.NODEJS_20_X, // Provide any supported Node.js runtime
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        exports.handler = async function(event) {
          return {
            statusCode: 200,
            body: JSON.stringify('Hello World!'),
          };
        };
      `),
    });

    // Define a CloudFormation output for the function's ARN
    new CfnOutput(this, "myFunctionArn", {
      value: myFunction.functionArn,
    })
  }
}

module.exports = { InfraStack }

# RunLambda

A boto3 python program to test out invoking Lambda functions from your local machine with code to create the Lambda function beforehand with the AWS CDK

The project structure is split into two, the app folder and the infra folder which was created using this template `cdk init app --language javascript`

## Quick start guide

<details>
  <summary>infra</summary>

  You will need the AWS SDK for this which can be installed with `npm install -g aws-cdk`

  I'm using the aws-cli-v2 to be able to run `aws configure sso` and `aws sso login --profile filip`, more info can be seen here: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html
  
  Before bootstrapping you should either set some environment variables

  ```
  export CDK_DEFAULT_ACCOUNT=$(aws sts get-caller-identity --profile filip --query "Account" --output text)
  export CDK_DEFAULT_REGION=$(aws configure get region --profile filip)
  cdk bootstrap
  ```

  Or include the profile in the command `cdk bootstrap --profile filip`

  You can use `cdk synth` to synthesize the CloudFormation template in advance

  To deploy the stack run `cdk deploy` and to destroy it run `cdk destroy`

  Here are some useful commands

  * `npm run test`         perform the jest unit tests
  * `npx cdk deploy`       deploy this stack to your default AWS account/region
  * `npx cdk diff`         compare deployed stack with current state
  * `npx cdk synth`        emits the synthesized CloudFormation template
</details>

<details>
  <summary>app</summary>
  You will need Python3 to run this program, boto3 is the only other dependency needed

  You can install it with `pip install boto3`, I put in a requirements.txt file so you can run `pip install -r requirements.txt` as well

  Then you can invoke the lambda remotely with `RunLambda.py [-h] [-a] lambdaArn [input]`, more info is available by passing the `-h` or `--help` flags
</details>

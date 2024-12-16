#!/usr/bin/python3

# Program to invoke lambda functions on AWS
# usage: RunLambda.py [-h] [-a] lambdaArn [input]

# positional arguments:
#  lambdaArn    arn of the Lambda function to run
#  input        JSON input to the Lambda function

# options:
#  -h, --help   show this help message and exit
#  -a, --async  Use RequestResponse invocation type

import argparse
import boto3

args = argparse.ArgumentParser('RunLambda.py')

args.add_argument(
  '-a', '--async',
  action='store_true',
  help='Use RequestResponse invocation type'
)

args.add_argument(
  'lambdaArn',
  type=str,
  help='arn of the Lambda function to run'
)

args.add_argument(
  'input',
  nargs='?',
  default='{}',
  type=str,
  help='JSON input to the Lambda function'
)

args = args.parse_args()
client = boto3.client('lambda')

print(client.invoke(
  FunctionName=args.lambdaArn,
  InvocationType='RequestResponse' if args.__getattribute__('async') else 'Event',
  Payload=args.input
))

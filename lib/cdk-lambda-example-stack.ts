import { PolicyStatement } from '@aws-cdk/aws-iam';
import * as lambda from '@aws-cdk/aws-lambda';
import { Code, Runtime } from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';

export class CdkLambdaExampleStack extends cdk.Stack {

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define our Lambda, with the 'code' referencing out minified lambda folder.
    const exampleLambda = new lambda.Function(this, 'ExampleLambda', {
      code: Code.fromAsset(`dist/example_lambda`),
      handler: 'main.handler',
      runtime: Runtime.NODEJS_12_X,
    });

    exampleLambda.addToRolePolicy(new PolicyStatement(
      {
        actions: ['ec2:DescribeInstances'],
        resources: ['*']
      })
    )
  }
}

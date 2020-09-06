#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkLambdaExampleStack } from '../lib/cdk-lambda-example-stack';

const app = new cdk.App();
new CdkLambdaExampleStack(app, 'CdkLambdaExampleStack');

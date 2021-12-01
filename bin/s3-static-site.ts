#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { S3StaticSiteStack } from '../lib/s3-static-site-stack';

const app = new cdk.App();
new S3StaticSiteStack(app, 'S3StaticSiteStack', {
    websiteFolder: 'website'
});

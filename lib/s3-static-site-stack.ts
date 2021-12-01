import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3_deploy from '@aws-cdk/aws-s3-deployment';


interface BucketConfig {
  indexDocument: string;
  errorDocument: string;
  publicReadAccess: boolean;
}

const bucketName = 'LearningCDKPatternsBucket';

export class S3StaticSiteStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucketConf: BucketConfig = {
      indexDocument: 'index.html',
      errorDocument: 'error.html',
      publicReadAccess: true
    }

    const bucket = new s3.Bucket(this, 'WebsiteBucket', bucketConf);
  }
}

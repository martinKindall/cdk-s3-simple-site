import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3_deploy from '@aws-cdk/aws-s3-deployment';

export interface S3StaticSiteStackProps {
  websiteFolder: string;
}

interface BucketConfig {
  websiteIndexDocument: string;
  websiteErrorDocument: string;
  publicReadAccess: boolean;
}

const bucketName = 'LearningCDKPatternsBucket';

export class S3StaticSiteStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: S3StaticSiteStackProps) {
    super(scope, id);

    const bucketConf: BucketConfig = {
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'error.html',
      publicReadAccess: true
    }

    const bucket = new s3.Bucket(this, bucketName, bucketConf);

    new s3_deploy.BucketDeployment(this, 'MyBucketDeployment', {
      sources: [s3_deploy.Source.asset(props.websiteFolder)],
      destinationBucket: bucket
    });

    new cdk.CfnOutput(this, 'BucketURL', {
      description: 'The site url',
      value: bucket.bucketWebsiteUrl
    });
  }
}

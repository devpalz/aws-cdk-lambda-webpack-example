import AWS = require('aws-sdk');


export const handler = async (): Promise<any> => {

    const ec2 = new AWS.EC2();

    const describeResponse = await ec2.describeInstances().promise()

    return { describeResponse };
}
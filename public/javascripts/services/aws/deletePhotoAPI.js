import AWS from 'aws-sdk';

export default (photoKey) => {
  return new Promise((resolve, reject) => {
    let s3;

    AWS.config.update({
      credentials: new AWS.Credentials(process.env.AWS_ACCESS_KEY, process.env.AWS_SECRET_KEY),
      region: 'us-east-1'
    });

    s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: process.env.AWS_BUCKET }
    });

    s3.deleteObject({Key: photoKey}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve({ status: 'SUCCESS', message: 'image deleted' });
      }
    });
  });
}

import AWS from 'aws-sdk';

export default () => {
  return new Promise((resolve, reject) => {
    const photo    = document.getElementById('form_file').files[0];
    const dtString = new Date().toISOString().replace(/\W/g, '');
    let photoPath  = '';
    let s3;

    if (photo) {
      AWS.config.update({
        credentials: new AWS.Credentials(process.env.AWS_ACCESS_KEY, process.env.AWS_SECRET_KEY),
        region: 'us-east-1'
      });

      s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: { Bucket: process.env.AWS_BUCKET }
      });

      s3.upload({
        Key: `photos/${dtString}/${photo.name}`,
        Body: photo,
        'ContentType': 'image/jpeg',
        ACL: 'public-read'
      }, (err, data) => {
        if (err) {
          console.log('There was an error uploading the photo');
        } else {
          photoPath = data.Location;
        }

        resolve(photoPath);
      });
    } else {
      resolve(photoPath);
    }
  });
}

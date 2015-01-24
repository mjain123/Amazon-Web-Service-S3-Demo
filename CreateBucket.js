var AWS = require('aws-sdk');

//Set credentials externally using - export AWS_ACCESS_KEY_ID="xxx";  export AWS_SECRET_ACCESS_KEY="yyy";

// Function to Create a new Bucket. Change BucketName, Key.
var s3 = new AWS.S3({params: {Bucket: 'Demo1234', Key: 'Key1234'}});
s3.createBucket(function(err) {
  if (err) { console.log("Error:", err); }
  else {
    s3.upload({Body: 'Sample Data!'}, function() {
      console.log("Successfully uploaded data.");
    });
  }
}); 

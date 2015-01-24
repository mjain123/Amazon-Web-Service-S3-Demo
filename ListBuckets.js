var AWS = require('aws-sdk');

//Set credentials externally using - export AWS_ACCESS_KEY_ID="xxx";  export AWS_SECRET_ACCESS_KEY="yyy";

// Function to list all the buckets in the account.
var s3 = new AWS.S3();
 s3.listBuckets(function(err, data) {
  if (err) { console.log("Error:", err); }
  else {
    for (var index in data.Buckets) {
      var bucket = data.Buckets[index];
      console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
    }
  }
});
# Amazon Web Services API Demo
---
###Amazon Web Service
Amazon Web Service is a collection of remote computing services provided by Amazon over the cloud. [Read more][1].
####Amazon S3 – Simple Storage Service
Amazon S3 provides developer and IT teams with safe and secure object storage where any amount of data can be stored from anywhere over the web. Amazon S3 stores data as objects within resources called "buckets". Objects can be up to 5 terabytes in size and have up to 2 kilobytes of metadata. Each object is identified by unique user assigned key. Amazon automatically makes copies of objects on multiple devices across multiple facilities. It also maintains all the versions of all the objects. It provides flexibility to control who can access data with identity and access management policies, access control lists, bucket control policies and query string authentication.  Amazon S3 is available globally in multiple AWS regions. You can choose the region where a bucket is stored to optimize for latency, minimize costs, or address regulatory requirements. Amazon S3 provides cost-effective object storage for a wide variety of use cases including cloud applications, content distribution, backup and archiving, disaster recovery, and big data analytics.

In this demonstration, I have created and listed buckets wth their details.
###Steps
##### Account Creation
For learning basic services, a free-tier plan account can be created on aws.amazon.com.
[Link][1].
##### Creating Users
After creating the account, you can add users with appropriate access using the IAM Management console.
I granted access to users by creating a NEW GROUP and granting admin permissions.

##### Aunthentication
Users Access Key Id and Secret Access Key Id are required for authentication. There are multiple ways to authenticate such as
1. By creating credentials object
```sh
var creds = new AWS.Credentials({'your_access_key',  'your_secret_key_id', null});
var s3 = new AWS.S3(creds);```
2. Exporting Credentials through command prompt - 
Using git bash command prompt, the following commands can be used to authenticate.
```sh
export AWS_SECRET_ACCESS_KEY="your_access_key_id" 
export AWS_SECRET_ACCESS_KEY="your_secret_access_key" ```
I have used the 2nd option for this demonstration.

#####Execute
Install aws sdk library using 
```npm install aws-sdk```
Execute code to create and list buckets.

Files - CreateBucket.js, ListBucket.js

---
###Screenshot
The output of execute the above files :
![output image](/images/output.JPG)

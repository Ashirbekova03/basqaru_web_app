// import AWS from "aws-sdk";

export default {
    // async uploadImage(file) {
    //     AWS.config.update({
    //         region: "us-east-1",
    //         accessKeyId: "URX3ZKK7N6GTOWYQ4K7D",
    //         secretAccessKey: "YDxmFSpI2TtChhGzkCBNHBJVn7zunz5Zd0AO8aDi"
    //     });
    //     const s3 = new AWS.S3();
    //     const params = {
    //         Bucket: 'category',
    //         Key: file.name,
    //         Body: file,
    //         ACL: 'public-read'
    //     };
    //
    //     try {
    //         const data = await s3.upload(params).promise();
    //         console.log('File uploaded successfully:', data.Location);
    //     } catch (error) {
    //         console.error('Error uploading file:', error);
    //     }
    // }
}
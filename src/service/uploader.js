const AWS = require('aws-sdk');

const uploadImage = async (file) => {
    AWS.config.update({
        region: "us-east-1",
        accessKeyId: "URX3ZKK7N6GTOWYQ4K7D", // Ваш Access Key ID
        secretAccessKey: "YDxmFSpI2TtChhGzkCBNHBJVn7zunz5Zd0AO8aDi" // Ваш Secret Access Key
    });

    const s3 = new AWS.S3();
    const params = {
        Bucket: 'category', // Имя вашего бакета
        Key: "image", // Уникальное имя файла в бакете
        Body: file,
        ACL: 'public-read'
    };

    try {
        const data = await s3.upload(params).promise();
        console.log('File uploaded successfully:', data.Location);
    } catch (error) {
        console.error('Error uploading file:', error);
    }
};

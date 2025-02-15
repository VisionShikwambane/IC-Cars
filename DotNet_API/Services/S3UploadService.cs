using Amazon.S3.Transfer;
using Amazon.S3;
using DotNet_API.Utilities;
using Microsoft.Extensions.Options;
using Amazon;

namespace DotNet_API.Services
{
    public class S3UploadService
    {

        private readonly IAmazonS3 _s3Client;
        private readonly S3Settings _s3Settings;

        public S3UploadService(IOptions<S3Settings> options)
        {
            _s3Settings = options.Value;

            _s3Client = new AmazonS3Client(
                _s3Settings.AccessKey,
                _s3Settings.SecretKey,
                RegionEndpoint.GetBySystemName(_s3Settings.Region)
            );
        }

        public async Task<string> UploadFileAsync(Stream fileStream, string fileName)
        {
            var transferUtility = new TransferUtility(_s3Client);
            await transferUtility.UploadAsync(fileStream, _s3Settings.BucketName, fileName);

            return $"https://{_s3Settings.BucketName}.s3.amazonaws.com/{fileName}";
        }
    }
}

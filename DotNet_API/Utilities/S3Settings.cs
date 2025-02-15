namespace DotNet_API.Utilities
{
    public sealed class S3Settings
    {

        public string BucketName { get; set; } = string.Empty;
        public string AccessKey { get; set; } = string.Empty;
        public string SecretKey { get; set; } = string.Empty;
        public string Region { get; set; } = string.Empty;

    }
}

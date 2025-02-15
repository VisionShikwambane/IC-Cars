using DotNet_API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DotNet_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarImageController : ControllerBase
    {

        private readonly S3UploadService _s3UploadService;

        public CarImageController(S3UploadService s3UploadService)
        {
            _s3UploadService = s3UploadService;
        }

        [HttpPost("upload-image")]
        public async Task<IActionResult> UploadImage( IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            using var stream = file.OpenReadStream();
            string fileName = file.FileName;

            string imageUrl = await _s3UploadService.UploadFileAsync(stream, fileName);

            return Ok(new { imageUrl });
        }
    }
}

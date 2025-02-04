namespace DotNet_API.DtoModels
{
    public class CarImageDto
    {

        public int Id { get; set; }

        public int CarId { get; set; }

        public string imageUrl { get; set; } = string.Empty;
    }
}

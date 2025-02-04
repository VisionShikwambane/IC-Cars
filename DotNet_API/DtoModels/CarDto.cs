using System.ComponentModel.DataAnnotations;

namespace DotNet_API.DtoModels
{
    public class CarDto
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Make { get; set; } = string.Empty; // e.g., Toyota, BMW

        [Required]
        [StringLength(100)]
        public string Model { get; set; } = string.Empty; // e.g., Corolla, X5

        [Required]
        public int Year { get; set; }  // Manufacturing year

        [Required]
        public decimal Price { get; set; } // Price in currency

        [StringLength(50)]
        public string Transmission { get; set; } = string.Empty; // Manual, Automatic

        [StringLength(50)]
        public string FuelType { get; set; } = string.Empty; // Petrol, Diesel, Electric

        [StringLength(20)]
        public string BodyType { get; set; } = string.Empty; // Sedan, SUV, Hatchback

        public int Mileage { get; set; }

        public string Description { get; set; } = string.Empty;

        public bool IsAvailable { get; set; } = true;

        public List<CarImageDto> CarImageDto { get; set; } = new List<CarImageDto>();



    }
}

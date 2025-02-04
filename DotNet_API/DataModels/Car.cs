using DotNet_API.DtoModels;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNet_API.DataModels
{
    public class Car
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Make { get; set; } = string.Empty; 

        [Required]
        [StringLength(100)]
        public string Model { get; set; } = string.Empty; 

        [Required]
        public int Year { get; set; } 

        [Required]
        public decimal Price { get; set; } 

        [StringLength(50)]
        public string Transmission { get; set; } = string.Empty; 

        [StringLength(50)]
        public string FuelType { get; set; } = string.Empty; 

        [StringLength(20)]
        public string BodyType { get; set; } = string.Empty;

        public int Mileage { get; set; }

        public string Description { get; set; } = string.Empty;

        public bool IsAvailable { get; set; } = true;

        public ICollection<CarImage> CarImages { get; set; } = [];

    }
}

using System.ComponentModel.DataAnnotations;

namespace CodeTest.Dtos
{
    public class ProductCreateDto
    {
        public int Id { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required]
        public string? Image { get; set; }
        public string? Description { get; set; }
    }
}

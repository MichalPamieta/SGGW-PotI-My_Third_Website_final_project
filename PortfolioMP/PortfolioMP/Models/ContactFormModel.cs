using System.ComponentModel.DataAnnotations;

namespace PortfolioMP.Models
{
    public class ContactFormModel
    {
        [Required]
        [MinLength(4)]
        [MaxLength(50)]
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        [MaxLength(50)]
        public string Email { get; set; }
        [Required]
        [MaxLength(100)]
        public string Subject { get; set; }
        [Required]
        [MaxLength(500)]
        public string Message { get; set; }

    }
}

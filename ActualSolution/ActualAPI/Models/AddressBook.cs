using System.ComponentModel.DataAnnotations;

namespace ActualAPI.Models
{
    public class AddressBook
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Adress { get; set; }
        [Required]
        public string TelNumber { get; set; }
    }
}

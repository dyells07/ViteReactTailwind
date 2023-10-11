using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RestrurantAPI.Models
{
    public class FoodItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int FoodItemId { get; set; }

        [Column(TypeName ="nvarchar(100)")]
        public string FoodItemName { get; set; }

        public decimal Price { get; set; }
    }
}

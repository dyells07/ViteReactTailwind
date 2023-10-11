using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RestrurantAPI.Models
{
    public class OrderDetail
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long OrderDetailId { get; set; }

        public long OrderMasterId { get; set; }

        public int FoodItemId { get; set; }
        public FoodItem FoodItem { get; set; }

        public decimal FoodItemPrice { get; set; }

        public int Quantity { get; set; }

    }
}

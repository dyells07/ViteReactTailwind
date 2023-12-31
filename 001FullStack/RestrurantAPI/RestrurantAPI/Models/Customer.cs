﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RestrurantAPI.Models
{
    public class Customer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CustomerID { get; set; }

        [Required(ErrorMessage = "CustomerName is required")]
        [Column(TypeName = "nvarchar(100)")]
        public string CustomerName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; }

        public DateTime? BirthDate { get; set; }
        
    }

}

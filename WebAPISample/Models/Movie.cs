﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPISample.Models
{
    public class Movie
    {
        // We dont specify [Key] here becuase by using conventions it knows MovieId is the PK based off of its name.
        public int MovieId { get; set; }

        [Required(ErrorMessage ="Movie Title Required")]
        public string Title { get; set; }

        public string Director { get; set; }

        public string Genre { get; set; }

        public string Year { get; set; }

        public string ImageURL { get; set; }
    }
}

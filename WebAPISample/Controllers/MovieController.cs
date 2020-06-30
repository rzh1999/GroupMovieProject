using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.View;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IActionResult Get()
        {
            // Retrieve all movies from db logic
            var movies = _context.Movies.ToList();
          
            return Ok(movies);
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            // Retrieve movie by id from db logic
            var returnedMovie = _context.Movies.Where(m => m.MovieId == id).SingleOrDefault();
            // return Ok(movie);
            return Ok(returnedMovie);
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie movie)
        {
            try
            {
                // Create movie in db logic
                _context.Movies.Add(movie);
                _context.SaveChanges();
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }
        // PUT api/movie
        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        {
            try
            {
                // Update movie in db logic
                var movieFromDB = _context.Movies.Where(m => m.MovieId == movie.MovieId).SingleOrDefault();
                movieFromDB.Title = movie.Title;
                movieFromDB.Director = movie.Director;
                movieFromDB.Genre = movie.Genre;
                movieFromDB.Year = movie.Year;
                _context.SaveChanges();
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var movieToDelete = _context.Movies.Find(id);
                _context.Movies.Remove(movieToDelete);
                _context.SaveChanges();
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }
    }
}
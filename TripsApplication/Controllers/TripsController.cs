using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TripsApplication.Data.Models;
using TripsApplication.Data.Services;

namespace TripsApplication.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class TripsController : ControllerBase
    {
        private ITripService _tripService;

        public TripsController(ITripService tripService)
        {
            this._tripService = tripService;
        }

        [HttpGet("[action]")]
        public IActionResult GetTrips()
        {
            var allTrips = _tripService.GetAllTrips();
            return Ok(allTrips);
        }


        [HttpGet("SingleTrip/{id}")]
        public IActionResult GetTripById(int id)
        {
            var trip = _tripService.GetTripById(id);
            return Ok(trip);
        }


        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody] Trip trip) 
        { 
            if (trip != null)
            {
                _tripService.AddTrip(trip);
            }
            return Ok(trip);
        }

        [HttpPut("UpdateTrip/{id}")]
        public IActionResult UpdateTrip(int id, [FromBody] Trip trip)
        {
            if (id != trip.Id)
            {
                return BadRequest();
            }

            _tripService.UpdateTrip(id, trip);
            return Ok(trip);
        }

        [HttpDelete("DeleteTrip/{id}")]
        public IActionResult DeleteTrip(int id)
        {
            _tripService.DeleteTrip(id);
            return Ok();
        }
    }
}
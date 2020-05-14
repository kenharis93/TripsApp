using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TripsApplication.Data.Models;

namespace TripsApplication.Data.Services
{
    public class TripService : ITripService
    {
        readonly TripContext context;
        public TripService(TripContext context)
        {
            this.context = context;
        }
        public async void AddTrip(Trip trip)
        {
            context.Trips.Add(trip);
            await context.SaveChangesAsync();
        }

        public async void DeleteTrip(int tripId)
        {
            var trip = context.Trips.FirstOrDefault(t => t.Id == tripId);
            if(trip != null)
            {
                context.Trips.Remove(trip);
                await context.SaveChangesAsync();
            }
        }

        public List<Trip> GetAllTrips()
        {
            return context.Trips.ToList();
        }

        public Trip GetTripById(int tripId)
        {
            return context.Trips.FirstOrDefault(t => t.Id == tripId);
        }

        public async void UpdateTrip(int tripId, Trip trip)
        {
            context.Entry(trip).State = EntityState.Modified;
            await context.SaveChangesAsync();          
        }
    }
}

const checkBooking = (availablePlaces, requestedPlaces) => {
    if (requestedPlaces === 0) {
        return ("Your request is empty.")
    }
    else if (availablePlaces < requestedPlaces) {
        return ("Not enough places available.")
    }
    else {
        return ("Booking confirmed.")
    }
}

console.log(checkBooking(6,10));
        

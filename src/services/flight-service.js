const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareDate } = require('../utils/helper');

class FlightService {

    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
            if (compareDate(data.departureTime, data.arrivalTime)) {
                throw {
                    error: 'Departure time cannot greater them arrival time'
                }
            }

            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data, totalSeats: airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight service");
            throw {error};
        }
    }

    async getFlights(data) {
        try {
            const response = await this.flightRepository.getFlights(data);
            return response;
        } catch (error) {
            console.log("Something went wrong while getting all flights in flight service");
            throw {error};
        }
    }
}

module.exports = FlightService;
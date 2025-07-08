const { FlightRepository } = require('../repository/index');

class FlightService {

    constructor() {
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            const flight = await this.flightRepository.createFlight(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight service");
            throw {error};
        }
    }
}

module.exports = FlightService;
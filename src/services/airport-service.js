const { AirportRepository } = require('../repository/index');

class AirportService {
    
    constructor() {
        this.airportRepository = new AirportRepository();
    }

    async createAirport(data) {
        try {
            const airport = await this.airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in create airport");
            throw {error};
        }
    }
}

module.exports = AirportService;
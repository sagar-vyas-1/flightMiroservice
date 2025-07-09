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

    async getByCity(cityId) {
        try {
            const airport = await this.airportRepository.getByCity(cityId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in get airport by city");
            throw {error};
        }
    }

    async getAll() {
        try {
            const response = await this.airportRepository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong while fetching all airport in airport service");
            throw {error};
        }
    }
}

module.exports = AirportService;
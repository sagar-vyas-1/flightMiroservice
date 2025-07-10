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

    async getAirport(cityId) {
        try {
            const airport = await this.airportRepository.getAirport(cityId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in get airport by city");
            throw {error};
        }
    }

    async updateAirport(airportId, data) {
        try {
            const airport = await this.airportRepository.updateAirport(airportId, data);
            return airport;
        } catch (error) {
            console.log("Something went wrong while updating airport details");
            throw {error};
        }
    }

    async deleteAirport(airportId) {
        try {
            const response = await this.airportRepository.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("Something went wrong while deleting airport details");
            throw {error};
        }
    }
}

module.exports = AirportService;
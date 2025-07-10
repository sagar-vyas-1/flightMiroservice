const { AirplaneRepository } = require("../repository/index");

class AirplaneService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
    }

    async createAirplane(data) {
        try {
            const airplane = await this.airplaneRepository.createAirplane(data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in airplane service");
            throw {error};
        }
    }

    async getAllAirplane() {
        try {
            const response = await this.airplaneRepository.getAllAirplane();
            return response;
        } catch (error) {
            console.log("Something went wrong while fetching all airplanes");
            throw {error};
        }
    }

    async getAirplane(id) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong while fetching airplane");
            throw {error};
        }
    }

    async deleteAirplane(airplaneId) {
        try {
            const response = await this.airplaneRepository.deleteAirplane(airplaneId);
            return response;
        } catch (error) {
            console.log("Something went wrong while deleting airplane in airplane service");
            throw {error};
        }
    }
}

module.exports = AirplaneService;
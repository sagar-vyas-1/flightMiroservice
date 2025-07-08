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
}

module.exports = AirplaneService;
const { Airplane } = require('../models/index');

class AirplaneRepository {
    async createAirplane(data) {
        try {
            const airplane = await Airplane.create(data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in airplane repository");
            throw {error};
        }
    }
}

module.exports = AirplaneRepository;
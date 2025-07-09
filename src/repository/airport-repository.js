const { Airport } = require('../models/index');

class AirportRepository {
    async createAirport(data) {
        try {
            const airport = await Airport.create(data);
            return airport;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }

    async getByCity(cityId) {
        try {
            const airport = await Airport.findAll({
                where: {cityId},
            });
            return airport;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }

    async getAll() {
        try {
            const response = await Airport.findAll();
            return response;
        } catch (error) {
            console.log("Somehthing went wrong while fetching all airports");
            throw {error};
        }
    }
}

module.exports = AirportRepository;
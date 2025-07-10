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

    async getAirport(cityId) {
        try {
            const airport = await Airport.findAll({
                where: cityId ? { cityId } : {},
            });
            return airport;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }

    async updateAirport(airportId, data) {
        try {
            const airport = await Airport.update(data, {
                where: {
                    id: airportId
                }
            });
            return airport;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }
}

module.exports = AirportRepository;
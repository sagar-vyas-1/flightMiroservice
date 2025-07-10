const { Op } = require('sequelize');
const { Flight } = require('../models/index');

class FlightRepository {

    #createFilters(data) {
        let filter = {};

        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        if (data.maxPrice) {
            filter.price = {
                [Op.lte]: data.maxPrice
            }
        }
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight repository");
            throw {error};
        }
    }

    async getFlights(data) {
        try {
            const filter = this.#createFilters(data);
            console.log(filter);
            const response = await Flight.findAll({
                where: filter,
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log("Something went wrong while getting all flights");
            throw {error};
        }
    }
}

module.exports = FlightRepository;
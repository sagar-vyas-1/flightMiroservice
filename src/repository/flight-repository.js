const { Op, where } = require('sequelize');
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
            const response = await Flight.findAll({
                where: filter,
            });
            return response;
        } catch (error) {
            console.log("Something went wrong while getting all flights");
            throw {error};
        }
    }

    async updateFlight(flightId, data) {
        try {
            const response = await Flight.update(data, {
                where: { id: flightId },
            });
            return response;
        } catch (error) {
            console.log("Something went wrong while updating flights details");
            throw {error};
        }
    }

    async deleteFlight(flightId) {
        try {
            const response = await Flight.destroy({
                where: { id: flightId },
            });
            return response;
        } catch (error) {
            console.log("Something went wrong while deleting flight");
            throw {error};
        }
    }
}

module.exports = FlightRepository;
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

    async getAllAirplane() {
        try {
            const response = await Airplane.findAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in airplane repository");
            throw {error};
        }
    }

    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in airplane repository");
            throw {error};
        }
    }

    async deleteAirplane(airplaneId) {
        try {
            const response = await Airplane.destroy({
                where: { id: airplaneId }
            });
            return response;
        } catch (error) {
            console.log("Something went wrong while deleting airplane repository");
            throw {error};
        }
    }
}

module.exports = AirplaneRepository;
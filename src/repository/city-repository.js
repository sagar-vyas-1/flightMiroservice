const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Something went wrong in city repository");
            throw {error};
        }
    }

    async getAllCities() {
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in city repository");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in city repository");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            const city = await City.destroy({
                where: { id: cityId}
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in city repository");
            throw {error};
        } 
    }
}

module.exports = CityRepository;
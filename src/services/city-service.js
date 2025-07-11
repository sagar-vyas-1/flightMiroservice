const { CityRepository } = require('../repository/index');

class CityService {

    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(name) {
        try {
            const city = await this.cityRepository.createCity(name);
            return city;
        } catch (error) {
            console.log("Something went wrong in city service");
            throw {error};
        }
    }

    async getAllCities() {
        try {
            const cities = await this.cityRepository.getAllCities();
            return cities;
        } catch (error) {
            console.log("Somethig went wrong in city service");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Somethig went wrong in city service");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            const city = await this.cityRepository.deleteCity(cityId);
            return city;
        } catch (error) {
            console.log("Somethig went wrong in city service");
            throw {error};
        }
    }
}

module.exports = CityService;
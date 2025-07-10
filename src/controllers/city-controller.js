const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
        data: city,
        success: true,
        message: 'City created successfully',
        error: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not Able to create city',
            error: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities();
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'All cities fetched successfully',
            error: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not Able to fetch all cities',
            error: error
        });
    }
}

const getCity = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: 'Get City Data Successfully',
            error: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not Able to fetch city',
            error: error
        });
    }
}

const deleteCity = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.cityId);
        return res.status(204).json({
            data: response,
            success: true,
            message: 'City Deleted Successfully',
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Internal server error',
            error: error
        });
    }
}

module.exports = {
    create,
    getAll,
    getCity,
    deleteCity
};
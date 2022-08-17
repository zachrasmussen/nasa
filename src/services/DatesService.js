import { AppState } from "../AppState";
import { date } from "../models/Date";
import { logger } from "../utils/Logger";

// const { nasaApi } = require("./AxiosService");

class DatesService {

    async getDates() {
        const res = await nasaApi.get('/planetary/apod')
        logger.log('is this working', res.data)
        AppState.date = res.data
    }
}

export const datesService = new DatesService()
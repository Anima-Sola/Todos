export default class BoredApiService {

    _apiBase = "http://www.boredapi.com/api";

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
    }

    getRandomActivity = async () => {
        return await this.getResource(`/activity/`);
    }

    getActivityByKey = async (key) => {
        return await this.getResource(`/activity?key=${key}`);
    }

    getActivityByType = async (type) => {
        return await this.getResource(`/activity?type=${type}`);
    }

    getActivityByNumberOfParticipants = async (number) => {
        return await this.getResource(`/activity?participants=${number}`);
    }

    getActivityByPrice = async (price) => {
        return await this.getResource(`/activity?price=${price}`);
    }

    getActivityByPriceRange = async (minPrice, maxPrice) => {
        return await this.getResource(`/activity?minprice=${minPrice}&maxprice=${maxPrice}`);
    }

    getActivityByAccessibility = async (accessibility) => {
        return await this.getResource(`/activity?accessibility=${accessibility}`);
    }

    getActivityByAccessibilityRange = async (minAccessibility, maxAccessibility) => {
        return await this.getResource(`/activity?minaccessibility=${minAccessibility}&maxaccessibility=${maxAccessibility}`);
    }

}
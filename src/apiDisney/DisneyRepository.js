export default class DisneyRepository {

    constructor() {
        this.url = "https://api.disneyapi.dev/characters"
    }

    async getAll(){
        try {
            const response = await fetch(this.url);
            const data = await response.json;
            return data;
        } catch (error) {
            console.log(error)
        }
    }
}
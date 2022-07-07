import CharacterModel from "./CharacterModel";
import DisneyRepository from "./DisneyRepository";

export default class HandlerDisneyRepository {
    disneyList = [];

    constructor() {
        this.repository= new DisneyRepository();
    }

    async getData() {
        const data = await this.repository.getAll();
        data['data'].forEach(character => {
            if(this.disneyList.length >= 50) return;
            character = new CharacterModel(character._id, character.name, character.imageUrl);
            this.disneyList.push(character);
        });
        
    }
}
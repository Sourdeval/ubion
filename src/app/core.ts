export interface Data{
    senators:Senator[];
    species:SpeciesStat;
    pnj:Pnj[];
    lastReport: string;
    population: number;
    ressources: number;
    army: number;
    food: Food;
    popularity: Popularity;
    cities: City[];
}

export interface Senator{
    name:string;
    fullname: string;
    description: string;
}

export interface SpeciesStat{
    taille: number;
    force: number;
    agilite: number;
    dexterite: number;
    intelligence: number;
    mecanique: number;
    psychisme: number;
    xenophilie: number;
    charisme: number;
}

export interface Pnj{
    name: string;
    characters: Character[];
    relation: Relation;
}

export enum Relation{
    bad, good, ally, war, trade, coldwar, love, neutral
}

export interface Character{
    name: string;
    relation: Relation
}

export enum Food {
    abondance, suffisante, maigre, famine,
}
export enum Popularity {
    maximum, bonne, moyenne, faible, contestation, revolte
}

export interface City{
    name: string;
    population: number;
    richness: Richness;
    defence: number;
    description: string;
}

export enum Richness {
    riche, aise, moyen, faible, pauvre
}
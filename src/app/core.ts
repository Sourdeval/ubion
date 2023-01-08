export interface Data{
    senators:Senator[];
    species:SpeciesStat;
    pnj:Pnj[];
    lastReport: string;
    population: string;
    ressources: number;
    army: number;
    food: Food;
    popularity: Popularity;
    cities: City[];
    cults: Cult[];
    science: number;
    education: number;
    culture: number;
    explorer: number;
    spy: number;
    specialForces: number;
    budget: string;
    nextBudget: number;
}

export interface Senator{
    name:string;
    fullname: string;
    job: string;
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
    bad = "bad", good = "good", ally = "ally", war = "war", trade = "trade",
    coldwar = "coldwar", love = "love", neutral = "neutral"
}

export interface Character{
    name: string;
    relation: Relation
}

export enum Food {
    abondance = "abondance", suffisante = "suffisante", maigre = "maigre", famine = "famine"
}
export enum Popularity {
    maximum = "maximum", bonne = "bonne", moyenne = "moyenne", faible = "faible",
    contestation = "contestation", revolte = "revolte"
}

export interface City{
    name: string;
    population: string;
    richness: Richness;
    defence: number;
    description: string;
    ctiteRooms: number;
}

export enum Richness {
    riche = "riche", aise = "aise", moyen = "moyen", faible = "faible", pauvre = "pauvre"
}

export interface Cult{
    name: string,
    percent: string,
    boss: string,
    other: string
}

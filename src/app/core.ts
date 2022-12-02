export interface Data{
    senators:Senator[];
    species:SpeciesStat;
    pnj:Pnj[];
    lastReport: string;
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
    fullname: string;
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

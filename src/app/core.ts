export interface Data{
    senators:Senator[];
    species:SpeciesStat;
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

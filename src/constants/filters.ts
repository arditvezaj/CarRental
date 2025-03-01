export interface CarDetailsProps {
  id: number;
  name: string;
}

export interface CarModelProps {
  [key: string]: string[] | undefined;
  Toyota?: string[];
  Ford?: string[];
  Honda?: string[];
  Chevrolet?: string[];
  "Mercedes-Benz"?: string[];
  BMW?: string[];
  Volkswagen?: string[];
  Audi?: string[];
  Tesla?: string[];
  Nissan?: string[];
  Hyundai?: string[];
  Kia?: string[];
  Porsche?: string[];
  Subaru?: string[];
  Mazda?: string[];
  Jaguar?: string[];
  "Land Rover"?: string[];
  Lexus?: string[];
  Ferrari?: string[];
  Lamborghini?: string[];
  Maserati?: string[];
  Bugatti?: string[];
  Peugeot?: string[];
  Renault?: string[];
  Fiat?: string[];
  "Alfa Romeo"?: string[];
  Opel?: string[];
  Skoda?: string[];
  Citroën?: string[];
  Mitsubishi?: string[];
  Chrysler?: string[];
  Dodge?: string[];
  Jeep?: string[];
  Ram?: string[];
  Acura?: string[];
  Infiniti?: string[];
  Suzuki?: string[];
  Volvo?: string[];
  Saab?: string[];
  Bentley?: string[];
  "Rolls-Royce"?: string[];
  "Aston Martin"?: string[];
  Genesis?: string[];
  McLaren?: string[];
  Dacia?: string[];
}

export const popularCarMakes = [
  { id: 1, name: "Toyota" },
  { id: 2, name: "Ford" },
  { id: 3, name: "Honda" },
  { id: 4, name: "Chevrolet" },
  { id: 5, name: "Mercedes-Benz" },
  { id: 6, name: "BMW" },
  { id: 7, name: "Volkswagen" },
  { id: 8, name: "Audi" },
  { id: 9, name: "Tesla" },
  { id: 10, name: "Nissan" },
];

export const allCarMakes: CarDetailsProps[] = [
  { id: 1, name: "All" },
  { id: 2, name: "Toyota" },
  { id: 3, name: "Ford" },
  { id: 4, name: "Honda" },
  { id: 5, name: "Chevrolet" },
  { id: 6, name: "Mercedes-Benz" },
  { id: 7, name: "BMW" },
  { id: 8, name: "Volkswagen" },
  { id: 9, name: "Audi" },
  { id: 10, name: "Tesla" },
  { id: 11, name: "Nissan" },
  { id: 12, name: "Hyundai" },
  { id: 13, name: "Kia" },
  { id: 14, name: "Porsche" },
  { id: 15, name: "Subaru" },
  { id: 16, name: "Mazda" },
  { id: 17, name: "Jaguar" },
  { id: 18, name: "Land Rover" },
  { id: 19, name: "Lexus" },
  { id: 20, name: "Ferrari" },
  { id: 21, name: "Lamborghini" },
  { id: 22, name: "Maserati" },
  { id: 23, name: "Bugatti" },
  { id: 24, name: "Peugeot" },
  { id: 25, name: "Renault" },
  { id: 26, name: "Fiat" },
  { id: 27, name: "Alfa Romeo" },
  { id: 28, name: "Opel" },
  { id: 29, name: "Skoda" },
  { id: 30, name: "Citroën" },
  { id: 31, name: "Mitsubishi" },
  { id: 32, name: "Chrysler" },
  { id: 33, name: "Dodge" },
  { id: 34, name: "Jeep" },
  { id: 35, name: "Ram" },
  { id: 36, name: "Acura" },
  { id: 37, name: "Infiniti" },
  { id: 38, name: "Suzuki" },
  { id: 39, name: "Volvo" },
  { id: 40, name: "Saab" },
  { id: 41, name: "Bentley" },
  { id: 42, name: "Rolls-Royce" },
  { id: 43, name: "Aston Martin" },
  { id: 44, name: "Genesis" },
  { id: 45, name: "McLaren" },
  { id: 46, name: "Dacia" },
];

export const carModels: CarModelProps = {
  Toyota: [
    "Camry",
    "Corolla",
    "RAV4",
    "Highlander",
    "Prius",
    "Supra",
    "Yaris",
    "Avalon",
    "C-HR",
    "Sienna",
  ],
  Ford: [
    "F-150",
    "Mustang",
    "Explorer",
    "Escape",
    "Bronco",
    "Edge",
    "Expedition",
    "Fusion",
    "Ranger",
    "Taurus",
  ],
  Honda: [
    "Civic",
    "Accord",
    "CR-V",
    "Pilot",
    "Fit",
    "HR-V",
    "Odyssey",
    "Passport",
    "Ridgeline",
    "Insight",
  ],
  Chevrolet: [
    "Silverado",
    "Malibu",
    "Equinox",
    "Tahoe",
    "Camaro",
    "Traverse",
    "Colorado",
    "Blazer",
    "Impala",
    "Suburban",
  ],
  "Mercedes-Benz": [
    "C-Class",
    "E-Class",
    "S-Class",
    "GLC",
    "GLE",
    "A-Class",
    "GLA",
    "GLS",
    "CLA",
    "SL",
  ],
  BMW: [
    "3 Series",
    "5 Series",
    "X3",
    "X5",
    "Z4",
    "7 Series",
    "X1",
    "X7",
    "4 Series",
    "2 Series",
  ],
  Volkswagen: [
    "Golf",
    "Passat",
    "Tiguan",
    "Polo",
    "ID.4",
    "Jetta",
    "Atlas",
    "Arteon",
    "Beetle",
    "Touareg",
  ],
  Audi: ["A3", "A4", "Q5", "Q7", "TT", "A5", "A6", "Q3", "A7", "A8"],
  Tesla: ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck", "Roadster"],
  Nissan: [
    "Altima",
    "Sentra",
    "Rogue",
    "Pathfinder",
    "370Z",
    "Maxima",
    "Murano",
    "Frontier",
    "Versa",
    "Armada",
  ],
  Hyundai: [
    "Elantra",
    "Sonata",
    "Tucson",
    "Santa Fe",
    "Kona",
    "Accent",
    "Palisade",
    "Veloster",
    "Venue",
    "Ioniq",
  ],
  Kia: [
    "Sportage",
    "Sorento",
    "Optima",
    "Rio",
    "Stinger",
    "Soul",
    "Telluride",
    "Seltos",
    "Forte",
    "Carnival",
  ],
  Porsche: [
    "911",
    "Cayenne",
    "Macan",
    "Panamera",
    "Taycan",
    "718 Boxster",
    "718 Cayman",
  ],
  Subaru: [
    "Outback",
    "Forester",
    "Impreza",
    "Legacy",
    "WRX",
    "Ascent",
    "Crosstrek",
    "BRZ",
  ],
  Mazda: [
    "Mazda3",
    "Mazda6",
    "CX-5",
    "CX-9",
    "MX-5 Miata",
    "CX-3",
    "CX-30",
    "CX-50",
  ],
  Jaguar: ["XF", "XJ", "F-Type", "E-Pace", "F-Pace", "XE", "I-Pace"],
  "Land Rover": [
    "Range Rover",
    "Defender",
    "Discovery",
    "Evoque",
    "Velar",
    "Sport",
  ],
  Lexus: ["RX", "ES", "NX", "GX", "LS", "UX", "LX", "IS", "RC"],
  Ferrari: [
    "488",
    "Roma",
    "Portofino",
    "SF90 Stradale",
    "F8 Tributo",
    "812 Superfast",
    "GTC4Lusso",
  ],
  Lamborghini: ["Huracan", "Aventador", "Urus", "Gallardo", "Murcielago"],
  Maserati: ["Ghibli", "Levante", "Quattroporte", "GranTurismo", "GranCabrio"],
  Bugatti: ["Chiron", "Veyron", "Divo", "Centodieci", "La Voiture Noire"],
  Peugeot: ["208", "308", "508", "3008", "5008", "2008", "4008"],
  Renault: ["Clio", "Megane", "Captur", "Kadjar", "Zoe", "Talisman", "Scenic"],
  Fiat: ["500", "Panda", "Tipo", "Doblo", "124 Spider", "Punto", "Bravo"],
  "Alfa Romeo": ["Giulia", "Stelvio", "Giulietta", "4C", "MiTo"],
  Opel: [
    "Astra",
    "Corsa",
    "Insignia",
    "Mokka",
    "Grandland X",
    "Zafira",
    "Crossland X",
  ],
  Skoda: ["Octavia", "Superb", "Kodiaq", "Kamiq", "Scala", "Fabia", "Karoq"],
  Citroën: ["C3", "C4", "C5 Aircross", "Berlingo", "SpaceTourer", "C1", "C5 X"],
  Mitsubishi: [
    "Outlander",
    "Eclipse Cross",
    "Lancer",
    "Pajero",
    "Mirage",
    "ASX",
    "Triton",
  ],
  Chrysler: ["300", "Pacifica", "Voyager", "Aspen", "Sebring"],
  Dodge: ["Charger", "Challenger", "Durango", "Journey", "Grand Caravan"],
  Jeep: [
    "Wrangler",
    "Grand Cherokee",
    "Compass",
    "Renegade",
    "Cherokee",
    "Gladiator",
  ],
  Ram: ["1500", "2500", "3500", "ProMaster", "ProMaster City"],
  Acura: ["MDX", "RDX", "TLX", "ILX", "NSX", "RLX"],
  Infiniti: ["Q50", "Q60", "QX50", "QX60", "QX80", "QX30", "Q70"],
  Suzuki: ["Swift", "Vitara", "Jimny", "Baleno", "Celerio", "Ignis", "SX4"],
  Volvo: ["XC40", "XC60", "XC90", "S60", "S90", "V60", "V90"],
  Saab: ["9-3", "9-5", "900", "9000", "9-4X", "9-7X"],
  Bentley: ["Continental", "Flying Spur", "Bentayga", "Mulsanne", "Azure"],
  "Rolls-Royce": ["Phantom", "Ghost", "Wraith", "Cullinan", "Dawn"],
  "Aston Martin": ["DB11", "Vantage", "DBX", "DBS Superleggera", "Rapide"],
  Genesis: ["G70", "G80", "G90", "GV70", "GV80"],
  McLaren: ["720S", "Artura", "GT", "Senna", "P1"],
  Dacia: [
    "Duster",
    "Sandero",
    "Sandero Stepway",
    "Jogger",
    "Spring",
    "Bigster",
  ],
};

export const carFuel: CarDetailsProps[] = [
  { id: 1, name: "All" },
  { id: 2, name: "Petrol" },
  { id: 3, name: "Diesel" },
  { id: 4, name: "Electric" },
  { id: 5, name: "Hybrid" },
  { id: 6, name: "Gas" },
];

export const carTransmissions: CarDetailsProps[] = [
  { id: 1, name: "All" },
  { id: 2, name: "Manual" },
  { id: 3, name: "Automatic" },
];

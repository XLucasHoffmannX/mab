export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subCategory?: string;
  img: string;
}

export interface Category {
  id: string;
  name: string;
  subCategories?: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: "cat-corte",
    name: "Sala de Corte",
    subCategories: ["Laser", "Enfesto", "Manual"],
  },
  {
    id: "cat-costura",
    name: "Costura",
    subCategories: ["Reta", "Overloque", "Galoneira", "Especiais"],
  },
  {
    id: "cat-bordado",
    name: "Bordado",
    subCategories: ["Industrial"],
  },
];

export const PRODUCTS: Product[] = [
  // --- SALA DE CORTE (Imagem 1) ---
  {
    id: "sc-01",
    name: "Máquina de corte a laser CA-1610",
    brand: "Mab Fortuna",
    category: "Sala de Corte",
    subCategory: "Laser",
    img: "",
  },
  {
    id: "sc-02",
    name: "Máquina de corte BEDY",
    brand: "Mab Fortuna",
    category: "Sala de Corte",
    subCategory: "Laser",
    img: "",
  },
  {
    id: "sc-03",
    name: "Enfestador automático para corte",
    brand: "Mab Fortuna",
    category: "Sala de Corte",
    subCategory: "Enfesto",
    img: "",
  },
  {
    id: "sc-04",
    name: "Máquina de corte a laser (Bancada)",
    brand: "Mab Fortuna",
    category: "Sala de Corte",
    subCategory: "Laser",
    img: "",
  },

  // --- BORDADO (Imagem 1) ---
  {
    id: "br-01",
    name: "Máquina de bordado BEDKT-S1502-C6H",
    brand: "Barudan",
    category: "Bordado",
    subCategory: "Industrial",
    img: "",
  },

  // --- COSTURA - JACK (Imagens 2 e 3) ---
  {
    id: "co-01",
    name: "Reta Eletrônica A4F",
    brand: "Jack",
    category: "Costura",
    subCategory: "Reta",
    img: "",
  },
  {
    id: "co-02",
    name: "Reta Eletrônica A5E-W",
    brand: "Jack",
    category: "Costura",
    subCategory: "Reta",
    img: "",
  },
  {
    id: "co-03",
    name: "Reta Industrial A2",
    brand: "Jack",
    category: "Costura",
    subCategory: "Reta",
    img: "",
  },
  {
    id: "co-04",
    name: "Overloque Eletrônica C5",
    brand: "Jack",
    category: "Costura",
    subCategory: "Overloque",
    img: "",
  },
  {
    id: "co-05",
    name: "Overloque Industrial C4",
    brand: "Jack",
    category: "Costura",
    subCategory: "Overloque",
    img: "",
  },
  {
    id: "co-06",
    name: "Galoneira Eletrônica W4",
    brand: "Jack",
    category: "Costura",
    subCategory: "Galoneira",
    img: "",
  },
  {
    id: "co-07",
    name: "Travetti Eletrônico JK-T1900B",
    brand: "Jack",
    category: "Costura",
    subCategory: "Especiais",
    img: "",
  },
  {
    id: "co-08",
    name: "Botoneira Eletrônica JK-T1377E",
    brand: "Jack",
    category: "Costura",
    subCategory: "Especiais",
    img: "",
  },
  {
    id: "co-09",
    name: "Caseadeira Eletrônica JK-T781E",
    brand: "Jack",
    category: "Costura",
    subCategory: "Especiais",
    img: "",
  },
  {
    id: "co-10",
    name: "Máquina de Filigrana JK-T10080",
    brand: "Jack",
    category: "Costura",
    subCategory: "Especiais",
    img: "",
  },
  {
    id: "co-11",
    name: "Reta de Transporte Duplo H2",
    brand: "Jack",
    category: "Costura",
    subCategory: "Reta",
    img: "",
  },
];

export const BRANDS = ["Jack", "Mab Fortuna", "Barudan"];

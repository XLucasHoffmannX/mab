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
    img: "https://mabfortuna.com.br/wp-content/uploads/2017/07/Bordadeira-Barudan-BEKT-S1501CBIII-555x555.png",
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
    img: "https://mabfortuna.com.br/wp-content/uploads/2017/09/Plotter-de-impressao-Weltplotter-imagem-555x555.jpg",
  },
  {
    id: "sc-04",
    name: "Máquina de corte a laser (Bancada)",
    brand: "Mab Fortuna",
    category: "Sala de Corte",
    subCategory: "Laser",
    img: "https://mabfortuna.com.br/wp-content/uploads/2017/09/Bordadeira-Barudan-BEKY-Y906HII-555x555.png",
  },

  // --- BORDADO (Imagem 1) ---
  {
    id: "br-01",
    name: "Máquina de bordado BEDKT-S1502-C6H",
    brand: "Barudan",
    category: "Bordado",
    subCategory: "Industrial",
    img: "https://mabfortuna.com.br/wp-content/uploads/2017/09/Bordadeira-Barudan-BEKS-CL-Chenille-555x555.png",
  },

  // --- COSTURA - JACK (Imagens 2 e 3) ---
  {
    id: "co-01",
    name: "Reta Eletrônica A4F",
    brand: "Jack",
    category: "Costura",
    subCategory: "Reta",
    img: "https://mabfortuna.com.br/wp-content/uploads/2017/09/Bordadeira-Barudan-BEKS-Y912-%E2%80%9DJ%E2%80%9D-1-555x555.png",
  },
  {
    id: "co-02",
    name: "Reta Eletrônica A5E-W",
    brand: "Jack",
    category: "Costura",
    subCategory: "Reta",
    img: "https://mabfortuna.com.br/wp-content/uploads/2017/07/Bordadeira-Barudan-BEKT-S1501CBIII-2-555x555.png",
  },
  {
    id: "co-03",
    name: "Reta Industrial A2",
    brand: "Jack",
    category: "Costura",
    subCategory: "Reta",
    img: "https://mabfortuna.com.br/wp-content/uploads/2017/09/C-1008-AB-555x331.jpg",
  },
  {
    id: "co-04",
    name: "Overloque Eletrônica C5",
    brand: "Jack",
    category: "Costura",
    subCategory: "Overloque",
    img: "https://mabfortuna.com.br/wp-content/uploads/2017/09/modelo-hslc-555x331.jpg",
  },
  {
    id: "co-05",
    name: "Overloque Industrial C4",
    brand: "Jack",
    category: "Costura",
    subCategory: "Overloque",
    img: "https://mabfortuna.com.br/wp-content/uploads/2017/09/yahwe-555x312.png",
  },
  {
    id: "co-06",
    name: "Galoneira Eletrônica W4",
    brand: "Jack",
    category: "Costura",
    subCategory: "Galoneira",
    img: "https://mabfortuna.com.br/wp-content/uploads/2017/09/yahwe-555x312.png",
  },
  {
    id: "co-07",
    name: "Travetti Eletrônico JK-T1900B",
    brand: "Jack",
    category: "Costura",
    subCategory: "Especiais",
    img: "https://mabfortuna.com.br/produto/maquina-de-corte-a-laser-ca-1610-2-bab/",
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

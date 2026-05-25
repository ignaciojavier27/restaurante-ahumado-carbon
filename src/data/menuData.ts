export interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: {
    text: string;
    style: "default" | "veggie" | "double";
  };
  image?: string | null;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "entrantes",
    title: "Para Empezar",
    subtitle: "El fuego precalienta el apetito antes del plato principal.",
    items: [
      {
        name: "Papas Nativas Bravas",
        description: "Papas rústicas con salsa brava de la casa y alioli de ajo asado",
        price: "$6.900",
        image: "../assets/images/menu/entrantes/papas-nativas-bravas.png",
      },
      {
        name: "Empanaditas de Pulled Pork",
        description: "Masa artesanal rellena de cerdo ahumado por 12 horas",
        price: "$5.500",
        badge: { text: "3 uds.", style: "default" },
        image: "../assets/images/menu/entrantes/empanaditas-de-pulled-pork.png",
      },
      {
        name: "Provoleta al Carbón",
        description: "Queso provolone fundido en fierro con tomatitos cherry y orégano fresco",
        price: "$7.200",
        image: "../assets/images/menu/entrantes/provoleta-al-carbon.png",
      },
      {
        name: "Alitas Ahumadas",
        description: "Alitas de pollo marinadas, ahumadas con madera de manzano y salsa BBQ casera",
        price: "$6.800",
        badge: { text: "6 uds.", style: "default" },
        image: null,
      },
      {
        name: "Tartar de Res Rústico",
        description: "Carne picada a cuchillo, alcaparras, mostaza antigua y tostadas en mantequilla de campo",
        price: "$9.500",
        image: null,
      },
      {
        name: "Ceviche de Champiñones",
        description: "Champiñones París y portobellos marinados en leche de tigre de cajú",
        price: "$6.400",
        badge: { text: "Veggie", style: "veggie" },
        image: null,
      },
    ],
  },
  {
    id: "parrilla",
    title: "De la Parrilla",
    subtitle: "Fuego real, cortes nobles, tiempo respetado.",
    items: [
      {
        name: "Lomo Vetado Premium",
        description: "Corte con infiltración justa de grasa, asado a la leña",
        price: "$16.900",
        badge: { text: "400g", style: "default" },
        image: "../assets/images/menu/parrilla/lomo-vetado-premium.png",
      },
      {
        name: "Entraña Angus",
        description: "Corte tierno y jugoso, sellado a fuego fuerte",
        price: "$18.500",
        badge: { text: "300g", style: "default" },
        image: null,
      },
      {
        name: "Costillar de Cerdo al Sabor del Humo",
        description: "Costillar tierno que se desarma del hueso, bañado en BBQ de bourbon",
        price: "$14.200",
        image: "../assets/images/menu/parrilla/costillas-de-cerdo-al-sabor-del-humo.png",
      },
      {
        name: "Pechuga de Pollo Granjero",
        description: "Pechuga marinada en hierbas silvestres y asada a la parrilla",
        price: "$10.900",
        image: null,
      },
      {
        name: "Asado de Tira en Cocción Lenta",
        description: "Cocinado por 24 horas en su propio jugo, tierno y profundo",
        price: "$17.400",
        image: null,
      },
      {
        name: "Salmón a la Tabla",
        description: "Filete de salmón rosado asado sobre tabla de cedro con costra de eneldo",
        price: "$13.900",
        image: "../assets/images/menu/parrilla/salmon-a-la-tabla.png",
      },
    ],
  },
  {
    id: "hamburguesas",
    title: "Hamburguesas Artesanales",
    subtitle: "Todas incluyen papas fritas cortadas a mano.",
    items: [
      {
        name: "La Clásica Carbón",
        description: "180g de blend de vacuno, queso cheddar, lechuga, tomate y salsa secreta",
        price: "$9.200",
        image: "../assets/images/menu/hamburguesas/la-clasica-carbon.png",
      },
      {
        name: "Smoky Burger",
        description: "180g de vacuno, tocino ahumado crujiente, cebolla caramelizada y salsa BBQ",
        price: "$10.400",
        image: "../assets/images/menu/hamburguesas/smoky-burguer.png",
      },
      {
        name: "La Indulgente",
        description: "Doble smash burger (360g de carne), extra cheddar, mayonesa de ajo y cebolla crispy",
        price: "$11.900",
        badge: { text: "Doble", style: "double" },
        image: null,
      },
      {
        name: "Fungi Burger",
        description: "Medallón de lentejas y portobellos, queso mantecoso fundido y rúcula",
        price: "$8.900",
        badge: { text: "Veggie", style: "veggie" },
        image: "../assets/images/menu/hamburguesas/fungi-burguer.png",
      },
    ],
  },
  {
    id: "acompanamientos",
    title: "Acompañamientos",
    subtitle: "Pensados para compartir en la mesa.",
    items: [
      {
        name: "Puré Rústico con Queso Azul",
        description: "Puré casero con un toque sutil de queso azul",
        price: "$4.200",
        image: "../assets/images/menu/acompanamientos/pure-rustico-con-queso-azul.png",
      },
      {
        name: "Verduras Asadas al Rescoldo",
        description: "Zapallo italiano, pimentones, cebolla y betarraga a la parrilla",
        price: "$3.900",
        image: null,
      },
      {
        name: "Ensalada de la Estación",
        description: "Mix de hojas verdes, palta, frutos secos y vinagreta de miel-mostaza",
        price: "$4.500",
        image: "../assets/images/menu/acompanamientos/ensalada-de-la-estacion.png",
      },
      {
        name: "Papas Fritas Caseras",
        description: "Cortadas a mano, doble cocción",
        price: "$3.500",
        image: "../assets/images/menu/acompanamientos/papas-fritas-caseras.png",
      },
    ],
  },
  {
    id: "bebidas",
    title: "Líquidos",
    subtitle: "Bebidas y coctelería para acompañar cada momento.",
    items: [
      {
        name: "Bebida Express",
        description: "Línea Coca-Cola",
        price: "$2.200",
        badge: { text: "350ml", style: "default" },
        image: null,
      },
      {
        name: "Limonada Menta Jengibre",
        description: "Preparada en casa, refrescante y natural",
        price: "$3.800",
        badge: { text: "500ml", style: "default" },
        image: "../assets/images/menu/bebidas/limonada-menta-jengibre.png",
      },
      {
        name: "Kross Stout",
        description: "Cerveza artesanal nacional, notas a café y chocolate",
        price: "$4.500",
        badge: { text: "500ml", style: "default" },
        image: null,
      },
      {
        name: "Kunstmann Torobayo",
        description: "Cerveza artesanal del sur de Chile",
        price: "$3.600",
        badge: { text: "330ml", style: "default" },
        image: null,
      },
      {
        name: "Pisco Sour Ahumado",
        description: "Pisco chileno, limón sutil y un toque de jarabe de goma ahumado",
        price: "$5.200",
        image: "../assets/images/menu/bebidas/pisco-sour-ahumado.png",
      },
      {
        name: "Jugo Natural de Temporada",
        description: "Fruta fresca según disponibilidad del día",
        price: "$3.200",
        image: "../assets/images/menu/bebidas/jugo-natural-de-temporada.png",
      },
    ],
  },
  {
    id: "postres",
    title: "El Final Dulce",
    subtitle: "Porque toda buena historia merece un buen cierre.",
    items: [
      {
        name: "Volcán de Chocolate con Helado",
        description: "Bizcocho de chocolate amargo con centro líquido y helado de vainilla",
        price: "$4.900",
        image: "../assets/images/menu/postres/volcan-de-chocolate-con-helado.png",
      },
      {
        name: "Celestino de Manjar Casero",
        description: "Panqueques tibios rellenos de manjar de campo y azúcar flor",
        price: "$4.500",
        image: "../assets/images/menu/postres/celestino-de-manjar-casero.png",
      },
      {
        name: "Mousse de Maracuyá",
        description: "Postre frío, ácido y refrescante para limpiar el paladar",
        price: "$3.900",
        image: null,
      },
      {
        name: "Flan Casero con Crema",
        description: "El clásico flan de la abuela con harto caramelo",
        price: "$3.500",
        image: "../assets/images/menu/postres/flan-casero-con-crema.png",
      },
    ],
  },
];

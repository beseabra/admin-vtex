import { Service } from '@vtex/api'

const folder = {
  name: "Todos os Produtos",
  children: [
    {
      name: "Eletrodomésticos",
      children: [
        { name: "Geladeiras" },
        { name: "Máquinas de Lavar" },
        { name: "Micro-ondas" },
        { name: "Fogões" },
        { name: "Fornos" },
      ],
    },
    {
      name: "Eletrônicos",	
      children: [
        { name: "TVs" },
        { name: "Smartphones" },
        { name: "Câmeras" },
        {
          name: "Computadores",
          children: [
            { name: "Laptops" },
            { name: "Desktops" },
            { name: "Monitores" },
            { name: "Tablets" },
          ],
        },
      ],
    },
    {
      name: "Móveis",
      children: [
        { name: "Sofás" },
        { name: "Mesas" },
        { name: "Cadeiras" },
        { name: "Camas" },
        { name: "Guarda-roupas"},
      ],
    },
  ],
}

const categories = [
  {
    id: 123,
    name: "Eletrônicos",
    subCategories: [
      { id: 456, name: "TVs" },
      { id: 789, name: "Smartphones" },
      { id: 1112, name: "Câmeras" }
    ]
  },
  {
    id: 1011,
    name: "Computadores",
    subCategories: [
      { id: 1213, name: "Laptops" },
      { id: 1415, name: "Desktops" },
      { id: 1617, name: "Monitores" }
    ]
  },
  {
    id: 1819,
    name: "Eletrodomésticos",
    subCategories: [
      { id: 2021, name: "Geladeiras" },
      { id: 2223, name: "Máquinas de Lavar" },
      { id: 2425, name: "Micro-ondas" }
    ]
  },
  {
    id: 2627,
    name: "Móveis",
    subCategories: [
      { id: 2829, name: "Sofás" },
      { id: 3031, name: "Mesas" },
      { id: 3233, name: "Cadeiras" }
    ]
  },
  {
    id: 3435,
    name: "Roupas",
    subCategories: [
      { id: 3637, name: "Camisas" },
      { id: 3839, name: "Calças" },
      { id: 4041, name: "Casacos" }
    ]
  },
  {
    id: 4243,
    name: "Esportes",
    subCategories: [
      { id: 4445, name: "Futebol" },
      { id: 4647, name: "Basquete" },
      { id: 4849, name: "Corrida" }
    ]
  }
]

export default new Service({
  graphql: {
    resolvers: {
      Query: {
        helloworld: () => `Service number: ${Math.random()}`,
        folder: () => folder,
        categories: () => categories
      }
    }
  }
})

import { Service } from '@vtex/api'

const folder = {
  name: "",
  children: [
    {
      name: "list",
      children: [
        { name: "Avocados" },
        { name: "Bananas" },
        { name: "Berries" },
        { name: "Oranges" },
        { name: "Pears" },
      ],
    },
    {
      name: "Drinks",
      children: [
        { name: "Apple Juice" },
        { name: "Chocolate" },
        { name: "Coffee" },
        {
          name: "Tea",
          children: [
            { name: "Black Tea" },
            { name: "Green Tea" },
            { name: "Red Tea" },
            { name: "Matcha" },
          ],
        },
      ],
    },
    {
      name: "Vegetables",
      children: [
        { name: "Beets" },
        { name: "Carrots" },
        { name: "Celery" },
        { name: "Lettuce" },
        { name: "Onions" },
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

export interface CoffeeProps {
  id: string
  image: string
  name: string
  description: string
  price: number
  tags: string[]
}

export const coffees: CoffeeProps[] = [
  {
    id: '1',
    image: '/coffees/expresso.png',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['tradicional'],
  },
  {
    id: '2',
    image: '/coffees/americano.png',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['tradicional'],
  },
  {
    id: '3',
    image: '/coffees/expresso-cremoso.png',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['tradicional'],
  },
  {
    id: '4',
    image: '/coffees/cafe-gelado.png',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['tradicional', 'gelado'],
  },
  {
    id: '5',
    image: '/coffees/cafe-com-leite.png',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '6',
    image: '/coffees/latte.png',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '7',
    image: '/coffees/capuccino.png',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '8',
    image: '/coffees/macchiato.png',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '9',
    image: '/coffees/mocaccino.png',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '10',
    image: '/coffees/chocolate-quente.png',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: ['especial', 'com leite'],
  },
  {
    id: '11',
    image: '/coffees/cubano.png',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: ['especial', 'alcoólico', 'gelado'],
  },
  {
    id: '12',
    image: '/coffees/havaiano.png',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: ['especial'],
  },
  {
    id: '13',
    image: '/coffees/arabe.png',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: ['especial'],
  },
  {
    id: '14',
    image: '/coffees/irlandes.png',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['especial', 'alcoólico'],
  },
]

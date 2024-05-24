export interface projectDatabase {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export const projectDatabase: projectDatabase[] = [
  {
    title: 'Smiles',
    description: 'Alocado no cliente Smiles, desenvolvo interfaces e sistemas com o objetivo de aumentar a receita do nosso cliente!',
    image: 'smiles.png',
    link: 'https://www.smiles.com.br/'
  },
  {
    title: 'Paglitur',
    description: 'Cliente com mais de 52 anos no mercado, prototipamos e desenvolvemos um novo site totalmente inovador com o objetivo de realizar um novo branding na companhia!',
    image: 'paglitur.png',
    link: 'https://www.paglitur.com.br/'
  }
];

export interface projectDatabase {
  pt: {
    title: string;
    description: string;
    image: string;
    link?: string;
  };
  en: {
    title: string;
    description: string;
    image: string;
    link?: string;
  };
}

export const projectDatabase: projectDatabase[] = [
  {
    pt: {
      title: 'Smiles',
      description: 'Alocado no cliente Smiles, desenvolvo interfaces e sistemas com o objetivo de aumentar a receita do nosso cliente!',
      image: 'smiles.png',
      link: 'https://www.smiles.com.br/'
    },
    en: {
      title: 'Smiles',
      description: 'Allocated to the Smiles client, I develop interfaces and systems with the aim of increasing our client\'s revenue!',
      image: 'smiles.png',
      link: 'https://www.smiles.com.br/'
    }
  },
  {
    pt: {
      title: 'Paglitur',
      description: 'Cliente com mais de 52 anos no mercado, prototipamos e desenvolvemos um novo site totalmente inovador com o objetivo de realizar um novo branding na companhia!',
      image: 'paglitur.png',
      link: 'https://www.paglitur.com.br/'
    },
    en: {
      title: 'Paglitur',
      description: 'Client with more than 52 years in the market, we prototyped and developed a totally innovative new website with the aim of creating a new branding in the company!',
      image: 'paglitur.png',
      link: 'https://www.paglitur.com.br/'
    }
  }
];

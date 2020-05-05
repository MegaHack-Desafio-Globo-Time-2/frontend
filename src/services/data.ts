import flay from '../assets/music/flay.jpg';
import mari from '../assets/music/mari.jpeg';
import bbbEvent from '../assets/bbb-event.jpg';
import babu from '../assets/news/babu.jpg';
import time from '../assets/news/time.jpg';

interface Evento {
  highlight: any;
  desc: string;
}

interface TudoConectadoItem {
  title: string;
  src: string;
}

interface TudoConectado {
  music: TudoConectadoItem[];
  news: TudoConectadoItem[];
  events: Evento[];
}

const Dados: TudoConectado = {
  music: [
    {
      title: '',
      src: flay,
    },
    {
      title: '',
      src: mari,
    },
  ],
  news: [
    {
      title: 'Time comemora com Babu',
      src: babu,
    },
    {
      title: 'Novo jogo entre...',
      src: time,
    },
  ],
  events: [
    {
      highlight: bbbEvent,
      desc: 'Votação BBB',
    },
    {
      highlight: null,
      desc: 'Campeonato Brasileiro',
    },
  ],
};

export default Dados;

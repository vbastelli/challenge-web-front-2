import React from 'react';
import './estilo.css';

// Exemplo de dados com imagens e links para as notícias
const noticias = [
  {
    imgSrc: 'noticia1.png', // Substitua pelo caminho da sua imagem
    link: 'https://www.grandepremio.com.br/formula-e/noticias/formula-e-programa-atividade-especifica-pilotas-pre-temporada-valencia/',
    title: 'Fórmula E programa atividade específica para pilotas na pré-temporada de Valência' // Adicione um título para cada notícia
  },
  {
    imgSrc: 'noticia2.png',
    link: 'https://motorsport.uol.com.br/formula-e/news/f-e-maloney-e-anunciado-como-companheiro-de-di-grassi-na-abt-lola-yamaha/10657904/',
    title: 'Fórmula E: Maloney é anunciado como companheiro de Di Grassi'
  },
  {
    imgSrc: 'noticia3.png',
    link: 'https://motorsport.uol.com.br/formula-e/news/f-e-cofundador-promete-evento-maior-e-melhor-em-sao-paulo/10653028/',
    title: 'F-E: Cofundador promete evento "maior e melhor" em São Paulo'
  },
  {
    imgSrc: 'noticia4.png',
    link: 'https://www.poder360.com.br/poder-sportsmkt/audiencia-da-formula-e-cresce-35-na-temporada-2023-2024/',
    title: 'Audiência da Fórmula E cresce 35% na temporada 2023-2024'
  },
  {
    imgSrc: 'noticia5.png',
    link: 'https://motorsport.uol.com.br/formula-e/news/formula-e-guenther-e-anunciado-na-penske-como-companheiro-de-vergne/10651561/',
    title: 'Fórmula E: Guenther é anunciado na Penske como companheiro de Vergne'
  },
  {
    imgSrc: 'noticia6.png',
    link: 'https://motorsport.uol.com.br/formula-e/news/abarth-dodge-e-hyundai-especuladas-como-parceiras-da-penske-na-f-e-diz-site/10644707/',
    title: 'Abarth, Dodge e Hyundai são especuladas como parceiras da Penske na F-E, diz site'
  },
  // Adicione mais objetos conforme necessário
];

const Noticias = () => {
  return (
    <div className="news-page">
      <h1>Últimas Notícias</h1>
      <div className="news-grid">
        {noticias.map((noticia, index) => (
          <a key={index} href={noticia.link} target="_blank" rel="noopener noreferrer" className="news-item">
            <img src={noticia.imgSrc} alt={`Notícia ${index + 1}`} className="news-image" />
            <h2 className="news-title">{noticia.title}</h2> {/* Adicionando o título da notícia */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Noticias;

import React from 'react';
import { Link } from 'react-router-dom';

interface Item {
  titulo: string;
  link: string;
  imagen: string;
  autor: string;
}

const CardListVideo: React.FC<{ data: Item[] }> = ({ data }) => {
  return (
    <section>
      <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((item, index) => (
          
            <div className="col">
              <Link to={'/video-recipe-view'} state={item} style={{textDecoration: 'none'}} aria-label={item.titulo}>
              <div  key={index} className="card h-100">
                <div className="card-body">
                  <img src={item.imagen} className="card-img-top" alt=""></img>
                  <h2 className="card-title mt-2">{item.titulo}</h2>
                  <p className='card-text'>{item.autor}</p>
                </div>
              </div>
              </Link>
            </div>
          ))}

      </div>
    </section>
  );
};

export default CardListVideo;
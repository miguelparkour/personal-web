import React, { useEffect } from 'react';
import './HomePage.css';  // Importa el CSS desde un archivo separado.



function HomePage() {

  useEffect(() => {
    // Añade la clase al body cuando el componente se monta
    document.body.classList.add('body-no-scroll');
    
    // Quita la clase del body cuando el componente se desmonta
    return () => {
      document.body.classList.remove('body-no-scroll');
    };
  }, []);  // El array vacío asegura que este efecto solo se ejecute una vez, similar a componentDidMount y componentWillUnmount

  return (
    <div className="home-page">
      <h1>Bienvenido a mi Página Web</h1>
    </div>
  );
}

export default HomePage;

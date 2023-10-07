import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation();

  return (
    <div className="home-page">
      <div className="left-text text-group">
        <h1 className="title">{t('myNameShort')}</h1>
        <div className="line"></div>
        <p className="pagraph">{t('motivationalQuote1')}</p>
        <div className="line"></div>
      </div>
      <div className="right-text text-group">
        <h5 className="sub-title">{t('myNameLarge')}</h5>
        <div className="line"></div>
        <p className="pagraph">{t('motivationalQuote2')}</p>
        <div className="line"></div>
        <p className="pagraph">{t('motivationalQuote3')}</p>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default HomePage;

import cardapio from '../../data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';

import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => Math.random() - 0.5)
    .splice(0, 3);

  const navigate = useNavigate();

  function redirecionarParaPrato(prato : Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato } });
  }

  return (
    <>
      <section className={stylesTema.container}>
        <h3 className={stylesTema.titulo}>Recomendações da Cozinha</h3>
        <div className={styles.recomendados}>
          {pratosRecomendados.map((prato) => (
            <div key={prato.id} className={styles.recomendado}>
              <div className={styles.recomendado__imagem}>
                <img src={prato.photo} alt={prato.title} />
              </div>
              <button
                className={styles.recomendado__botao}
                onClick={() => redirecionarParaPrato(prato)}
              >
                Ver Mais
              </button>
            </div>
          ))}
        </div>
        <h3 className={stylesTema.titulo}> Nossa casa </h3>
        <div className={styles.nossaCasa}>
          <img src={nossaCasa} alt="Casa do aluroni" />
          <div className={styles.nossaCasa__endereco}>
            Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;

import cardapio from '../../data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';

function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => Math.random() - 0.5)
    .splice(0, 3);

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
              <button className={styles.recomendado__botao}>Ver Mais</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Inicio;

import styles from './paginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';

export default function paginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}

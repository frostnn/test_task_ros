import styles from './Title.module.scss';

const Title = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_title}>Test task</div>
      <div className={styles.content_subtitle}>
        rest api <a href="https://reqres.in/">reqres.in</a>
      </div>
    </div>
  );
};

export default Title;

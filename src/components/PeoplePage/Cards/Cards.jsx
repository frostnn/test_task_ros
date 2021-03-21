import styles from './Cards.module.scss';

const Cards = ({ state, inputSearchValue }) => {
  return state
    .filter((item) => {
      return item.first_name
        .toLowerCase()
        .includes(inputSearchValue.toLowerCase());
    })
    .map(({ avatar, first_name, last_name, email, id }) => (
      <div className={styles.cards} key={id}>
        <div className={styles.cards_item}>
          <div className={styles.cards_item_avatar}>
            <img src={avatar} alt={first_name} />
          </div>
          <div className={styles.cards_item_name}>
            {first_name} {last_name}
          </div>
          <div className={styles.cards_item_email}>
            <a href={email}>{email}</a>
          </div>
        </div>
      </div>
    ));
};

export default Cards;

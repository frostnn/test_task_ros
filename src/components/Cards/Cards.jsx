import './Cards.module.scss';

const Cards = ({ avatar, first_name, last_name, email }) => {
  return (
    <div className="cards">
      <div className="cards_item">
        <div className="cards_item-avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="cards_item-name">
          {first_name} {last_name}
        </div>
        <div className="cards_item-name">{email}</div>
      </div>
    </div>
  );
};

export default Cards;

import friend from '../../data/friends.json';

import css from 'css/friends.module.css';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <img src={avatar} alt="" className={css.friends__avatar} />
      <p className={css.friends__name}>{name}</p>
      <span className={isOnline ? css.online : css.offline}></span>
    </>
  );
};

<Friend avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />;

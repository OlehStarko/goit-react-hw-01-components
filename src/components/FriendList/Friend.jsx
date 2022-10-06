import css from 'css/friends.module.css';

export const Friend = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <>
      <img src={avatar} alt="" className={css.friends__avatar} />
      <p className={css.friends__name}>{name}</p>
      <span className={isOnline ? css.online : css.offline}></span>
    </>
  );
};

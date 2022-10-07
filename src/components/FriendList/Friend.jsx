import PropTypes from 'prop-types';

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

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

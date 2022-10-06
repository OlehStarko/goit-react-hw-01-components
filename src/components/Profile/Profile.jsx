import css from 'css/userCard.module.css';

export const Profile = ({
  profile: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className={css.user__container}>
      <img className={css.user__avatar} src={avatar} alt="User avatar" />
      <div className={css.user__info}>
        <h2 className={css.user__name}>{username}</h2>
        <p className={css.user__tag}>@{tag}</p>
        <p className={css.user__location}>{location}</p>
        <div className={css.user__statistics}>
          <p>
            Followers <span>{followers}</span>
          </p>
          <p>
            Views <span>{views}</span>
          </p>
          <p>
            Likes <span>{likes}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

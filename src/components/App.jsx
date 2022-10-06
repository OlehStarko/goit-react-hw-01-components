import { Profile } from './Profile/Profile';
import userProfile from '../data/user.json';
import { StatisticsList } from './Statistic/StatisticsList';
import StatisticsData from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import FriendListData from '../data/friends.json';

export const App = () => {
  return (
    <>
      <Profile profile={userProfile} />
      <StatisticsList StatisticsData={StatisticsData} />
      <FriendList FriendListData={FriendListData} />
    </>
  );
};

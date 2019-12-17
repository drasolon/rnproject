import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../components/HomeScreen';
import PostDetails from '../components/PostDetails';


const Router = createStackNavigator(
  {
    Home: HomeScreen,
    PostDetails: PostDetails,
  },
  {
    initialRouteName: 'Home',
  }
);

// returns a React Component
export default Router;
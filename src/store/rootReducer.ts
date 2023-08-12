import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import userList from './userList';
import userData from './userData';

// Use inferred return type for making correctly Redux types
export default (history: History) => ({
  userList,
  userData,
  router: connectRouter(history) as any,
  // Register more reducers...
});

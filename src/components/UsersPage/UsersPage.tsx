import React from 'react'
import s from './UsersPage.module.scss'
import { useSelector } from 'react-redux'

// Components
import { List } from '../common/List/List'
import { SearchUsersForm } from './SearchUsersForm/SearchUsersForm'
import { UserItem } from '../common/UserItem/UserItem'

// Selectors
import { selectIsUsersFetching, selectNotification, selectUsers } from '../../redux/UsersPage/Selectors'

const UsersPage: React.FC = React.memo(() => {

   const users = useSelector(selectUsers)
   const isUsersFetching = useSelector(selectIsUsersFetching)
   const notification = useSelector(selectNotification)

   return (
      <div className={s.usersPage}>
         <div className={s.search}>
            <SearchUsersForm />
         </div>
         <List
            isLoading={isUsersFetching}
            emptyText={notification}
         >
            {users.map(user => (
               <UserItem 
                  login={user.login} 
                  avatarUrl={user.avatar_url} 
                  score={user.score}
                  key={user.id} 
               />
            ))}
         </List>
      </div>
   )
})

export default UsersPage
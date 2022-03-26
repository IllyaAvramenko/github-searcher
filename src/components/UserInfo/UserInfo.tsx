import React, { useEffect } from 'react'
import s from './UserInfo.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getUserByLogin } from '../../redux/UserInfo/Actions'

import { selectCurrentUser, selectError, selectFiltredRepos, selectIsFetching, selectIsReposFetching, selectRepos, selectReposError } from '../../redux/UserInfo/Selectors'
import { SearchForm } from './SearchForm/SearchForm'
import { List } from '../common/List/List'
import { Preloader } from '../common/Preloader/Preloader'
import { RepoItem } from '../common/RepoItem/RepoItem'
import { Avatar } from '../common/Avatar/Avatar'

const UserInfo: React.FC = React.memo(() => {

   const dispatch = useDispatch()
   const { login } = useParams<{login: string}>()

   const currentUser = useSelector(selectCurrentUser)
   const isFetching = useSelector(selectIsFetching)
   const error = useSelector(selectError)
   const repos = useSelector(selectRepos)
   const filtredRepos = useSelector(selectFiltredRepos)
   const isReposFetching = useSelector(selectIsReposFetching)
   const reposError = useSelector(selectReposError)

   useEffect(() => {
      dispatch(getUserByLogin(login))
   }, [])


   if (isFetching) return <Preloader />
   if (!currentUser) return <div>Please reload page</div>
  
   const createdDate = new Date(currentUser.created_at)
   
   return (
      <div className={s.userInfo}>
         <div className={s.info}>
            <div className={s.info__avatar}>
               <Avatar url={currentUser?.avatar_url} />
            </div>
            <div className={s.info__data}>
               <p>{currentUser?.login}</p>
               <p>{currentUser?.email}</p>
               <p>{currentUser?.location}</p>
               <p>{createdDate.toDateString()}</p>
               <p>{currentUser?.followers} Followers</p>
               <p>Following {currentUser?.following}</p>
            </div>
            <div className={s.info__bio}>
               <div className={s.bio}>
                  <p>{currentUser?.bio}</p>
               </div>
            </div>
         </div>
         <div className={s.repos}>
            <div className={s.repos__wrapper}>
               <div className={s.repos__search}>
                  <SearchForm />
               </div>
               <List
                  isLoading={isReposFetching}
                  emptyText='There are no repositories found'
                  error={reposError}
                  errorMessage={reposError}
               >
                  {filtredRepos.length === 0
                     ? (
                        <>
                        {repos.map(repo => (
                           <RepoItem 
                              repoUrl={repo.clone_url}
                              forksCount={repo.forks_count}
                              starsCount={repo.stargazers_count}
                              name={repo.name} 
                              key={repo.id} 
                           />
                        ))}
                        </>
                     ) 
                     : (
                        <>
                        {filtredRepos.map(repo => (
                           <RepoItem 
                              repoUrl={repo.clone_url}
                              forksCount={repo.forks_count}
                              starsCount={repo.stargazers_count}
                              name={repo.name} 
                              key={repo.id} 
                           />
                        ))}
                        </>
                     )
                  }
               </List>
            </div>
         </div>
      </div>
   )
})

export default UserInfo
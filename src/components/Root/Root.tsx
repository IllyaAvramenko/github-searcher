import React, { Suspense } from 'react'
import s from "./Root.module.scss"
import { Redirect, Route, Switch } from 'react-router-dom'
import { Preloader } from '../common/Preloader/Preloader'
const UsersPage = React.lazy(() => import('../UsersPage/UsersPage'))
const UserInfo = React.lazy(() => import('../UserInfo/UserInfo'))


export const Root: React.FC = React.memo(() => {
   return (
      <div className={s.App}>
         <div className={s.container}>
            <div className={s.body}>
               <header className={s.header}>
                  <h1>GitHub Searcher</h1>
               </header>
               <main className={s.main}>
                  <Suspense fallback={<Preloader />}>
                     <Switch>
                        <Route exact path="/users" component={UsersPage} />
                        <Route path="/users/:login" component={UserInfo} />
                        <Route path="*" component={() => <Redirect to="/users" />} />
                     </Switch>
                  </Suspense>
               </main>
            </div>
         </div>
      </div>
   )
});
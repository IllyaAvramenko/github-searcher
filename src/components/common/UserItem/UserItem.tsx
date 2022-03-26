import React from "react";
import { Link } from "react-router-dom";
import s from './UserItem.module.scss'

interface IProps {
   avatarUrl?: string
   login: string
   score: number
}

export const UserItem: React.FC<IProps> = React.memo(({ avatarUrl, login, score }) => {

   return (
      <div className={s.user} >
         <Link to={`/users/${login}`} className={s.user__link}>
            <div className={s.user__avatar}>
               <img src={avatarUrl} alt="user avatar" />
            </div>
            <div className={s.user__name}>
               <p>{login}</p>
            </div>
            <div className={s.user__repo}>
               <p>Repo: {score}</p>
            </div>
         </Link>
      </div>
   )
})
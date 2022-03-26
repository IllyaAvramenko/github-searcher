import React from "react";
import s from './RepoItem.module.scss'

interface IProps {
   name: string
   forksCount: number
   starsCount: number
   repoUrl: string
}

export const RepoItem: React.FC<IProps> = React.memo(({ name, forksCount, starsCount, repoUrl }) => {

   return (
      <div className={s.repo}>
         <a href={repoUrl} className={s.repo__link}>
            <div className={s.user__name}>
               <p>{name}</p>
            </div>
            <div className={s.user__repo}>
               <p>{forksCount} Forks</p>
               <p>{starsCount} Stars</p>
            </div>
         </a>
      </div>
   )
})
import React from 'react'
import { Preloader } from '../Preloader/Preloader'
import s from './List.module.scss'

interface IProps {
   isLoading?: boolean
   emptyText?: string
   error?: any
   errorMessage?: string
   children: React.ReactNode
}

export const List: React.FC<IProps> = React.memo(({ 
   children, 
   emptyText, 
   isLoading, 
   error,
   errorMessage
}) => {

   const items = (React.Children.count(children) !== 0)
      ? children
      : <div style={{ textAlign: "center" }} >{emptyText}</div>

   return (
      <div className={s.list}>
         <div className={s.list__wrapper}>
            {error 
               ? errorMessage 
               : isLoading
                  ? <Preloader/>
                  : items}
         </div>
      </div>
   )
})
import React from 'react'
import s from './Avatar.module.scss'

interface IProps {
   url: string | undefined
   width?: string
   height?: string
}

export const Avatar: React.FC<IProps> = React.memo(({ url, width, height }) => {
   return (
      <div className={s.avatar} style={{ width, height }}>
         <img src={url} alt="user avatar"/>
      </div>
   )
})
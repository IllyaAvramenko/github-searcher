import React from "react"
import s from './Input.module.scss'
import { FieldProps } from "formik"

interface IProps {
   type?: 'text' | 'password'
   label?: string
   id?: string
}
export const Input: React.FC<IProps & FieldProps> = React.memo(({
   field, 
   form, 
   meta, 
   type, 
   label,
   id,
   ...props
}) => {

   return (
      <div className={s.input}>
         <input 
            type="text" 
            id={id}
            {...field}
            {...props}
            required
         />
         <label htmlFor={id}>{label}</label>
      </div>
   )
})
import React from 'react'

import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
import { Input } from '../../common/Input/Input';
import { searchUsers } from '../../../redux/UsersPage/Actions';

interface IForm {
   username: string
}

export const SearchUsersForm: React.FC = React.memo(() => {

   const dispatch = useDispatch()

   const initialValues = { username: '' }

   const onSubmit = (values: IForm, actions: FormikHelpers<IForm>) => {}

   const debounce = (fn: any, ms: number) => {
      let timeout: any
      return function() {
         // @ts-ignore
         const fnCall = () => { fn.apply(this, arguments) }
         clearTimeout(timeout)
         timeout = setTimeout(fnCall, ms)
      }
   }

   let onChange = (e: any) => {
      dispatch(searchUsers(e.target.value))
   }

   onChange = debounce(onChange, 700)

   return (
      <Formik
         initialValues={initialValues}
         onSubmit={onSubmit}
      >
      {() => (
         <Form onChange={onChange} style={{ width: '100%' }}>
            <Field 
               id="username" 
               name="username" 
               label="Search for Users"
               component={Input} 
            />
         </Form>
      )}
    </Formik>
   )
})
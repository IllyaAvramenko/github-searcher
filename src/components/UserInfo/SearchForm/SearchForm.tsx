import React from 'react'

import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
import { searchInRepos } from '../../../redux/UserInfo/Actions';
import { Input } from '../../common/Input/Input';

interface IForm {
   repoName: string
}

export const SearchForm: React.FC = React.memo(() => {

   const dispatch = useDispatch()

   const initialValues = {
      repoName: ''
   }

   const onSubmit = ({ repoName }: IForm, actions: FormikHelpers<IForm>) => {
      dispatch(searchInRepos(repoName))
   }

   return (
      <Formik
         initialValues={initialValues}
         // validationSchema={validationSchema}
         onSubmit={onSubmit}
      >
      {({ submitForm }) => (
         <Form onKeyUp={submitForm}>
            <Field 
               id="repoName" 
               name="repoName" 
               label="Search for User's Repositories" 
               component={Input} 
            />
         </Form>
      )}
    </Formik>
   )
})
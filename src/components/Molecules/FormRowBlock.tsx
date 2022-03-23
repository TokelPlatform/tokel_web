import React, { ReactElement } from "react"

import { Field } from 'formik';
import FormRow from '../Atoms/FormRow';
import FormikErr from "../Atoms/FormikErr";

const defaultProps = {
}

type FormRowProps = {
    name: string,
    labelText: string,
    type: string,
    component: string,
    rows: number
}

const FormRowBlock = ({name, labelText, type, component, rows=1}: FormRowProps): ReactElement => {
  return (
    <FormRow>
        <label htmlFor={name}>{labelText}</label>
        <Field type={type} name={name} component={component} rows={rows} />
        <FormikErr name={name} component="div" />       
    </FormRow>
  )
}

FormRowBlock.defaultProps = defaultProps
export default FormRowBlock

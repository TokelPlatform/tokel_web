import React, { ReactElement } from 'react';

// import breakpoints from '../../styles/breakpoints';
import styled from '@emotion/styled';
import { FlexRow } from 'styles/common';
// import addToMailchimp from 'gatsby-plugin-mailchimp';

import { Field, Form, Formik } from 'formik';
import FormikErr from 'components/Atoms/FormikErr';
import * as yup from 'yup';

const MailchimpFormRoot = styled(FlexRow)`
  display: grid;
`;

const SubmitButton = styled.button`
  width: 150px;
  height: 100%;
  border-radius: 0 0.25rem 0.25rem 0;
  outline: inherit;
  border: none;
  cursor: pointer;
  background-color: white;
  font-weight: 700;
  font-size: var(--font-size-p);
  font-family: var(--font-family-primary);
  z-index: 1;
`;

const Row = styled.div`
  color: white;
  font-size: 16px;
  height: 100%;
  input,
  input {
    width: 250px;
    height: 30px;
    border-radius: 0.25rem 0 0 0.25rem;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    font-size: var(--font-size-p);
    font-family: var(--font-family-primary);
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;
const SubscriptionForm = styled(Form)`
  display: flex;
  height: 100%;
`;

const MailchimpForm = (): ReactElement => {
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <MailchimpFormRoot>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={() =>
          yup.object({ email: yup.string().email().required('Must enter email address') })
        }
        onSubmit={() => {
          setSubmitted(true);
          console.log('yeh');
          //   try {
          //     const result = await addToMailchimp(values.email, {});
          //     console.log(result);
          //   } catch (e) {
          //     console.log(e);
          //   }
        }}
      >
        {({ isSubmitting }) => (
          <SubscriptionForm>
            {!submitted ? (
              <Wrapper>
                <Row>
                  <Field type="email" name="subscriptionemail" />
                  <FormikErr name="subscriptionemail" component="div" />
                </Row>

                <SubmitButton
                  type="submit"
                  disabled={isSubmitting || submitted}
                  submitted={submitted}
                  name="SubmitButton"
                >
                  Subscribe
                </SubmitButton>
              </Wrapper>
            ) : (
              <h5>Thank you</h5>
            )}
          </SubscriptionForm>
        )}
      </Formik>
    </MailchimpFormRoot>
  );
};

export default MailchimpForm;

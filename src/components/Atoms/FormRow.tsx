import styled from "@emotion/styled"

const FormRow = styled.div`
  color: white;
  font-size: 16px;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  label {
    margin-right: 2rem;
    padding-bottom: 0.25rem;
    opacity: 0.8;
  }
  input, textarea {
    min-width: 300px;
    border-radius: 0.25rem;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    background-color: #D6D6D6;
    border: none;
    font-size: var(--font-size-p);
    font-family: var(--font-family-primary);
  }
  select {
    appearance: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: #D6D6D6;
    border-radius: 0.25rem;
    border: none;
    font-size: var(--font-size-p);
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
  }
`

export default FormRow;
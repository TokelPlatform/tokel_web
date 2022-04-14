import styled from '@emotion/styled';

type InputProps = {
  width: string;
  backgroundColor?: string;
};

const Input = styled.input<InputProps>`
  border-radius: 0.25rem;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  background-color: ${p => p.backgroundColor ?? '#000'};
  border: 1px solid var(--color-base-slate);
  font-size: var(--font-size-p);
  font-family: var(--font-family-primary);
  width: ${p => p.width ?? 'auto'};
  color: var(--color-almostWhite);
`;

export default Input;

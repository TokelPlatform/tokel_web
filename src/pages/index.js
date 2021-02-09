import * as React from "react"
import styled from "@emotion/styled"

const MainPage = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  color: var(--color-almostWhite);
`

// markup
const IndexPage = () => {
  return (
    <main>
      <MainPage>
        <Title>Komodo ecosystem’s Token Platform.</Title>
      </MainPage>
    </main>
  )
}

export default IndexPage

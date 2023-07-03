import { ReactElement } from 'react'

import * as Styles from './styles'
import Image from 'next/image'

export default function Main(): ReactElement {
  return (
    <Styles.MainContainer>
      <Styles.Logo>
          <Image className='logo' src='/images/logo.svg' width={500} height={500} alt='representação de um atomo escrito react avançado ao lado' />
      </Styles.Logo>
      <Styles.Title>
        <h1 className='title'>React Avançado - Boilerplate</h1>
      </Styles.Title>
      <Styles.Description>
        <p>TypeScript, ReactJS, NextJS e Styled Components</p>
      </Styles.Description>
      <Styles.Illustration>
          <Image className='hero-illustration' src='/images/hero-illustration.svg' width={500} height={500} alt='desenvolvedor sentado em frente aos monitores' />
      </Styles.Illustration>    
    </Styles.MainContainer>
  )
}

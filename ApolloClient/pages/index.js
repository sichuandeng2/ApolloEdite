import React from 'react'
import ClientServer from '../components/ClientServer'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ListAll from './ListAll'
import {ThemeProvider, CSSReset,theme} from 'viviui'

function HomePage(){

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset/>
        <ApolloProvider client= {ClientServer}>
        <ListAll/>
    </ApolloProvider>
      </ThemeProvider>
    </div>
  )
}

export default HomePage
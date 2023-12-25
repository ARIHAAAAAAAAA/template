import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';



export const client = new ApolloClient({
  uri: 'http://localhost:4500/graphql',
  cache: new InMemoryCache(),
});
// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);



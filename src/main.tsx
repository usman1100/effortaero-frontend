import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import App from './App'

const client = new QueryClient({})

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<App />
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

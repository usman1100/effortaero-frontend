import { createTheme, ScopedCssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { orange } from '@mui/material/colors'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import App from './App'

declare module '@mui/material/styles' {
	interface Theme {
		status: {
			danger: string
		}
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		status?: {
			danger?: string
		}
	}
}

const client = new QueryClient({})

const theme = createTheme({
	typography: {
		fontFamily: [
			'Quicksand',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
})

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<ThemeProvider theme={theme}>
				<App />
				<ReactQueryDevtools />
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

import { Box } from '@mui/system'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'

export default function Auth() {
	interface LoginDetails {
		email: string
		password: string
	}

	const validationSchema = (values: LoginDetails): LoginDetails | null => {
		const errors: LoginDetails = {
			email: '',
			password: '',
		}
		if (!values.email) {
			errors.email = 'Enter an email'
		}

		if (values.password.length < 8) {
			errors.password = 'Length must be 8 characters or more'
		}

		return errors.email || errors.password ? errors : null
	}

	const formik = useFormik<LoginDetails>({
		initialValues: {
			email: '',
			password: '',
		},
		validate: validationSchema as LoginDetails,
		onSubmit: e => {
			console.log(e)
		},
	})

	return (
		<Grid
			container
			sx={{
				height: '100vh',
			}}
		>
			<Grid item lg={4}>
				<Box
					display='grid'
					sx={{
						marginTop: '30%',
						gridTemplateColumns: '1fr',
						gap: '5%',
						padding: '5%',
					}}
				>
					<Button variant='outlined' color='primary'>
						Facebook
					</Button>
					<Button variant='outlined' color='secondary'>
						Google
					</Button>
					<Button variant='outlined' color='success' startIcon={null}>
						Github
					</Button>
				</Box>
			</Grid>

			<Grid item lg={8} margin='auto' padding='2%'>
				<Typography variant='h1' textAlign='center'>
					EfforAero
				</Typography>

				<Typography variant='h4' textAlign='center'>
					Software Cost Estimation Redefined
				</Typography>

				<form onSubmit={formik.handleSubmit}>
					<TextField
						name='email'
						type='email'
						id='email'
						placeholder='Enter your email'
						required
						fullWidth
						margin='normal'
						value={formik.values.email}
						onChange={formik.handleChange}
						error={
							formik.touched.email && Boolean(formik.errors.email)
						}
						helperText={formik.touched.email && formik.errors.email}
					/>
					<TextField
						name='password'
						type='password'
						id='password'
						placeholder='Enter your password'
						required
						fullWidth
						margin='normal'
						value={formik.values.password}
						onChange={formik.handleChange}
						error={
							formik.touched.password &&
							Boolean(formik.errors.password)
						}
						helperText={
							formik.touched.password && formik.errors.password
						}
					/>

					<Button type='submit' variant='contained' size='large'>
						Login
					</Button>
				</form>
			</Grid>
		</Grid>
	)
}

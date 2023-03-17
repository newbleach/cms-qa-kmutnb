import {
	Box,
	Button,
	CardContent,
	Grid,
	Link,
	TextField,
	Typography
} from '@mui/material';
import Card from '@mui/material/Card';
import type React from 'react';
import type { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.scss';

export default function LoginPage(): ReactElement {
	const navigate = useNavigate();
	const style = {
		mainContainer: {
			backgroundImage: `url(${'../../../public/icons/bg.jpg'})`
		}
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		// const data = new FormData(event.currentTarget);
		// console.log({
		// 	email: data.get('email'),
		// 	password: data.get('password')
		// });
		navigate('/home');
	};

	return (
		<div style={style.mainContainer}>
			<div className={styles.login}>
				<Card sx={{ minWidth: 275 }}>
					<CardContent>
						<div className={styles.header}>
							<img src='icons/KMUTNB.png' width={80} alt='kmutnb-icon' />
							<Typography variant='h5' component='div' className={styles.label}>
								QA CMS
							</Typography>
						</div>
						<div className={styles.loginForm}>
							<Box
								component='form'
								onSubmit={onSubmit}
								noValidate
								sx={{ mt: 1 }}
								maxWidth={400}
							>
								<TextField
									margin='normal'
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
									autoFocus
								/>
								<TextField
									margin='normal'
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='current-password'
								/>
								{/* <FormControlLabel
										control={<Checkbox value='remember' color='primary' />}
										label='Remember me'
									/> */}
								<Button
									type='submit'
									fullWidth
									variant='contained'
									sx={{ mt: 3, mb: 2 }}
								>
									Sign In
								</Button>
								<Grid container>
									<Grid item xs>
										<Link href='/#' variant='body2'>
											Forgot password?
										</Link>
									</Grid>
								</Grid>
							</Box>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

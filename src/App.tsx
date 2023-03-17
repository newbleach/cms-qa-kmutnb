import LoadingOrError from 'components/LoadingOrError';
import type { ReactElement } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const LoginPage = lazy(async () => import('pages/login/login'));
const Details = lazy(async () => import('pages/Details'));
const Home = lazy(async () => import('pages/home/homeLanding'));

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path='/' element={<LoginPage />} />
					<Route path='/home' element={<Home />} />
					<Route path=':fruitName' element={<Details />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

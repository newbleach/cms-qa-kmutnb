import LoadingOrError from 'components/LoadingOrError';
import type { ReactElement } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const LoginPage = lazy(async () => import('pages/login/login'));
const Details = lazy(async () => import('pages/Details'));
const Home = lazy(async () => import('pages/home/homeLanding'));
const C1 = lazy(async () => import('pages/C1/C1'));
const C2 = lazy(async () => import('pages/C2/C2'));
const C3 = lazy(async () => import('pages/C3/C3'));
const C4 = lazy(async () => import('pages/C4/C4'));

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path='/' element={<LoginPage />} />
					<Route path='/home' element={<Home />} />
					<Route path='/C1' element={<C1 />} />
					<Route path='/C2' element={<C2 />} />
					<Route path='/C3' element={<C3 />} />
					<Route path='/C4' element={<C4 />} />
					<Route path=':fruitName' element={<Details />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

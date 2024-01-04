import { Routes, Route } from 'react-router-dom';
import { AdminPage, LoginPage, NotFoundPage, PageOne } from './pages';

function App() {
	return (
		<>
			<Routes>
				<Route path='/admin' element={<AdminPage />}>
					<Route path='/admin/page-one' element={<PageOne />} />
				</Route>
				<Route path='/login' element={<LoginPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

export default App;

import { Outlet } from 'react-router';
import { Sidebar, AdminHeader } from '../../components/layout';

const AdminPage = () => {
	return (
		<div className='flex w-full'>
			<Sidebar />
			<div className='w-full flex flex-col'>
				<AdminHeader />
				<Outlet />
			</div>
		</div>
	);
};

export default AdminPage;

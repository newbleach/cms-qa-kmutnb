import { faker } from '@faker-js/faker';
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip
} from 'chart.js';
import MainLayout from 'components/MainLayout/MainLayout';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const
		},
		title: {
			display: true,
			text: 'C3'
		}
	}
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
	labels,
	datasets: [
		{
			label: 'นักศึกษารับเข้า ป ตรี',
			data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
			backgroundColor: 'rgba(255, 99, 132, 0.5)'
		},
		{
			label: 'นักศึกษาสำเร็จการศึกษา',
			data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
			backgroundColor: 'rgba(53, 162, 235, 0.5)'
		}
	]
};

export default function C3() {
	return (
		<MainLayout>
			<Bar options={options} data={data} />
		</MainLayout>
	);
}

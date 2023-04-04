import InboxIcon from '@mui/icons-material/MoveToInbox';
import {
	CssBaseline,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
type MainLayoutPropsType = PropsWithChildren<{}>;
const drawerWidth = 240;

const MainLayout = ({ children }: MainLayoutPropsType) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/C1');
	};
	const handleClickHome = () => {
		navigate('/home');
	};
	return (
		<div>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar
					position='fixed'
					sx={{
						width: `calc(100% - ${drawerWidth}px)`,
						ml: `${drawerWidth}px`
					}}
					style={{ background: '#AC3520' }}
				>
					<Toolbar>
						<Typography variant='h6' noWrap component='div'>
							QA KMUTNB
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						'& .MuiDrawer-paper': {
							width: drawerWidth,
							boxSizing: 'border-box'
						}
					}}
					variant='permanent'
					anchor='left'
				>
					<Toolbar />
					<Divider />
					<List>
						<ListItem key={'home'} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<ListItemText primary={'Home'} onClick={handleClickHome} />
							</ListItemButton>
						</ListItem>
						<ListItem key={'test'} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<ListItemText primary={'C1'} onClick={handleClick} />
							</ListItemButton>
						</ListItem>
						<ListItem key={'test1'} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<ListItemText primary={'C2'} />
							</ListItemButton>
						</ListItem>
						<ListItem key={'test2'} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<ListItemText primary={'C3'} />
							</ListItemButton>
						</ListItem>
						<ListItem key={'test3'} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<ListItemText primary={'C4'} />
							</ListItemButton>
						</ListItem>
					</List>
					{/* <Divider />
					<List>
						{['All mail', 'Trash', 'Spam'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemIcon>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List> */}
				</Drawer>
				<Box
					component='main'
					sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
				>
					<Toolbar />
					{children}
				</Box>
			</Box>
		</div>
	);
};

export default MainLayout;

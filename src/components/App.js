import { SignUp, DashBoard, Login } from './index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/style.css';
import { AuthProvider } from '../context/AuthContext';
import { Switch, Route } from 'react-router-dom';
function App() {
	return (
		<AuthProvider>
			<Switch>
				<div className='App container  d-flex align-items-center justify-content-center'>
					<div className='w-100 sign-up'>
						<Route exact path='/' component={DashBoard} />
						<Route path='/login' component={Login} />
						<Route path='/signup' exact>
							<SignUp />
						</Route>
					</div>
				</div>
			</Switch>
		</AuthProvider>
	);
}

export default App;

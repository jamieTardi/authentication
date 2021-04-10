import { SignUp } from './index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/style.css';
import { AuthProvider } from '../context/AuthContext';
function App() {
	return (
		<AuthProvider>
			<div className='App container  d-flex align-items-center justify-content-center'>
				<div className='w-100 sign-up'>
					<SignUp />
				</div>
			</div>
		</AuthProvider>
	);
}

export default App;

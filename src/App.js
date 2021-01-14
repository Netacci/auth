import Signup from './components/Signup';
import {AuthProvider} from '../src/contexts/AuthContext'

function App() {
	return (
		<AuthProvider>
			<Signup />
		</AuthProvider>
	);
}

export default App;

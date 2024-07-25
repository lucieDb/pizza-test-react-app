import Home from './components/Home/Home';
import ErrorBoundary from './errorBoundary';
import { yearlyData } from './components/Pizzeria/Pizzerias';

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <Home yearlyData={yearlyData} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
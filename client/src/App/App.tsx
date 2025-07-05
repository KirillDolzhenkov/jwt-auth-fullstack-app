import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {DashBoard, Home} from '../Pages';

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dash-board' element={<DashBoard/>}/>
            </Routes>
        </Router>
    )
}

export default App

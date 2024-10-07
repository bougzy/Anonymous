
// // src/App.tsx

// import { Route, Routes } from 'react-router-dom';
// import HomePage from './HomePage';
// import Register from './Register';
// import Login from './Login';
// import Dashboard from './Dashboard';
// import AnonymousMessage from './AnonymousMessage';

// const App = () => {
//     return (
//         <>
//             <Routes>
//             <Route path="/" element={<HomePage />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/messages/:linkId" element={<AnonymousMessage />} />
//             </Routes>
//         </>
//     );
// };

// export default App;



import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import AnonymousMessage from './AnonymousMessage';
import { useParams } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/messages/:linkId" element={<AnonymousMessageWrapper />} />
            </Routes>
        </>
    );
};

const AnonymousMessageWrapper = () => {
    const { linkId } = useParams<{ linkId: string }>(); // Extracting linkId from URL parameters
    return <AnonymousMessage linkId={linkId!} />; // Passing linkId to AnonymousMessage
};

export default App;

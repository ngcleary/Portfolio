import './App.css'
import PageNotFound from "./routes/PegeNotFound.tsx";
import {createHashRouter, RouterProvider} from "react-router-dom";
import Home from "./routes/home.tsx";
import SoftwareDevelopment from "./routes/softwareDevelopment.tsx";

function App() {
    const router = createHashRouter([
        {
            path: '/',
            errorElement: <PageNotFound />,
            children: [
                { index: true, element: <Home /> },
                { path: 'softwaredevelopment', element: <SoftwareDevelopment /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App

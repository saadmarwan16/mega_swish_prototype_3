import React from 'react';
import ReactDOM from 'react-dom';

// Vanilla JavaScipt
import './js/main.js';

import '../styles/index.css';
import '../styles/another.css';

ReactDOM.render(
    <React.StrictMode>
        <div>
            <h1>This is the real JSX!</h1>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
)

// ReactDOM.render(
//     <React.StrictMode>
//         <div>
//             <h1>This is another real real JSX!</h1>
//         </div>
//     </React.StrictMode>,
//     document.getElementById('another-jsx')
// )
// import react and reactdom lib
import React from 'react';
import ReactDOM from 'react-dom';

//reload auto
if (module.hot) {
    module.hot.accept();
}


// create react compoent
// const App = function () {
//     return <div> Hi there ! </div>
// }

const App = () => {
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: "blue", color: "white" }}>
                Submit
            </button>
        </div>
    );
};

//Rake the react ompoennt nad show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

function App() {

    const state = useSelector(state => state.userReduser);
    console.log(state)
    const dispatch = useDispatch();


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                dispatch( {type:'LOAD_USERS', payload:value})

            })
    },[])
    // dispatch( {type:'CHOOSE_USER', payload:1})
    // dispatch( {type:'LOAD_POSTS', payload: 'posts'});

    return (
        <div className="App">
        </div>
    );
}

export default App;

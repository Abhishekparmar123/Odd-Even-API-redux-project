import { useCallback, useEffect, useState } from 'react';
import './App.css';
import AddNumber from './component/addNumber';
import Emplist from './component/emplist';
import { useDispatch } from 'react-redux';
import { counterActions } from './store';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();

  const apiCall = useCallback(async () =>{
    setLoading(true);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    try{
      const response = await fetch('https://hirebus-backend.herokuapp.com/getData', requestOptions);
      if(!response.ok){
        throw new Error("something went wrong");
      }

      const data = await response.json();
      setData(data.data);
      setNumber(data.number)
      console.log(data);
      if(data.number%2===0){
        alert("even number : " + data.number)
      }
      else{
        alert("odd number : " + data.number)
      }
    }
    catch(error){
      console.log(error);
    }
    setLoading(false)
  }, []);

  useEffect(() =>{
    apiCall();
  }, [apiCall])

  useEffect(() =>{
    dispatch(counterActions.addNumber(number))
  }, [dispatch, number])

  return (
    <div className="container pt-6">
      <div className='box has-background-primary'>
        <AddNumber number={number} apiCall={apiCall}/>
      </div>
      <div className="box">
      {
        loading && <div>
        <div className='p-5 has-text-centered'>
          <button className='button is-success is-outlined is-loading is-size-1 mb-3' style={{border: "0 solid black"}}>Loading</button>
          <p className='has-text-weight-bold is-size-5 has-text-success'>Loading...</p>
        </div>
      </div>
      }
        { !loading && <Emplist employees={data}/>}
      </div>
    </div>
  );
}

export default App;

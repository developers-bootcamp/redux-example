import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ICountersState, addOne, subtractOne } from './redux/countersSlice';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from './redux/store';
import { updateCounter } from './redux/asyncDispatch';

function App() {
  console.log(process.env)
  const counters: ICountersState = useSelector<RootState, ICountersState>(state => {
    return state.countersReducer
  })

  const dispatch = useAppDispatch()

  return (
    <div className="App">
      <span>counter:</span>
      {counters.counter}
      <button onClick={() => { dispatch(addOne()) }}>plus</button>
      <button onClick={() => { dispatch(updateCounter()) }}>minus</button>

      {counters.isLoading ? `loading: ${counters.isLoading}`: ''}
      {counters.errorMessage ? 'error :' + counters.errorMessage: ''}
    </div>
  );
}


export default App;

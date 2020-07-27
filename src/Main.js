import Content from './Content'
import React,{ Fragment,useEffect, useState, useRef } from 'react';
import axios from 'axios';

function Main(props) {
  return (
    <div className="App">
      <Content/>
    </div>
  );
}

export default Main;

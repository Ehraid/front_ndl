import { useEffect, useRef } from 'react';
import './Error404Page.css';
import Background from '../background/Background';


export default function Error404Page() {
  function focus() {
    var iframe: any = document.querySelector(".FrameGame")
    iframe?.contentWindow?.focus();
  }

  useEffect(() => {
    window.setInterval(focus, 100);
  }, [])

  return (
    <>
      <Background />
      <iframe className='FrameGame' title='Tetrix' src='http://menardbediant.fr:80' />
    </>
  );
}
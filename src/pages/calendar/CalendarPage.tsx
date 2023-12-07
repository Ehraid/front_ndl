import './Calendar.scss';
import Background from '../background/Background';
import Foreground from '../foreground/Foreground';
import Helmet from "react-helmet";

export default function TemplatePage() {
  return (
    <div>
      <Helmet>
      <script
          src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"
          async
        ></script>
      </Helmet>
        {/* Hello world */}
        <div className="awesome" style={{border: '1px solid red'}}>
          <div>
            <Foreground />
            <Background />
          </div>  <label htmlFor="name">Enter your name: </label>
          <input type="text" id="name" />
        </div>
        <p>Enter your HTML here</p>
      </div>
    );
  };
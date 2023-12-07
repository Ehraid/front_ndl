import './Foreground.scss';
import '../calendar/Calendar.scss';


export default function Foreground() {
  return (
    <div className="foreground">
              <header className="wrapper wrapper--header">
                <h1>L'éco calendrier</h1>
                <h2> 24 Faits Surprenants sur le climat"</h2>
              </header>
              <main className="wrapper--main">
                <a className="arrow arrow--left" href="https://codepen.io/michellebarker/full/obLLJv/" target="_blank">
                  <svg className="arrow-left" xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 90 90" xmlSpace="preserve">
                    <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                    " }} />
                    <path className="arrow-1" d="M0 45c0 24.9 20.1 45 45 45s45-20.1 45-45C90 20.1 69.9 0 45 0S0 20.1 0 45zM19.3 45l23.8-26.5 6 5.3L33.6 41h37v8h-37L49 66.2l-6 5.3L19.3 45z" />
                  </svg>
                </a>
                <div className="main">
                  <a className="card-wrapper">
                    <div className="card-under" />
                    <div className="card">
                      <div className="card-face front">
                        <h1 className="number">22</h1>
                      </div>
                      <div className="card-face back" />
                    </div>
                  </a>
                  <div className="card__contents">
                    <div className="contents__wrapper">
                      <h3>Pricing</h3>
                      <p>How much should you charge for your work? It’s a question that often needs revisiting. So
                        many
                        factors can influence what you should charge a client, such as your level of experience, the
                        scope of the project and the urgency of the deadline.</p>
                      <p>This article by Dan Mall is specifically aimed at design students – but it’s probably worth
                        any
                        designer or developer’s time to have a read and make sure you and your clients are getting
                        value
                        for money!</p>
                      <a className="article__link" href="http://danielmall.com/articles/pricing/" target="_blank">Read the
                        article</a>
                      <a className="close">x</a>
                      <svg id="holly" xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 210.5 169.3" xmlSpace="preserve">
                        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                .leaf {\n                                    fill: #004136;\n                                }\n\n                                .berry1 {\n                                    fill: #B22B5C;\n                                }\n\n                                .berry2 {\n                                    fill: #CC2F60;\n                                }\n\n                                .berry3 {\n                                    fill: #E73362;\n                                }\n                            " }} />
                        <path className="leaf" d="M70.5 26.6c0 0 29.9 17.2 37.7 49.8 0 0 27.9-31.8 62.7 11.5 0 0 6-40.1 39.6-35.6 0 0-21.3-11.5-23.6-40.4 0 0-46.2 22.6-64.7-11.9C122.2 0 100.5 32.1 70.5 26.6zM70.2 35.4c0 0-19.9 27.4-52.4 31.6 0 0 28.1 30.5-17.7 59.9 0 0 38.4 10 30.6 42.3 0 0 13.4-19.6 41.9-18.8 0 0-17.2-47.4 18.3-61.8C90.8 88.6 61.7 64.1 70.2 35.4z" />
                        <circle className="berry1" cx={76} cy={48} r="14.5" />
                        <circle className="berry2" cx="71.8" cy="28.1" r="16.5" />
                        <circle className="berry3" cx="54.9" cy="46.4" r="16.5" />
                      </svg>
                    </div>
                  </div>
                </div>
                <a className="arrow arrow--right" href="https://codepen.io/michellebarker/full/xZOLaZ/" target="_blank">
                  <svg id="arrow-right" xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 90 90" xmlSpace="preserve">
                    <path className="arrow-2" d="M45 0C20.1 0 0 20.1 0 45c0 24.9 20.1 45 45 45s45-20.1 45-45C90 20.1 69.9 0 45 0zM46.9 71.5l-6-5.3L56.4 49H19.7v-8h36.7L41 23.8l6-5.3L70.7 45 46.9 71.5z" />
                  </svg>
                </a>
              </main>
              <div className="text-box">
                <p>Sorry, no peeking before tomorrow!</p>
              </div>
            </div>
  );
}
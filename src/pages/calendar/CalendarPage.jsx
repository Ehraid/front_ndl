import './Calendar.scss';
import Background from '../background/Background';
import Foreground from '../foreground/Foreground';
import Helmet from "react-helmet";
import { useParams } from 'react-router-dom';

const resources = [{
  "titre":"Quelles sont les causes du changement climatique ?",
  "text":"<p>Les combustibles fossiles, à savoir le charbon, le pétrole et le gaz, sont de loin les plus grands contributeurs au changement climatique mondial.</p><br/><p> ils sont responsables de plus de 75 % des émissions mondiales de gaz à effet de serre et de près de 90 % de toutes les émissions de dioxyde de carbone.</p><br/>",
  "numero":"1",
  "lien":"https://www.un.org/fr/climatechange/science/causes-effects-climate-change"
  
  },{
  "titre":"Quelles sont les conséquences du changement climatique ?",
  "text":"<p>Le changement climatique a des conséquences très graves sur la vie des êtres humains et des animaux. Il provoque des sécheresses, des inondations, des tempêtes, des incendies de forêt et des vagues de chaleur. Ces événements météorologiques extrêmes ont des conséquences sur la santé, l’agriculture, l’approvisionnement en eau, l’assainissement et l’hygiène, l’énergie et les écosystèmes.</p><br/>",
  "numero":"2",
  "lien":"https://www.un.org/fr/climatechange/science/causes-effects-climate-change"
  
  },{
  "titre":"Quelles sont les solutions pour lutter contre le changement climatique ?",
  "text":"<p>Il existe de nombreuses solutions pour lutter contre le changement climatique. Les énergies renouvelables, comme l’énergie solaire et l’énergie éolienne, sont des sources d’énergie propres qui ne produisent pas de gaz à effet de serre. Les voitures électriques sont une autre solution. Elles fonctionnent à l’électricité et non à l’essence, ce qui signifie qu’elles ne produisent pas de gaz à effet de serre.</p><br/>",
  "numero":"3",
  "lien":"https://www.un.org/fr/actnow/ten-actions#unplug"
  
  },{
      "titre":"Netflix et le changement climatique",
      "text":"saviez-vous que Netflix représentait quasiment 20% du trafic internet français en 2022 (oui oui 20% !) ?<br/>",
      "numero":"4",
      "lien":"https://www.radiofrance.fr/franceinter/netflix-represente-quasi-20-du-trafic-internet-francais-en-2022-2791360"
  }];

export default function CalendarPage() {

 let {id} = useParams();

if(id==null){
  id = 0;
}else{
  id = parseInt(id)-1;

}
const titre = resources[id].titre;
const numero = resources[id].numero;
const lien = resources[id].lien;
const text  = resources[id].text;



  $(document).ready(function(){

    TweenLite.set(".card-wrapper");
    TweenLite.set(".card", {transformStyle: "preserve-3d", transformOrigin: "left 50%", transformPerspective: 1800});
    TweenLite.set(".back", {rotationY: 180});
    TweenLite.set([".back", ".front"], {backfaceVisibility: "hidden"});
     TweenLite.set(".card__contents", { scale: 0, autoAlpha: 0});
      
      
      $('.card-wrapper').bind({
        click: function() {
          TweenLite.to($(this).find(".card"), 0.8, {rotationY:-120, ease:Back.easeOut});
         TweenLite.to(".card__contents", 1.2, {scale: 1, autoAlpha: 1, delay: 0.5, ease:Elastic.easeOut});
        }
    });  
      
      $('.close').bind({
        click: function() {
         TweenLite.to(".card__contents", 0.4, {scale: 0, autoAlpha: 0, ease:Power1.easeOut});
          TweenLite.to(".card", 0.6, {rotationY: 0, delay: 0.5, ease: Power1.easeOut});
        }
    }); 
        
        TweenLite.set(".text-box", {autoAlpha: 0, y: '20px'});
        
    /*$('.arrow--right').bind({
        click: function() {
         TweenLite.to(".text-box", 0.8, {autoAlpha: 1, y: '0px', ease:Power1.easeOut});
                TweenLite.to(".text-box", 0.8, {autoAlpha: 0, y: '40px', delay: 2, ease:Power1.easeIn});
        }
    });*/
        
        //Flying Robin animation
    TweenLite.set("#robin", {x: 1100, y: 30, autoAlpha: 0}, 2);
    
    var robin = document.getElementById("robin")
    var wing = document.getElementById("wing")
    var tl = new TimelineMax({repeatDelay: 1.5});
    
    TweenLite.set(wing, {transformOrigin:"left top"});
    
    tl.to(robin, 3, {
        bezier: {
        type: "soft",
        values:[{x:1100, y:30}, {x:700, y:100}, {x:500, y:0}, {x:300, y:100}, {x:100, y:220}],
            autoRotate:false,
            ease: Power1.easeInOut,
      }
    }, 2)
        .to(robin, 0.6, {rotation:30, ease:Power1.easeInOut}, "-=3")
        .to(robin, 0.2, {autoAlpha:1}, "-=3")
        .to(wing, 0.6, {rotation: 30}, "-=3")
      .to(robin, 1, {rotation:-30, ease:Power1.easeInOut}, "-=2.4")
        .to(wing, 0.6, {rotation: -40}, "-=2.4")
      .to(robin, 1, {rotation:0, ease:Power1.easeInOut}, "-=1")
        .to(wing, 0.6, {rotation: -10}, "-=1")
      .to(robin, 3, {
        bezier: {
        type: "soft",
        values:[{x:100, y:220}, {x:-100, y:100}],
            autoRotate:false,
            ease: Power1.easeIn,
      }
    }, "+=2")
        .to(wing, 0.8, {rotation: -30, ease:Power1.easeInOut}, "-=3")
        .to(wing, 0.8, {rotation: 10, ease:Power1.easeInOut}, "-=2.2")
    });
    
    
  return (
    <div>
      <Helmet>
      <script
          src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"
          async={false} defer={false}
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js"
          async={false} defer={false}
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"
          async={false} defer={false}
        ></script>
      </Helmet>
        {/* Hello world */}
        <div className="awesome" style={{border: '1px solid red'}}>
          <div>
            <Foreground text={text} lien={lien} numero={numero} titre={titre} />
            <Background />
          </div>  <label htmlFor="name">Enter your name: </label>
          <input type="text" id="name" />
        </div>
        <p>Enter your HTML here</p>
      </div>
    );
  };
import './Calendar.scss';
import Background from '../background/Background';
import Foreground from '../foreground/Foreground';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AudioPlayerBackground from '../../components/AudioPlayerBackground/AudioPlayerBackground';
import { useNavigate } from 'react-router-dom';

const resources = [{
  "title":"Quelles sont les causes du changement climatique ?",
  "text":"<p>Les combustibles fossiles, à savoir le charbon, le pétrole et le gaz, sont de loin les plus grands contributeurs au changement climatique mondial.</p><br/><p> ils sont responsables de plus de 75 % des émissions mondiales de gaz à effet de serre et de près de 90 % de toutes les émissions de dioxyde de carbone.</p><br/>",
  "number":1,
  "link":"https://www.un.org/fr/climatechange/science/causes-effects-climate-change"
},{
  "title":"Quelles sont les conséquences du changement climatique ?",
  "text":"<p>Le changement climatique a des conséquences très graves sur la vie des êtres humains et des animaux. Il provoque des sécheresses, des inondations, des tempêtes, des incendies de forêt et des vagues de chaleur. Ces événements météorologiques extrêmes ont des conséquences sur la santé, l’agriculture, l’approvisionnement en eau, l’assainissement et l’hygiène, l’énergie et les écosystèmes.</p><br/>",
  "number":2,
  "link":"https://www.un.org/fr/climatechange/science/causes-effects-climate-change"
},{
  "title":"Quelles sont les solutions pour lutter contre le changement climatique ?",
  "text":"<p>Il existe de nombreuses solutions pour lutter contre le changement climatique. Les énergies renouvelables, comme l’énergie solaire et l’énergie éolienne, sont des sources d’énergie propres qui ne produisent pas de gaz à effet de serre. Les voitures électriques sont une autre solution. Elles fonctionnent à l’électricité et non à l’essence, ce qui signifie qu’elles ne produisent pas de gaz à effet de serre.</p><br/>",
  "number":3,
  "link":"https://www.un.org/fr/actnow/ten-actions#unplug"
},{
  "title":"Netflix et le changement climatique",
  "text":"<p>Saviez-vous que Netflix représentait quasiment 20% du trafic internet français en 2022 (oui oui 20% !) ?</p><br/>",
  "number":4,
  "link":"https://www.radiofrance.fr/franceinter/netflix-represente-quasi-20-du-trafic-internet-francais-en-2022-2791360"
},{
 "title":"Impact du numérique sur le changement climatique",
 "text":"<p>Le numérique représente aujourd'hui 3 à 4% des émissions de gaz à effet de serre dans le monde et 2.5% de l'empreinte carbone nationale. Cependant, même si cette part demeure modeste, elle ne fait qu'augmenter chaque année et nous pousse donc à nous interroger sur notre consommation. Cette impact est d'ailleurs plus élevé que le trafic aérien sur l'environnement. Selon des prévisions, d'ici 2040, si aucun effort n'est fait pour réduire cette empreine carbone, elle augmentera d'environ 60%.</p><br/>",
 "number":5,
 "link":"https://www.arcep.fr/la-regulation/grands-dossiers-thematiques-transverses/lempreinte-environnementale-du-numerique.html#:~:text=D%27après%20les%20deux%20premiers,de%204%20à%2013%25)."
},{
  "title":"Poids carbone de Twitter",
  "text":"<p>Malgré l'image éco-responsable qu'essaye de renvoyer Elon Musk, le PDG de Twitter, la plateforme a une empreinte carbone très importante. Un tweet émettrait en moyenne 0.026g de CO2. Cela dépend évidemment de l'utilisateur faisant le tweet et de son influence, par exemple Barack Obama, du haut de ses 132M de followers occupe à lui seul 0.04% du trafic, soit environ 3.2 tonnes d'équivalent CO2 par. Cela représente 1.8 vols Paris-York ! Au total, la plateforme émet près de 8200 tonnes d'équivalent CO2, soit 4 685 vols Paris-New York</p><br/>",
  "number":6,
  "link":"https://mydigitalweek.com/twitter-un-poids-lourd-de-lempreinte-carbone-numerique/#:~:text=Révélé%20par%20l%27un%20des,bel%20et%20bien%200%2C026%20gCO2."
},{
  "title":"Impact carbone principal de Youtube",
  "text":"<p>Le saviez-vous? La principale utilisation de Youtube est pour... écouter de la musique ! Or, on utilise rarement cette fonctionnalité de Youtube pour regarder les clips. La fonctionnalité de pouvoir jouer des vidéos avec l'écran éteint n'est disponible qu'avec Youtube premium, mais même avec cet abonnement, le signal vidéo est envoyé aux serveurs, ce qui ne rend pas l'application plus \"green\". Si cette fonctionnalité était implémentée, elle permettrait de diminuer les émissions de Youtube de 500 000 tonnes de CO2 par an !",
  "number":7,
  "link":"https://www.radiofrance.fr/francemusique/podcasts/musique-connectee/reduire-son-empreinte-ecologique-sur-youtube-1196480"
},{
  "title":"L'impact carbone du béton",
  "text":"Le ciment étant l'ingrédient clé du béton, il a un impact significatif sur l'empreinte carbone de ce matériau. Le ciment est responsable d'environ 5 % des émissions de gaz à effet de serre au niveau mondial.",
  "number":8,
  "link":"https://wearegreen.io/article/empreinte-carbone-des-materiaux-de-construction#:~:text=Le%20bilan%20carbone%20du%20ciment,carbone%20utilis%C3%A9s%20dans%20le%20BTP."
},{
  "title":"L'impact carbone des pets de vaches",
  "text":"<p>Le saviez-vous ? C'est naturel mais pas inoffensif : selon les chercheurs en agronomie de l'INRA, une seule vache rejette chaque année l'équivalent carbone de 2 allers-retours Paris-New York en avion. Et oui, ce n'est pas qu'une légende urbaine !</p><br/>",
  "number":9,
  "link":"https://leseclaireurs.canalplus.com/articles/comprendre/surprise-les-vaches-polluent-bien-moins-qu-on-ne-le-pense#:~:text=C'est%20naturel%20mais%20pas,d'%C3%A9quivalent%20carbone%20par%20an."
},{
  "title":"La tortue de Floride, une espèce exotique envahissante",
  "text":"Les tortues exotiques de floride sont omnivores et s’attaquent tout aussi bien aux algues et plantes aquatiques qu’aux poissons, aux insectes et aux autres amphibiens.Ces tortues s’avèrent dangereuses pour les espèces naturellement présentes en france. On voit ainsi que l'",
  "number":10,
  "link":"https://arthropodus.com/2018/01/17/la-tortue-de-floride-une-espece-exotique-envahissante-invasive/"
},{
  "title":"Taux d'empreinte carbone",
  "text":"Dans le monde, la majorité des émissions de gaz à effet de serre est dûe à la production d'électricité. Ce n'est cependant pas le cas en France puisque le nucléaire (source principale d'électricité en France) est une source d'énergie peu polluante. C'est les transports qui sont la principale source d'émissions de CO2 en France. C'est pour cela qu'il y a une grande campagne de prévention sur l'utilisation des transports en commun.",
  "number":11,
  "link":"https://www.statistiques.developpement-durable.gouv.fr/edition-numerique/chiffres-cles-du-climat/7-repartition-sectorielle-des-emissions-de#:~:text=En%202018%2C%20la%20production%20d,%2C%20y%20compris%20la%20construction)."
},{
  "title":"Le tuvalu et la montée des eaux",
  "text":"Le Tuvalu, archipel menacé par la montée des eaux, crée son double digital. Les neuf atolls du Tuvalu, ce petit État insulaire du Pacifique, sont menacés d'être engloutis par les eaux. Leur survie passe par le Web3.",
  "number":12,
  "link":"https://www.wedemain.fr/dechiffrer/le-tuvalu-archipel-menace-par-la-montee-des-eaux-cree-son-double-digital/#:~:text=%E2%80%A2%20D%C3%A9chiffrer%2C%20Planete-,Le%20Tuvalu%2C%20archipel%20menac%C3%A9%20par%20la%20mont%C3%A9e%20des%20eaux%2C%20cr%C3%A9e,survie%20passe%20par%20le%20Web3."
},{
  "title":"L'obsolescence programmée des téléphones",
  "text":"Chaque année en France, ce sont « 40 millions de biens qui tombent en panne et qui ne sont pas réparés ». En cause : l'obsolescence programmée des appareils électroniques, la garantie trop courte et la non-réparabilité des appareils.",
  "number":13,
  "link":"https://greenly.earth/fr-fr/blog/actualites-ecologie/obsolescence-programmee-quel-impact-sur-la-planete#:~:text=Chaque%20ann%C3%A9e%20en%20France%2C%20ce,la%20non%2Dr%C3%A9parabilit%C3%A9%20des%20appareils."
},{
  "title":"Le kilo de Viande",
  "text":"La communauté scientifique considère qu'il faut entre 550 à 700 L d'eau pour produire 1 kg de viande de bœuf . En eau utile, il faut de 20 à 50 litres par kg dans le contexte français .",
  "number":14,
  "link":"https://www.inrae.fr/actualites/quelques-idees-fausses-viande-lelevage#:~:text=La%20communaut%C3%A9%20scientifique%20consid%C3%A8re%20qu,le%20contexte%20fran%C3%A7ais%20(2)."
},{
  "title":"Le bilan carbonne nationalité française",
  "text":"L'estimation du niveau moyen de l'empreinte individuelle annuelle des Français serait d'environ 8 tonnes CO2eq pour l'année 2022. Il est probable que ce résultat minore un peu la réalité compte tenu de la difficulté de prise en compte de certains investissements dans la consommation des ménages.",
  "number":15,
  "link":"https://presse.ademe.fr/2023/09/repartition-de-lempreinte-carbone-des-francais.html#:~:text=L'estimation%20du%20niveau%20moyen,dans%20la%20consommation%20des%20m%C3%A9nages."
},{
  "title":"Qu'est-ce que le polluant éternel ?",
  "text":"Polluants éternels : Tout comprendre aux multiples procédures judiciaires en cours. Très présents dans la vie courante, les « polluants éternels » sont ainsi surnommés à cause de leur cycle de vie très long. Ces substances per et polyfluoroalkylés peuvent provoquer des effets néfastes sur la santé.",
  "number":16,
  "link":"https://www.20minutes.fr/sante/4043313-20230628-polluants-eternels-tout-comprendre-multiples-procedures-judiciaires-cours#:~:text=Polluants%20%C3%A9ternels%20%3A%20Tout%20comprendre%20aux%20multiples%20proc%C3%A9dures%20judiciaires%20en%20cours,-Mis%20%C3%A0%20jour&text=Tr%C3%A8s%20pr%C3%A9sents%20dans%20la%20vie,effets%20n%C3%A9fastes%20sur%20la%20sant%C3%A9."
},{
  "title":"Qu'est-ce que le greenwashing ?",
  "text":"<p>Le greenwashing est une technique de marketing qui consiste à faire croire aux consommateurs qu'une entreprise est plus respectueuse de l'environnement qu'elle ne l'est réellement. </p><br/>",
  "number":17,
  "link":"https://greenly.earth/fr-fr/blog/actualites-ecologie/greenwashing-definition-exemple"
},{
  "title":"\"Réchauffement\" ou \"dérèglement\" climatique ?",
  "text":"<p>Aujourd'hui, parler de réchauffement climatique est un abus de langage. Les températures sont effectivement plus chaudes en été mais elles sont également plus froides en hiver. On parle alors de dérèglement climatique plus que de réchauffement climatique.</p><br/>",
  "number":18,
  "link":"https://www.numerama.com/sciences/462874-pourquoi-il-ne-faut-pas-parler-de-rechauffement-climatique-mais-de-changement-climatique.html"
},{
  "title":"Véhicule hybride pollue moins qu'une essense classique ?",
  "text":"Sur les émissions de monoxyde de carbone : elles sont de 434 mg/km pour l'essence. En ce qui concerne les véhicules hybrides (non rechargeables), l'étude montre que les émissions de CO2 sont inférieures en moyenne de 12% par rapport à un véhicule essence similaire",
  "number":19,
  "link":""
},{
  "title":"Proportion de l'absortion du CO2 par les oceans",
  "text":"L'océan contient 50 fois plus de carbone que l'atmosphère et il échange chaque année des quantités importantes de carbone avec cette dernière. Au cours des dernières décennies, l'océan a ralenti le rythme du changement climatique anthropique en absorbant près de 30 % des émissions anthropiques de dioxyde de carbone.",
  "number":20,
  "link":"https://www.ocean-climate.org/wp-content/uploads/2015/03/FichesScientifiques-ocean-pompe-carbone.pdf"
},{
  "title":"L'evolution de la grande barrière de corail dans les 25 dernières annèes?",
  "text":"Selon une nouvelle étude, la Grande Barrière de corail aurait perdu près de la moitié de ses coraux au cours des 25 dernières années. Plus de 3 000 systèmes de récifs différents la composent, et la survie d'innombrables espèces en dépend.",
  "number":21,
  "link":"https://www.nationalgeographic.fr/environnement/2020/10/la-grande-barriere-de-corail-aurait-perdu-la-moitie-de-ses-coraux-en-25-ans"
},{
  "title":"Solutions pour lutter contre les ilôs de chaleurs urbain",
  "text":"1. INTÉGRER DES POUMONS VERTS DANS L'AMÉNAGEMENT URBAIN\n2. L’UTILISATION DE L’EAU SOUS TOUTES SES FORMES\n3. REPENSER LES REVÊTEMENTS DES SOLS ET DES BÂTIMENTS \n4. INTÉGRER LES ENJEUX BIOCLIMATIQUES DANS L'IMPLANTATION DES BÂTIMENTS\n5. ADAPTER LES COMPORTEMENTS INDIVIDUELS ET COLLECTIFS",
  "number":22,
  "link":"https://www.paysalia.com/fr/blog/ville-verte/lutter-contre-canicule-ville"
},{
  "title":"Le bilan carbone mondial du textile",
  "text":"4 milliards de tonnes d'équivalent CO2 chaque année. Voilà le bilan carbone de l'industrie textile dans le monde. Ce chiffre en fait l'une des industries les plus polluantes de la planète puisqu'elle représente selon l'ADEME 8% des émissions mondiales de gaz à effet de serre (vêtements et chaussures réunis).",
  "number":23,
  "link":"https://www.sami.eco/blog/bilan-carbone-textile#:~:text=4%20milliards%20de%20tonnes%20d,(v%C3%AAtements%20et%20chaussures%20r%C3%A9unis)."
},{
  "title":"",
  "text":"En 2020, les transports sont responsables de 28,7 % des émissions nationales de GES, une contribution relativement moins forte qu'en 2019 où ils en représentaient 31,1 %. Cela montre cependant l'urgente nécésité de réduire ses déplacements.s",
  "number":24,
  "link":"https://www.statistiques.developpement-durable.gouv.fr/edition-numerique/chiffres-cles-transports-2022/19-emissions-de-gaz-a-effet#:~:text=Part%20des%20secteurs%20dans%20les%20%C3%A9missions%20de%20gaz%20%C3%A0%20effet%20de%20serre&text=En%202020%2C%20les%20transports%20sont,en%20repr%C3%A9sentaient%2031%2C1%20%25."
  },
  {
    "title":"Félicitations pour avoir fini le calendrier ! 🎉",
    "text":"<p>Bravo, vous avez terminé le calendrier de l'avent ! Nous espérons que vous avez appris des choses et que vous avez pris conscience de l'urgence climatique. N'hésitez pas à partager ce calendrier autour de vous pour sensibiliser vos proches ! N'oubliez pas qu'un impact, même à votre échelle peut faire la différence ! </p><br/>",
    "number":25,
    "link":""
}];


export default function CalendarPage() {
  let navigate = useNavigate(); 
  const date = new Date();



  let { id } = useParams();

  if (id == null || id === "") {
    if (date.getMonth() === 11 && date.getDate() < 26) {
      id = date.getDate() - 1;
    }
    else {  
      id = 0;
    }
}else if(parseInt(id)>25 || parseInt(id)<1){
  useEffect(() => {
    routeError404();
  }, []);
}
else{
  id = parseInt(id)-1;
}

const title = resources[id].title;
const number = resources[id].number;
const link = resources[id].link;
const text  = resources[id].text;



  useEffect(() => {
    $(document).ready(function () {

      TweenLite.set(".card-wrapper");
      TweenLite.set(".card", { transformStyle: "preserve-3d", transformOrigin: "left 50%", transformPerspective: 1800 });
      TweenLite.set(".back", { rotationY: 180 });
      TweenLite.set([".back", ".front"], { backfaceVisibility: "hidden" });
      TweenLite.set(".card__contents", { scale: 0, autoAlpha: 0 });


      $('.card-wrapper').bind({
        click: function () {
          TweenLite.to($(this).find(".card"), 0.8, { rotationY: -120, ease: Back.easeOut });
          TweenLite.to(".card__contents", 1.2, { scale: 1, autoAlpha: 1, delay: 0.5, ease: Elastic.easeOut });
        }
      });

      $('.close').bind({
        click: function () {
          TweenLite.to(".card__contents", 0.4, { scale: 0, autoAlpha: 0, ease: Power1.easeOut });
          TweenLite.to(".card", 0.6, { rotationY: 0, delay: 0.5, ease: Power1.easeOut });
        }
      });

      TweenLite.set(".text-box", { autoAlpha: 0, y: '20px' });

      /*$('.arrow--right').bind({
          click: function() {
           TweenLite.to(".text-box", 0.8, {autoAlpha: 1, y: '0px', ease:Power1.easeOut});
                  TweenLite.to(".text-box", 0.8, {autoAlpha: 0, y: '40px', delay: 2, ease:Power1.easeIn});
          }
      });*/

      //Flying Robin animation
      TweenLite.set("#robin", { x: 1100, y: 30, autoAlpha: 0 }, 2);

      var robin = document.getElementById("robin")
      var wing = document.getElementById("wing")
      var tl = new TimelineMax({ repeatDelay: 1.5 });

      TweenLite.set(wing, { transformOrigin: "left top" });

      tl.to(robin, 3, {
        bezier: {
          type: "soft",
          values: [{ x: 1100, y: 30 }, { x: 700, y: 100 }, { x: 500, y: 0 }, { x: 300, y: 100 }, { x: 100, y: 220 }],
          autoRotate: false,
          ease: Power1.easeInOut,
        }
      }, 2)
        .to(robin, 0.6, { rotation: 30, ease: Power1.easeInOut }, "-=3")
        .to(robin, 0.2, { autoAlpha: 1 }, "-=3")
        .to(wing, 0.6, { rotation: 30 }, "-=3")
        .to(robin, 1, { rotation: -30, ease: Power1.easeInOut }, "-=2.4")
        .to(wing, 0.6, { rotation: -40 }, "-=2.4")
        .to(robin, 1, { rotation: 0, ease: Power1.easeInOut }, "-=1")
        .to(wing, 0.6, { rotation: -10 }, "-=1")
        .to(robin, 3, {
          bezier: {
            type: "soft",
            values: [{ x: 100, y: 220 }, { x: -100, y: 100 }],
            autoRotate: false,
            ease: Power1.easeIn,
          }
        }, "+=2")
        .to(wing, 0.8, { rotation: -30, ease: Power1.easeInOut }, "-=3")
        .to(wing, 0.8, { rotation: 10, ease: Power1.easeInOut }, "-=2.2")
    });
  })

  return (
    <div>
      <AudioPlayerBackground />

      <div className="awesome" style={{ border: '1px solid red' }}>
        <div>
          <Foreground text={text} lien={link} numero={number} titre={title} />
          <Background />
        </div>
      </div>
    </div>
  );
};
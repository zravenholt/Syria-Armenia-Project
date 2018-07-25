/* eslint-disable no-use-before-define */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import video1 from 'file-loader!../../assets/Angel_Long_Video.mov';
// import video2 from 'file-loader!../../assets/Abdullah_Haddad_Full_Interview.mov';

import messages from './messages';
import Header from './Header';
import Link from './Link';
import Background from './background';
import Tile from './Tile';
import TileRow from './TileRow';
import CircleProfile from './CircleProfile';
import Modal from './Modal';
import LinkContainer from './LinkContainer';
// import ProfileImage from './ProfileImage';

import image from '../../images/exampleSquare.jpg';
import img2 from '../../images/exampleSquare2.jpg';
import angelAjemian from '../../images/Angel_Ajemian.jpg';
import sosiOhan from '../../images/Sosi_Ohan.jpg';
import salpiProudian from '../../images/Salpi_Proudian.jpg';
import jirairHalvajian from '../../images/Jirair_Halvajian.jpg';
import sonaGildalian from '../../images/Sona_Gildalian.jpg';
import abdullahHaddad from '../../images/Abdullah_George_Haddad.jpg';
import lindaArakel from '../../images/Linda_Arakel.jpg';
import hagopAtikian from '../../images/Hagop_Atikian.jpg';
import takouhiBedros from '../../images/Takouhi_Bedros.jpg';
import vickyMasrie from '../../images/Vicky_Masrie.jpg';
import maydaHindoyan from '../../images/Mayda_Hindoyan.jpg';
import lusinMkhlmeljian from '../../images/Lusin_Mkhlmeljian.jpg';
import vahramDerOhanian from '../../images/Vahram_DerOhanian.jpg';
import dzovagSoghomonian from '../../images/Dzovag_Soghomonian.jpg';
import krikorStepanian from '../../images/Krikor_Stepanian.jpg';
import sevanTorosian from '../../images/Sevan_Torosian.jpg';
import torosToranian from '../../images/Toros_Toranian.jpg';
import vartanoushShitilian from '../../images/Vartanoush_Shitilian.jpg';
import aniAvakian from '../../images/Ani_Avakian.jpg';
import ritaSarkisian from '../../images/Rita_Sarkisian.jpg';
import haroutGhalbornian from '../../images/Harout_Ghalbornian.jpg';
import zohrabDerderian from '../../images/Zohrab_Derderian.jpg';
import janetManoushian from '../../images/Janet_Manoushian.jpg';
import zarouhiHamalian from '../../images/Zarouhi_Vanesian_Hamalian.jpg';
import sarkisBolsaghi from '../../images/Sarkis_Bolsaghi.jpg';

export default class Refugees extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedPerson: null,
      people: [
        {
          name: 'Sarkis Bolsaghi',
          armenianName: 'Սարգիս Գէւորգ Բոլսաճի',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 46,
          armenianAge: 46,
          arabicAge: 46,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: '',
          armenianAncestralCity: '',
          arabicAncestralCity: '',
          route: '',
          armenianRoute: '',
          arabicRoute: '',
          quote:
            'I came to Armenia by the roads through Turkey and Iran. A soldier stopped me in Turkey, I asked him where the border of Nordus to Iran was, he gave me directions and asked where I came from, I said I was Armenian, he said are you? I said yes, and he asked me to turn off the car to talk for 5 minutes. I asked why he wanted me to turn off the car, and that he could just say whatever he wanted to. He said can you see these mountains, we need to make a deal. I asked what the deal was and he said this was the cemetery of Armenians. I said, God bless their souls, but he was trying to dig up gold from their graves.',
          shortVideoLink: '',
          fullVideoLink: '',
          img: sarkisBolsaghi,
          video: video1,
        },
        {
          name: 'Zarouhi Vanesian Hamalian',
          armenianName: 'Զարուհի Վանէսեան Համալեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 54,
          armenianAge: 54,
          arabicAge: 54,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: '',
          armenianAncestralCity: '',
          arabicAncestralCity: '',
          route: '',
          armenianRoute: '',
          arabicRoute: '',
          quote:
            'I am doing ok and again I am a volunteer here at Zoravor Asdvazazin Church on Pushkin Street in Yerevan. I am a chairlady there. We started 3 years ago, after we came to Armenia. We went to church and spoke to the priest, Father Krikor...He asked, “How are you, Where are you from?” We said we are from Aleppo and he said if you like I can give you an hour on Friday to gather the Syrian Armenians here. We have remained so happy with Father Krikor….So we planned with some friends who became volunteers and I am the chairlady. When we started we were 14 or 15 people and now every Friday 300 women come every Friday. We do our prayers and then we have a hall and there we drink coffee as hospitality. It is a huge happiness for me to say how many people I have brought together. Thank God.',
          shortVideoLink: '',
          fullVideoLink: '',
          img: zarouhiHamalian,
          video: video1,
        },
        {
          name: 'Janet Manoushian',
          armenianName: 'Ճանէթ Մանուշեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 61,
          armenianAge: 61,
          arabicAge: 61,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: '',
          armenianAncestralCity: '',
          arabicAncestralCity: '',
          route: '',
          armenianRoute: '',
          arabicRoute: '',
          quote:
            'I am a very hardworking woman. I am have sacrificed a lot, as far as I know and my husband knows. I got married when I was 15 and I had four children....We always welcomed guests. My husband knows. I am very hardworking. I do all the work around the house. No one else. Washing the dishes, buying food, making meals. I was hardworking....Whatever someone needs I try to do anything I can for them',
          shortVideoLink: '',
          fullVideoLink: '',
          img: janetManoushian,
          video: video1,
        },
        {
          name: 'Zohrab Derderian',
          armenianName: 'Զոհրապ Տէրտէրեան ',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 61,
          armenianAge: 61,
          arabicAge: 61,
          birthplace: 'Kobani, Syria',
          armenianBirthplace: 'Արաբունար, Սուրիա',
          arabicBirthplace: 'عين العرب، سوريا',
          ancestralCity: '',
          armenianAncestralCity: '',
          arabicAncestralCity: '',
          route: '',
          armenianRoute: '',
          arabicRoute: '',
          quote:
            "For work I would personally interacted with Kurds a lot. I had a car, a mini-bus, that I would drive between Aleppo and Kobani. The most of the people were Kurds there were very few Armenians left in Kobani. Yes, sometimes when I would go to my mother's house in Aleppo and was speaking Armenian I would mix in a Kurdish word. Just liked Armenians here mix in Russian words, we did the same thing. Arapunar is on the Turkish border. Between our country and theirs there is only rope. You can see the soldiers facing each other on each side.",
          shortVideoLink: '',
          fullVideoLink: '',
          img: zohrabDerderian,
          video: video1,
        },
        {
          name: 'Harout Ghalbornian',
          armenianName: 'Հարութ Խալպորնեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 36,
          armenianAge: 36,
          arabicAge: 36,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: '',
          armenianAncestralCity: '',
          arabicAncestralCity: '',
          route: '',
          armenianRoute: '',
          arabicRoute: '',
          quote:
            "Every year we would commemorate the Genocide in our clubs. I was a member of Homenetmen. To commemorate, every year we go to Der Zor...We'd go, explain to them the history, show them the bones, take them to the churches, tell them the stories at a to a special place..We'd always remind them of what had happened. Many would be very touched. Some would look, cry and after they'd heard the story. They would listen very carefully....But we no longer do so, because the country is at war. The memorial at Der Zor is destroyed. They took out all that was possible to save, but the rest has been destroyed.",
          shortVideoLink: '',
          fullVideoLink: '',
          img: haroutGhalbornian,
          video: video1,
        },
        {
          name: 'Rita Sarkisian',
          armenianName: 'Ռիդա Սարքիսեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 54,
          armenianAge: 54,
          arabicAge: 54,
          birthplace: 'Kuwait',
          armenianBirthplace: 'Քուվեյթ',
          arabicBirthplace: 'الكويت',
          ancestralCity: '',
          armenianAncestralCity: '',
          arabicAncestralCity: '',
          route: '',
          armenianRoute: '',
          arabicRoute: '',
          quote:
            'Before the war, I had already come to Armenia as a tourist. When I was here for tourism, Armenia was very very different. It was so beautiful to my eyes, but when we came because of the problems from the war it was completely different to my eyes. I could not see the beauty of the country...But we were able to overcome. Now it is not like the beginning. Bit by bit we learned. We created a community here.',
          shortVideoLink: '',
          fullVideoLink: '',
          img: ritaSarkisian,
          video: video1,
        },
        {
          name: 'Ani Avakian',
          armenianName: 'Անի Ավագյան ',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 51,
          armenianAge: 51,
          arabicAge: 51,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: '',
          armenianAncestralCity: '',
          arabicAncestralCity: '',
          route: '',
          armenianRoute: '',
          arabicRoute: '',
          quote:
            'Armenian education in the Diaspora has a big responsibility. You should not only teach Armenian reading and writing or grammar and literature. You have to familiarize them with the nation’s values and the nation’s individuals who display them, so that they can feel proud and grounded...If the teacher can dive into cultural topics, especially because our culture is so beautiful, then you can make the classes more interesting and make the students more connected to the subject. I tried to do that as an Armenian teacher for 10 years.',
          shortVideoLink: '',
          fullVideoLink: '',
          img: aniAvakian,
          video: video1,
        },
        {
          name: 'Vartanoush Shitilian',
          armenianName: 'Վարդանուշ Շիթիլեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 93,
          armenianAge: 93,
          arabicAge: 93,
          birthplace: 'Azaz, Syria',
          armenianBirthplace: 'Ազազ, Սուրիա',
          arabicBirthplace: 'أعزاز‎، سوريا',
          ancestralCity: 'Kilis',
          armenianAncestralCity: 'Քիլիս',
          arabicAncestralCity: 'كلز',
          route: '',
          armenianRoute: '',
          arabicRoute: '',
          quote:
            'One day, we were going to school in Afrin. There the Muslims were saying “Allahu Akbar.” At first they did not have anything like a church, so they were doing the prayers at their houses. I was going to school and I saw them men praying “Allahu Akbar” “Allahu Akbar.” So I also sat with them and did the prayers with them. The teacher saw that I was doing the prayers with them when it was time for school. So I went to school and the teacher asked me what I was doing. I said they were standing and kneeling so I did the same. She gave me a good spank. She told me not to do it again. She said they are Muslim and could hit me. She said I was mocking them.',
          shortVideoLink: 'https://www.youtube.com/embed/_nJY0PZvgQw',
          fullVideoLink: '',
          img: vartanoushShitilian,
          video: video1,
        },
        {
          name: 'Toros Toranian',
          armenianName: 'Թորոս Թորանեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 89,
          armenianAge: 89,
          arabicAge: 89,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: 'Sassoun',
          armenianAncestralCity: 'Սասուն',
          arabicAncestralCity: 'ساسون',
          route: 'Car to Beirut, Airplane to Yerevan',
          armenianRoute: 'Ինքնաշարժ դէպի Պէյրութ, Օդանաւ դէպի Երեւան',
          arabicRoute: 'سيارة إلی بيروت وطائرة إلی يريفان ',
          quote:
            "In my childhood years, we never interacted with Arabs. Why? Because all the Armenians were living at the same place. Everything was Armenian, the shopkeeper, the baker, the cobbler, the tailor. We did not need anything else. Armenians were living collectively, with each other...At the school, when the Arab teacher used to come and say, 'This is an Arabic Country.' We didn't understand, what does it mean? What is that Arabic country?",
          shortVideoLink: 'https://www.youtube.com/embed/iOwNwXy_nBQ',
          fullVideoLink: '',
          img: torosToranian,
          video: video1,
        },
        {
          name: 'Sevan Torosian',
          armenianName: 'Սեւան Թորոսեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 40,
          armenianAge: 40,
          arabicAge: 40,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: 'Urfa and Ainteb',
          armenianAncestralCity: 'Ուրֆա եւ Այնթապ',
          arabicAncestralCity: ' أورفة وعنتاب',
          route: 'Bus to Beirut, Airplane to Yerevan',
          armenianRoute: 'Ավտոպուս դէպի Պէյրութ, Օդանաւ դէպի Երեւան',
          arabicRoute: 'أتوبيس إلی بيروت وطائرة إلی يريفان ',
          quote:
            'Armenia is like your father, who gave you your name. And Syria is like your mother who took care of you for years. ',
          shortVideoLink: 'https://www.youtube.com/embed/7V8QIV-WCSs',
          fullVideoLink: '',
          img: sevanTorosian,
          video: video1,
        },
        {
          name: 'Krikor Stepanian',
          armenianName: 'Գրիգոր Սըտբնեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 54,
          armenianAge: 54,
          arabicAge: 54,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: 'Ainteb and Konya',
          armenianAncestralCity: 'Քոնիա եւ Այնթապ ',
          arabicAncestralCity: '  قونية وعنتاب',
          route: 'Bus through Turkey and Georgia to Armenia',
          armenianRoute:
            'Ավտոպուս դէպի Հայաստան Թուրքական եւ Վրացական ճամբայով',
          arabicRoute: 'أتوبيس إلی يريفان بطريق تركيا وجورجيا',
          quote:
            'They uncovered my eyes and untied my hands and put me on my knees. They told me to pray. I prayed their prayers, but inside I was saying “Oh God, I am in your hands not in their hands. You will save me, not them.”',
          shortVideoLink: 'https://www.youtube.com/embed/R_CnoXa6t2Q',
          fullVideoLink: '',
          img: krikorStepanian,
          video: video1,
        },
        {
          name: 'Dzovag Soghomonian',
          armenianName: 'Ծովակ Սողոմոնեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 26,
          armenianAge: 26,
          arabicAge: 26,
          birthplace: 'Damascus, Syria',
          armenianBirthplace: 'Դամասկոս, Սուրիա',
          arabicBirthplace: 'دمشق، سوريا',
          ancestralCity: '',
          armenianAncestralCity: '',
          arabicAncestralCity: '',
          route: '',
          armenianRoute: '',
          arabicRoute: '',
          quote:
            'Now, I do not consider that I moved to Armenia because of the war. I moved to Armenia because I really want to. I am a repatriate. That is what I consider myself now. I know the war happened and it was not beautiful. But it is kind of a destiny to come back to Armenia....I know it was not a beautiful destiny, but maybe it is somehow. Maybe if there was no war, I would not have moved to Armenia. But I am here, so it is a beautiful destiny. So I continue surviving and living these beautiful moments in my homeland.',
          shortVideoLink: 'https://www.youtube.com/embed/WzIvbg_dH6E',
          fullVideoLink: '',
          img: dzovagSoghomonian,
          video: video1,
        },
        {
          name: 'Vahram DerOhanian',
          armenianName: 'Վահրամ ՏէրՕհանեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 52,
          armenianAge: 52,
          arabicAge: 52,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: 'Kilis and Kharpert',
          armenianAncestralCity: 'Քիլիս եւ Խարբերդ',
          arabicAncestralCity: 'كلز وخربوط',
          route: 'Bus to Beirut, Airplane to Yerevan',
          armenianRoute: 'Ավտոպուս դէպի Պէյրութ, Օդանաւ դէպի Երեւան',
          arabicRoute: 'أتوبيس إلی بيروت وطائرة إلی يريفان ',
          quote:
            'In Armenia, locals asked why is my stand called Spitak, and I said as a memorial to the earthquake victims. They says “Oh you remember us Armenians?” Of course, we would never forget. We remembered it so much from Aleppo, that is why I have the name now.',
          shortVideoLink: '',
          fullVideoLink: '',
          img: vahramDerOhanian,
          video: video1,
        },
        {
          name: 'Artsakh',
          armenianName: 'Արցախ',
          arabicName: '',
          cityOfResidence: 'Europe',
          armenianCityOfResidence: 'Եվրոպա',
          arabicCityOfResidence: 'أوروبا',
          age: 56,
          armenianAge: 56,
          arabicAge: 56,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: '',
          armenianAncestralCity: '',
          arabicAncestralCity: '',
          route: '',
          armenianRoute: '',
          arabicRoute: '',
          quote:
            'Sultan Abdul Hamid said there will only be enough Armenians to put in museums....We proved that wrong by prospering...and preserving our Armenian letters and creating schools. Wherever Armenians went they started schools, and those schools are the reasons Armenians preserved and protected their language, culture, nation, and beliefs.',
          shortVideoLink: '',
          fullVideoLink: '',
          img: 'need generic',
          video: video1,
        },
        {
          name: 'Lusin Mkhlmeljian',
          armenianName: 'Լուսին Մխմելճեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 51,
          armenianAge: 51,
          arabicAge: 51,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: 'Ainteb',
          armenianAncestralCity: 'Այնթապ',
          arabicAncestralCity: 'عنتاب',
          route: 'Airplane to Yerevan, Armenia',
          armenianRoute: 'Օդանաւ դէպի Երեւան',
          arabicRoute: 'طائرة إلی يريفان',
          quote:
            'When we had just arrived to Armenia, I had a lot of anxiety. I wanted to do something to forget all that I had seen and lived through. By giving myself work, I wanted to forget all of that. And I needed to live in Armenia where life is expensive, so we busied ourselves with work. And I did it with love. From 10 in the morning until 11 at night, I was on my feet and I couldn’t even feel tired because we needed to do something, move forward, make money, and live.',
          shortVideoLink: '',
          fullVideoLink: 'https://www.youtube.com/embed/UYqHImOaNno',
          img: lusinMkhlmeljian,
          video: video1,
        },
        {
          name: 'Mayda Hindoyan',
          armenianName: 'Մայտա Հինտոյան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 66,
          armenianAge: 66,
          arabicAge: 66,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: 'Ainteb',
          armenianAncestralCity: 'Այնթապ',
          arabicAncestralCity: 'عنتاب',
          route: 'Airplane to Beirut, Airplane to Yerevan',
          armenianRoute: 'Օդանաւ դէպի Պէյրութ, Օդանաւ դէպի Երեւան',
          arabicRoute: 'طائرة إلی بيروت وطائرة إلی يريفان ',
          quote:
            'I used to dream of at least visiting or even living in Armenia. When people visited Armenia from Syria before the war, I would tell them to look at Armenia with their eyes for me.  I always loved it. I say that it is like heaven here.t  would only be better if my family, and all my children were here so I would not have to miss anybody. At my age family is what is important and to have good health to enjoy them. ',
          shortVideoLink: '',
          fullVideoLink: 'https://www.youtube.com/embed/H_hHCWlHb4k',
          img: maydaHindoyan,
          video: video1,
        },
        {
          name: 'Vicky Masrie',
          armenianName: 'Վիքի Մասրի',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 25,
          armenianAge: 25,
          arabicAge: 25,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: 'Ainteb',
          armenianAncestralCity: 'Այնթապ',
          arabicAncestralCity: 'عنتاب',
          route: 'Airplane to Beirut, Airplane to Yerevan',
          armenianRoute: 'Օդանաւ դէպի Պէյրութ, Օդանաւ դէպի Երեւան',
          arabicRoute: 'طائرة إلی بيروت وطائرة إلی يريفان ',
          quote:
            'For me I feel like I have come back to our homeland, although I miss Aleppo a lot. Not Syria because Syria is just a country to me. Aleppo is my birthplace and I miss it a lot..At the beginning I didn’t feel like Yerevan was home. But when I went out of Yerevan and came back, I knew that this is home too. Now I have two homes, Aleppo and Yerevan.',
          shortVideoLink: '',
          fullVideoLink: 'https://www.youtube.com/embed/H_hHCWlHb4k',
          img: vickyMasrie,
          video: video1,
        },
        {
          name: 'Toros Ayranjian',
          armenianName: 'Թորոս Այրանճեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 75,
          armenianAge: 75,
          arabicAge: 75,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: 'Marash',
          armenianAncestralCity: 'Մարաշ',
          arabicAncestralCity: 'مرعش',
          route: 'Bus to Beirut, Airplane to Yerevan',
          armenianRoute: 'Ավտոպուս դէպի Պէյրութ, Օդանաւ դէպի Երեւան',
          arabicRoute: 'أتوبيس إلی بيروت وطائرة إلی يريفان ',
          quote: 'We were married 50 years and 4 months.',
          shortVideoLink: 'https://www.youtube.com/embed/DiCfaPu0hds',
          fullVideoLink: 'https://www.youtube.com/embed/sQkWmaDANto',
          img: takouhiBedros,
          video: video1,
        },
        {
          name: 'Takouhi Bedros',
          armenianName: 'Թագուհի Պետրոս ',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 63,
          armenianAge: 63,
          arabicAge: 63,
          birthplace: 'Der Zor, Syria',
          armenianBirthplace: 'Տէր Զօր, Սուրիա',
          arabicBirthplace: 'دير الزور، سوريا',
          ancestralCity: 'Dikranagerd and Kharpert',
          armenianAncestralCity: 'եւ Խարբերդ',
          arabicAncestralCity: '  وخربوط',
          route: 'Bus to Beirut, Airplane to Yerevan',
          armenianRoute: 'Ավտոպուս դէպի Պէյրութ, Օդանաւ դէպի Երեւան',
          arabicRoute: 'أتوبيس إلی بيروت وطائرة إلی يريفان ',
          quote:
            'My husband’s doctors had all fled from Syria, and he has heart problems. So we thought to leave to our country, Armenia. We could be satisfied with just a piece of bread. What else could we do at our age?',
          shortVideoLink: 'https://www.youtube.com/embed/DiCfaPu0hds',
          fullVideoLink: 'https://www.youtube.com/embed/sQkWmaDANto',
          img: takouhiBedros,
          video: video1,
        },
        {
          name: 'Hagop Atikian',
          armenianName: 'Հակոբ Աթիգեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 44,
          armenianAge: 44,
          arabicAge: 44,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: 'Musaler and Iskanderun',
          armenianAncestralCity: 'Մուսա լեռ եւ Ալեքսանդրետտա',
          arabicAncestralCity: 'جبل موسی والإسكندرونة‎',
          route: 'Airplane to Yerevan then car to Artsakh',
          armenianRoute: 'Օդանաւ դէպի Երեւան եւ ինքնաշարժ դէպի Արցախ',
          arabicRoute: 'طائرة إلی يريفان وسيارة إلی قرة باغ',
          quote:
            "It was my wife's love and us being hand-in-hand that made it possible for us to get back on our feet. Otherwise it would have been too hard.",
          shortVideoLink: 'https://www.youtube.com/embed/AixpZraJi54',
          fullVideoLink: 'https://www.youtube.com/embed/OduWA8zCjec',
          img: hagopAtikian,
          video: video1,
        },
        {
          name: 'Linda Arakel',
          armenianName: 'Լինտա Առաքել',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 32,
          armenianAge: 32,
          arabicAge: 32,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: 'Sassoun',
          armenianAncestralCity: 'Սասուն',
          arabicAncestralCity: 'ساسون',
          route: 'Airplane to Yerevan then car to Artsakh',
          armenianRoute: 'Օդանաւ դէպի Երեւան եւ ինքնաշարժ դէպի Արցախ',
          arabicRoute: 'طائرة إلی يريفان وسيارة إلی قرة باغ',
          quote:
            'The driver said, "but we are all men." I said, "I am a man too" I\'ll cover my hair and come sit with you, I said. "If you die, I die, if you live you live, I am your sister, I just came to drive with you, if you\'re going, I am coming with you."',
          shortVideoLink: 'https://www.youtube.com/embed/AixpZraJi54',
          fullVideoLink: 'https://www.youtube.com/embed/OduWA8zCjec',
          img: lindaArakel,
          video: video1,
        },
        {
          name: 'Angel Ajemian',
          armenianName: 'Անճէլ Աճէմեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 37,
          armenianAge: 37,
          arabicAge: 37,
          birthplace: 'Kuwait',
          armenianBirthplace: 'Քուվեյթ',
          arabicBirthplace: 'الكويت',
          ancestralCity: 'Sassoun',
          armenianAncestralCity: 'Սասուն',
          arabicAncestralCity: 'ساسون',
          route: 'Bus to Beirut, Airplane to Yerevan',
          armenianRoute: 'Ավտոպուս դէպի Պէյրութ, Օդանաւ դէպի Երեւան',
          arabicRoute: 'أتوبيس إلی بيروت وطائرة إلی يريفان ',
          quote:
            'A lawyer called me and told me he had been kidnapped by ISIS alongside my husband, Minas. I did not believe him. I thought he was lying because everyone knew my husband was kidnapped and maybe this man just wanted to upset me.  But then he said, “You have three candles.” Minas used to say that our three kids were candles that lit up our life. When the man said that I knew that he had been with Minas.',
          shortVideoLink: '',
          fullVideoLink: 'https://www.youtube.com/embed/k-YK154hxO0',
          img: angelAjemian,
        },
        {
          name: 'Sosi Ohan',
          armenianName: 'Սոսի Օհան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 57,
          armenianAge: 57,
          arabicAge: 57,
          birthplace: 'Qamishli, Syria',
          armenianBirthplace: 'Քամիշլի, Սուրիա',
          arabicBirthplace: ' القامشلي‎، سوريا',
          ancestralCity: 'Sassoun',
          armenianAncestralCity: 'Սասուն',
          arabicAncestralCity: 'ساسون',
          route: 'Airplane to Damascus, Beirut, then Yerevan',
          armenianRoute: 'Օդանաւ դէպի Դամասկոս, Պէյրութ ի վերջ Երեւան',
          arabicRoute: 'طائرة إلی دمشق ثم بيروت ثم يريفان',
          quote:
            'My grandparents who survived the genocide would say, “If only we had some Armenian soil, we would want to put it on our graves.” That stays in my head until now. If I buy a vegetable or something here in Armenia and there is some soil in the bag, I cannot throw it in the trash.  I throw it outside and let the soil go out. I cannot put it in the trash. ',
          shortVideoLink: '',
          fullVideoLink: 'https://www.youtube.com/embed/-SOp0lCwR2c',
          img: sosiOhan,
          video: video1,
        },
        {
          name: 'Salpi Proudian',
          armenianName: 'Սալբի Բրուտեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 55,
          armenianAge: 55,
          arabicAge: 55,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: 'Ainteb',
          armenianAncestralCity: 'Այնթապ',
          arabicAncestralCity: 'عنتاب',
          route: 'Airplane to Yerevan, Armenia',
          armenianRoute: 'Օդանաւ դէպի Երեւան',
          arabicRoute: 'طائرة إلی يريفان',
          quote:
            "Of course, I would like to be in a situation where I don't have to worry about tomorrow. The most pressing thing is the house rent. You go to bed every night and you wake up every morning with that thought on your mind, thinking how am I going to pay the rent this month so I have a place to stay.",
          shortVideoLink: '',
          fullVideoLink: 'https://www.youtube.com/embed/LxfUNmWY-Ts',
          img: salpiProudian,
          video: video1,
        },
        {
          name: 'Jirair Halvajian',
          armenianName: 'Ճիրայր Հալվաճեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 56,
          armenianAge: 56,
          arabicAge: 56,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: 'Marash',
          armenianAncestralCity: 'Մարաշ',
          arabicAncestralCity: 'مرعش',
          route: 'Airplane to Yerevan, Armenia',
          armenianRoute: 'Օդանաւ դէպի Երեւան',
          arabicRoute: 'طائرة إلی يريفان',
          quote:
            "I'd like to go back to Aleppo, I've missed Aleppo very much--the environment, my friends. I really miss it. If Aleppo were the Aleppo it used to be, I wouldn't stay in Armenia for a minute. I'd take my children and leave.",
          shortVideoLink: '',
          fullVideoLink: 'https://www.youtube.com/embed/qPsMpTGplUE',
          img: jirairHalvajian,
          video: video1,
        },
        {
          name: 'Sona Gildalian',
          armenianName: 'Սոնա Կիլտալեան',
          arabicName: '',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 62,
          armenianAge: 62,
          arabicAge: 62,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: 'Ainteb',
          armenianAncestralCity: 'Այնթապ',
          arabicAncestralCity: 'عنتاب',
          route: 'Bus to Beirut, Airplane to Yerevan',
          armenianRoute: 'Ավտոպուս դէպի Պէյրութ, Օդանաւ դէպի Երեւան',
          arabicRoute: 'طائرة إلی يريفان',
          quote:
            "We had relatives who visited us in Aleppo from Armenia. When I'd tell them I wanted to go to Armenia to see what it is like, they would say, “Yes, come and see your motherland, but you have already built one in Aleppo.” There is already a motherland built in Aleppo. We have our churches, theatres, a prelacy. Everything. ",
          shortVideoLink: '',
          fullVideoLink: 'https://www.youtube.com/embed/pM6_m6EA-E4',
          img: sonaGildalian,
          video: video1,
        },
        {
          name: 'Abdullah George Haddad',
          armenianName: 'Ապտըլլայ Ճորճ Հատատ',
          arabicName: 'عبد الله جورج حداد',
          cityOfResidence: 'Yerevan, Armenia',
          armenianCityOfResidence: 'Երեւան, Հայաստան',
          arabicCityOfResidence: 'يريفان، أرمينيا',
          age: 53,
          armenianAge: 53,
          arabicAge: 53,
          birthplace: 'Aleppo, Syria',
          armenianBirthplace: 'Հալէպ, Սուրիա',
          arabicBirthplace: 'حلب، سوريا',
          ancestralCity: 'Ainteb',
          armenianAncestralCity: 'Այնթապ',
          arabicAncestralCity: 'عنتاب',
          route: 'Bus through Turkey and Georgia to Armenia',
          armenianRoute:
            'Ավտոպուս դէպի Հայաստան Թուրքական եւ Վրացական ճամբայով',
          arabicRoute: 'أتوبيس إلی يريفان بطريق تركيا وجورجيا',
          quote:
            'But my one desire is to get a place where I can work with my older two sons and take them under my wing. Not necessarily a business. Just a place where my sons can move their bodies and use their mind. Like therapy for them. Business is not my thing.',
          shortVideoLink: '',
          fullVideoLink: 'https://www.youtube.com/embed/N016Ka053tQ',
          img: abdullahHaddad,
          video: video1,
        },
        {
          name: 'Olivia Wilde',
          img: img2,
        },
        {
          name: 'DDD',
          img: image,
        },
        {
          name: 'EEE',
          img: img2,
        },
        {
          name: 'FFF',
          img: image,
        },
        {
          name: 'GGG',
          img: img2,
        },
        {
          name: 'Chris Pine',
          img: image,
        },
        {
          name: 'Olivia Wilde',
          img: img2,
        },
        {
          name: 'Chris Pine',
          img: image,
        },
        {
          name: 'Olivia Wilde',
          img: img2,
        },
      ],
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = data => {
    this.setState({
      selectedPerson: data,
      isOpen: !this.state.isOpen,
    });
  };

  createTiles = total => {
    const tiles = [];
    for (let i = 0; i < 4; i += 1) {
      if (this.state.people[total + i]) {
        tiles.push(
          <Tile
            onClick={() => {
              this.handleClick(this.state.people[total + i]);
            }}
          >
            <CircleProfile src={this.state.people[total + i].img}>
              {/* <ProfileImage src={img} alt="picture here" /> */}
            </CircleProfile>
            {this.state.people[total + i].name}
          </Tile>,
        );
      }
    }
    return (
      <div>
        <TileRow>{tiles}</TileRow>
      </div>
    );
  };

  createRows = () => {
    const rows = [];
    let total = 0;
    while (total < this.state.people.length) {
      rows.push(this.createTiles(total));
      total += 4;
    }
    return <div>{rows}</div>;
  };

  // create row with 4 tiles
  //

  render() {
    return (
      <div>
        <div>
          <Background />
        </div>
        <div>
          <Modal
            show={this.state.isOpen}
            onClose={this.handleClick}
            person={this.state.selectedPerson}
          />
        </div>
        <div>
          <LinkContainer>
            <Link href="/archives" to="/archives">
              Video Archives
            </Link>
            <Link href="/" to="/">
              Home
            </Link>
            <Link href="/about" to="/about">
              About Us
            </Link>
          </LinkContainer>
          <Header>
            <FormattedMessage {...messages.header} />
          </Header>
          {this.createRows()}
        </div>
      </div>
    );
  }
}

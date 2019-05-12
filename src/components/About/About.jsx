import React from 'react';
import '../../App.css';
import { Carousel } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const { Paragraph } = Typography;

class About extends React.Component {

    render() {

        return(
            <div>
                <Carousel autoplay>
                    <div className="Slide-image"><img src={require('../../img/slide1.jpg')} alt=""/></div>
                    <div className="Slide-image"><img src={require('../../img/slide2.jpg')} alt=""/></div>
                    <div className="Slide-image"><img src={require('../../img/slide3.jpg')} alt=""/></div>
                </Carousel>

                <Title>Spetaklis ŽUVĖDRA</Title>

                <Paragraph>
                    „Statyti Čechovą – tai diagnozuoti mūsų dabarties ligas, sielos podagras, intonacijomis dirbant tarsi skalpeliais. Ryžtis aktoriams vaidinti Čechovą – tai tarsi gydytojams duoti Hipokrato priesaiką, nes kiekviena čechoviškos dramaturgijos akimirka yra likimo metastazė. Deja, dažnai jo pjesėse esanti aistra, meilė, pavydas, neapykanta buvo vyniojami į intelektualius nutylėjimus ir minorinės elegijos rūką, pokalbius prie arbatos, kuomet gyvenimas praeina pro šalį. Bet visa tai – akademinė, o išties politinė cenzūra. Iš tiesų Čechovo pjesėse gyvenimas nepraeina pro šalį – jis atsiveria personažams bei žiūrovams visa savo meilės jėga ir egzistenciniu siaubu“, – mintimis apie statomą pjesę dalinasi režisierius Oskaras Koršunovas, kartu su aktoriais mėginantis atrasti pačią Čechovo pjesės šerdį, dažnai paslepiamą po puošniais kostiumais, ištaiginga scenografija ar pakiliomis intonacijomis.
                </Paragraph>

                <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                    Oskaro Koršunovo „Žuvėdra“ gimsta laboratorinėje erdvėje – OKT Studijoje, kurioje jau gimė režisieriaus spektakliai „Dugne“, „Paskutinė Krepo juosta“, pirmuosius žingsnius žengė „Hamletas“, „Miranda“: atviroje ir kartu intymioje, nepadailintoje, tikroje. Režisierius įžvelgia itin artimą ryšį tarp vis dar kūrybiniame procese esančios „Žuvėdros“ bei jau pastatytų „Hamleto“ ir „Dugne“.
                    „Tai yra labai gera pjesė eksperimentuoti. Nuo pat pradžių ji buvo pasmerkta paieškoms. „Žuvėdroje“ tęsiame temas, kurios yra „Hamlete“, „Dugne“: šiuolaikinis teatras, šiuolaikinis aktorius, šiuolaikinis žiūrovas. „Žuvėdra“ – tai tarsi trečioji triptiko dalis. Visas šias dalis jungia ypatingas dėmesys aktoriams. „Hamlete“ apskritai atsisakome tradicinės teatrinės erdvės – čia nebelieka skirties tarp scenos ir užkulisių, o aktoriai žiūrovų akivaizdoje sėda prie grimo staliukų, grimuojasi ir čia pat kuria vaidmenis. „Dugne“ aktoriai ir žiūrovai sėdasi už vieno stalo, taip visiškai panaikinant rubikoną tarp žiūrovų ir aktorių. „Žuvėdroje“ šis procesas vystomas dar radikaliau, tarsi siekiant įspūdžio, jog istorija vyksta kartu su žiūrovu. Toks interaktyvumas nėra savitikslis – jau prieš penkiolika metų mūsų teatras suformulavo vieną pagrindinių savo motto klasiką statyti kaip šiuolaikinę dramaturgiją, paverčiant ją ne istoriniu ekskursu, o betarpišku išgyvenimu. Todėl norime, jog spektaklio kūrime dalyvautų ir pats žiūrovas.“, – teigia Oskaras Koršunovas.
                </Paragraph>
            </div>
        );
    }
}

export default About;

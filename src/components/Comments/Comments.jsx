import React from 'react';
import '../../App.css';
import {Avatar, Comment, Tooltip} from "antd";

class Comments extends React.Component {

    render() {
        return(
            <div>
                <Comment
                    key={1}
                    author={<span>Vardenis Pavardenis</span>}
                    avatar={(
                        <Avatar
                            src={require('../../img/avatar1-01.png')}
                            alt="Vardenis Pavardenis"
                        />
                    )}
                    content={(
                        <p>„Žuvėdra“ – tai spektaklis, kurį visi privalo išdrįsti pamatyti. Žiūrėti spektaklį buvo tikras „malonumas“. „Malonumas“ kabutėse, nes spektaklis priverčia susimąstyti apie tai, ką Čechovas mums sako jau 120 metų ir apie mūsų vietą šiame pasaulyje. Mes turime dėkoti už progas išvysti tokius spektaklius, kaip Koršunovo „Žuvėdra“.</p>
                    )}
                    datetime={(

                        <Tooltip>
                            <span>2019-03-01</span>
                        </Tooltip>
                    )}
                />
                <Comment
                    key={2}
                    author={<span>Kitas Kitauskas</span>}
                    avatar={(
                        <Avatar
                            src={require('../../img/avatar1-02.png')}
                            alt="Kitas Kitauskas"
                        />
                    )}
                    content={(
                        <p>Mane labiausiai sužavėjo aktorių darbas, kaip jie konfliktų metu gniaužia savo emocijas tol, kol sprogsta. Režisūra ir vaidyba šia prasme buvo genialios, jos persmelkė publiką nuolat stiprėjančių emocijų kriokliu, privesdamos prie galutinio katarsio šūviu užkulisiuose.</p>
                    )}
                    datetime={(

                        <Tooltip>
                            <span>2019-03-23</span>
                        </Tooltip>
                    )}
                />
                <Comment
                    key={3}
                    author={<span>Mergina Tokia</span>}
                    avatar={(
                        <Avatar
                            src={require('../../img/avatar1-04.png')}
                            alt="Mergina Tokia"
                        />
                    )}
                    content={(
                        <p>Lyginant šį montažą su kitais, didesnio kalibro to pačio režisieriaus spektakliais, ir ypač su paskutiniuoju, neužmirštama Čechovo „Žuvėdros“ dekonstrukcija 2014-tais metais, ši pjesė atrodo tik kaip skliaustai tarp kitų ambiciškų režisieriaus projektų. Tačiau Beketo tekstas, nors ir nebūdamas pačiu žymiausiu, yra vienas iš pagrindinių absurdo teatro autoritetų, o Koršunovo prisilietimas pjesės koordinatėms duoda tobulą atsaką.</p>
                    )}
                    datetime={(

                        <Tooltip>
                            <span>2019-04-23</span>
                        </Tooltip>
                    )}
                />
            </div>
        );
    }
}

export default Comments;

import React from 'react';
import { connect } from 'react-redux';

/* components */
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const Home = (props) => {
    const {current} = props;

    return (
        <div style={{ background: "#141414" }}>
            <Menu/>

            <BannerMain
                videoTitle={current.title}
                url={current.url}
                videoDescription={current.description}
            />

            <Carousel category={dadosIniciais.categorias[0]} />

            <Carousel category={dadosIniciais.categorias[1]} />

            <Carousel category={dadosIniciais.categorias[2]} />

            <Footer/>
        </div>
    );
}

const mapStateToProps = state => ({current: state.banner.currentVideo});
export default connect(mapStateToProps)(Home);

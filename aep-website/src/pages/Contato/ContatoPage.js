import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton'
import Cookie from '../../components/Cookies/Cookies'
import ImgContato from '../../assets/img-contato.jpg'
import Instagram from '../../assets/icon-instagram.svg'
import Facebook from '../../assets/icon-facebook.svg'
import Youtube from '../../assets/icon-youtube.svg'
import IconEmail from '../../assets/icon-email.png'
import IconTelefone from '../../assets/icon-telefone.png'
import './ContatoStyles.css'


const ContatoPage = () => {
  return (
    <>
      <Header />
      <section className='section__contato'>
        <div className='container__contato'>
          <img src={ImgContato} alt='Imagem de Contato' />
          <div className='container__dados'>
            <h2>Entre em contato.</h2>
            <div class="contato-endereco">
              <ul className='dados'>
                <p>Rua Mané Vicente, 999</p>
                <p>Florianopolis - SC</p>
              </ul>
              <address class="contato-meios ">
                <div className='container__icon-contato'>
                <img src={IconEmail} class="img-icone" alt="Instagram" />
                <a href="mailto:achadoseperdidos@unisenai.com.br">achadoseperdidos@unisenai.com.br</a>
                </div>
                <div className='container__icon-contato'>
                <img src={IconTelefone} class="img-icone" alt="Instagram" />
                <a href="tel:+5548998117717">+55 48 998117717</a>
                </div>
              </address>
            </div>
            <div className='contato__redes'>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <img src={Instagram} class="img-icone" alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <img src={Facebook} class="img-icone" alt="Facebook" />
              </a>

              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <img src={Youtube} class="img-icone" alt="Youtube" />
              </a>

            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
      <Cookie />
    </>


  )
}

export default ContatoPage

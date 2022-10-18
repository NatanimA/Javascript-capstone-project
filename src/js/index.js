import '../style.css';
import imgLogo from '../assets/century-logo.png'

const logo = document.querySelector('#logo-container')

logo.innerHTML = `<a href="#"><img class="logo-image" src="${imgLogo}" alt="century-cinema"></a>`
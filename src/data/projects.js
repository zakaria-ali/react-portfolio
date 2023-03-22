import Bondi from '../assets/bondi.png'
import CustomerOrder from '../assets/customerOrder.png'
import MyForm from '../assets/form.png'
import Leon from '../assets/leon.png'
import Note from '../assets/note.png'
import MyPortfolio from '../assets/portfolio.png'
import Responsev from '../assets/responsev.png'
import Robot from '../assets/robot.jpg'
import Fitclub from '../assets/fitclub.png'
import AdimnApp from '../assets/adimnApp.png'
import Weather from '../assets/weather.png'


export const projects = [
  {
    image:<img src={Robot} alt="" />,
    description:
      "Robot able to hear the person's question and answer it in Arabic. Developed using gTTS, speech_recognition and ChatterBot library.",
    github: 'https://github.com/zakaria-ali/AAUP-Engineering-Robot',
    preview: 'https://docs.google.com/document/d/18ipZGTbdvCUCzWCuCQa3H4qty6Ow8u6W/edit?usp=sharing&ouid=101766767548763033300&rtpof=true&sd=true'
  },
  {
    image: <img src={Bondi} alt="" />,
    description: 'Responsive web page designed using Bootstrap, shows a template of a company page with Services ,Portfolio, and other sections. ',
    github: 'https://github.com/zakaria-ali/Bondi-Project',
    preview: 'https://zakaria-ali.github.io/Bondi-Project/'
  },
  {
    image: <img src={Leon} alt="" />,
    description: 'Web page designed with HTML, and CSS show a template of a company page with Services ,Portfolio, and other sections.',
    github: 'https://github.com/zakaria-ali/Lion-Web-Page',
    preview: 'https://zakaria-ali.github.io/Lion-Web-Page/'
  },
  {
    image: <img src={Note} alt="" />,
    description: 'Page able user to record his notes and tasks and delete, edit, and check them, with a feature of Local Storage to save data when the page is closed.',
    github: 'https://github.com/zakaria-ali/Note-Page',
    preview: 'https://zakaria-ali.github.io/Note-Page/'
  },
  {
    image: <img src={CustomerOrder} alt="" />,
    description: 'Web Pages designed using Oracle Apex, for displaying, searching and modifying orders made by customers.',
    github: 'https://github.com/zakaria-ali/Customer-Orders-Application',
    preview: 'https://apex.oracle.com/pls/apex/r/zakaria_project/customer-orders12345646851/home?session=116163867163283'
  },
  {
    image: <img src={Responsev} alt="" />,
    description: 'I designed a responsive site to learn, gain experience, and train on how to manage pages and make them responsive.',
    github: 'https://github.com/zakaria-ali/Responsive-Site',
    preview: 'https://zakaria-ali.github.io/Responsive-Site/'
  },
  {
    image: <img src={MyForm} alt="" />,
    description: 'I have designed a page that contains a form for entering user information, but within specific validations, if they are not applied, information will not be sent to the server.',
    github: 'https://github.com/zakaria-ali/Form-Validation',
    preview: 'https://zakaria-ali.github.io/Form-Validation/'
  },
  {
    image: <img src={MyPortfolio} alt="" />,
    description: 'I designed my own  responsive portfolio website using  HTML, CSS, and Bootstrap.',
    github: 'https://github.com/zakaria-ali/portfolio',
    preview: 'https://zakaria-ali.github.io/portfolio/'
  },
  {
    image: <img src={Fitclub} alt="" />,
    description: 'A responsive website for a fitness club that was designed and built by React based on a beautiful animation, where several libraries from React were used to complete the project.',
    github: 'https://github.com/zakaria-ali/React-Fit-Club',
    preview: 'https://zakaria-ali.github.io/React-Fit-Club/'
  },
  {
    image: <img src={AdimnApp} alt="" />,
    description: 'The authentication page enables you to create an account, log in and out, change the password through firebase API, and navigate the pages using the react-router-dom library.',
    github: 'https://github.com/zakaria-ali/React-Admin-App',
    preview: 'https://zakaria-ali.github.io/React-Admin-App/'
  },
  {
    image: <img src={Weather} alt="" />,
    description: 'A web page that aims to display the current weather and the weather after 24 hours based on the openweathermap API.',
    github: 'https://github.com/zakaria-ali/React-Weather-Conditions',
    preview: 'https://zakaria-ali.github.io/React-Weather-Conditions/'
  },
];

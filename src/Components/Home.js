import HomePageImage from "../Assert/Images/pexels-william-choquette-2641886 2.png"
import "../Styles/Home.scss";

const Home = () => {
 return (
  <section className="Home">
   <figure>
        <img src={HomePageImage} alt="HomePage"/>
   </figure>

   <article>
       <div class="quart">
        <h1>“To live a full life,<br></br>you have to fill your stomach first”</h1>
        <h6>by aRandomFoodie</h6>
       </div>
       <div class="intro">
           <h2>Namaste</h2>
           <h4>we are creating a healthy community for foodies in india. Currenlty we are working on spreading quality recipies all around the world. </h4>
       </div>
       <div class="moreinfo">
            <button>See our Services</button>
       </div>
   </article>
   
  </section>
 );
};

export default Home;

import styles from '../assets/styles/home.module.css'
import Avatar from "../assets/imgs/Avatar.png"
import Image1 from "../assets/imgs/image1.png"
import Image2 from "../assets/imgs/image2.png"
import Image3 from "../assets/imgs/image3.png"
import Image4 from "../assets/imgs/image4.png"
import Image5 from "../assets/imgs/image5.png"
import Image6 from "../assets/imgs/image6.png"
import Image7 from "../assets/imgs/image7.png"
import Image8 from "../assets/imgs/image8.png"
import Image9 from "../assets/imgs/image9.png"
import Image10 from "../assets/imgs/image10.png"  
import Image11 from "../assets/imgs/image11.png"
import Image12 from "../assets/imgs/image12.png"
import Rectanguele from "../assets/imgs/Rectangle 1.png" 
import Header from './utils/Header'

function Home(){
    return(
    <>
      <Header
      home="./"
      loja="./loja"
      novocafe="./novocafe"
      cafes="./cafes"
      />
      <div className={styles.section_englober}>
        <section>
          <div className={styles.section_container_text}>
            <h4 className={styles.section_subtitle}>NOVIDADE</h4>
            <h1 className={styles.section_main_text}>
              Encontre o seu <br />
              café perfeito!
            </h1>
            <img src={Rectanguele} alt="Rectangle" />
            <h2 className={styles.section_about_text}>
              Explore dezenas de variações da bebida favorita
              <br />
              entre os devs ao redor do mundo!
            </h2>
          </div>
          <div className={styles.section_imgs_container}>
              <img
                src={Image1}
                alt={"Image1"}
                className={styles.section_imgs}
              />
              <img
                src={Image2}
                alt={"Image2"}
                className={styles.section_imgs}
              />
              <img
                src={Image3}
                alt={"Image3"}
                className={styles.section_imgs}
              />
              <img
                src={Image4}
                alt={"Image4"}
                className={styles.section_imgs}
              />
              <img
                src={Image5}
                alt={"Image5"}
                className={styles.section_imgs}
              />
              <img
                src={Image6}
                alt={"Image6"}
                className={styles.section_imgs}
              />            
              <img
                src={Image7}
                alt={"Image7"}
                className={styles.section_imgs}
              />
              <img
                src={Image8}
                alt={"Image8"}
                className={styles.section_imgs}
              />
              <img
                src={Image9}
                alt={"Image9"}
                className={styles.section_imgs}
              />
              <img
                src={Image10}
                alt={"Image10"}
                className={styles.section_imgs}
              />
              <img
                src={Image11}
                alt={"Image11"}
                className={styles.section_imgs}
              />
              <img
                src={Image12}
                alt={"Image12"}
                className={styles.section_imgs}
              />
          </div>
        </section>
      </div>

      <article className={styles.article_home}>
        <div className={styles.article_introduction}>
          <h4 className={styles.section_subtitle}>RECEITAS</h4>
          <h2>Confira as últimas receitas</h2>
          <h5 className={styles.section_about_text}>
            Dê uma olhada nas receitas mais amadas
          </h5>
        </div>
        <aside>
          <div className={styles.coments_section}>
          <div className={styles.people_coments_container}>
                    <h6>EM ALTA🔥</h6>
                    <div className={styles.product_score}>
                        <h3>Cappuccino ☕</h3>
                        <h4>Extraordinário - 4/4</h4>
                    </div>
                    <p>Uma bebida ideal para os amantes de doce e cremosidade🤭</p>
                    <div className={styles.user_infos}>
                        <img src={Avatar} alt='Avatar'/>
                        <p>Rafaella Ballerini</p>
                    </div>
                </div>
                <div className={styles.people_coments_container}>
                    <h6>EM ALTA🔥</h6>
                    <div className={styles.product_score}>
                        <h3>Cappuccino ☕</h3>
                        <h4>Extraordinário - 4/4</h4>
                    </div>
                    <p>Uma bebida ideal para os amantes de doce e cremosidade🤭</p>
                    <div className={styles.user_infos}>
                        <img src={Avatar} alt='Avatar'/>
                        <p>Rafaella Ballerini</p>
                    </div>
                </div>
                <div className={styles.people_coments_container}>
                    <h6>EM ALTA🔥</h6>
                    <div className={styles.product_score}>
                        <h3>Cappuccino ☕</h3>
                        <h4>Extraordinário - 4/4</h4>
                    </div>
                    <p>Uma bebida ideal para os amantes de doce e cremosidade🤭</p>
                    <div className={styles.user_infos}>
                        <img src={Avatar} alt='Avatar'/>
                        <p>Rafaella Ballerini</p>
                    </div>
                </div>
                <div className={styles.people_coments_container}>
                    <h6>EM ALTA🔥</h6>
                    <div className={styles.product_score}>
                        <h3>Cappuccino ☕</h3>
                        <h4>Extraordinário - 4/4</h4>
                    </div>
                    <p>Uma bebida ideal para os amantes de doce e cremosidade🤭</p>
                    <div className={styles.user_infos}>
                        <img src={Avatar} alt='Avatar'/>
                        <p>Rafaella Ballerini</p>
                    </div>
                </div>
          </div>
          <p className={styles.more_examples}>Carregar mais receitas...</p>
        </aside>
      </article>

      <footer>  
        <h5>Copyright &lt;CODEFEE /&gt; 2023</h5>
        <p>Feito com muito amor e carinho pro meu chef</p>
      </footer>
    </>
    )
}

export default Home;
import React from "react";
import './work.css'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG6 from '../../assets/portfolio6.jpeg'
import IMG7 from '../../assets/portfolio7.jpeg'
import IMG8 from '../../assets/portfolio8.jpeg'
import IMG9 from '../../assets/portfolio9.jpeg'
import IMG10 from '../../assets/portfolio10.jpeg'
import IMG11 from '../../assets/portfolio11.jpeg'
import IMG12 from '../../assets/portfolio12.jpeg'
import IMG13 from '../../assets/portfolio13.jpeg'
import IMG14 from '../../assets/portfolio14.jpeg'
import IMG15 from '../../assets/portfolio15.jpeg'
import IMG16 from '../../assets/portfolio16.jpeg'

const Work = () => {
    return(
        <section id="portfolio">
            <h2>Our Works </h2>
            <div className="container portfolio__container" >
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG13} alt='1'/>
                    </div>
                    <h3>Our Showreel</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://www.youtube.com/watch?v=0WPjG80WbDk" className="btn" target='_blank'>Watch</a>
                     </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG5} alt='1'/>
                    </div>
                    <h3>A Long Day (Animated Short)</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://www.rebelvzn.com/a-long-day" className="btn" target='_blank'>Watch</a>
                     </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG6} alt='1'/>
                    </div>
                    <h3>Charles Fanti - Sake of Love (Music Video)</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://youtu.be/Pcq0_zbewXk" className="btn" target='_blank'>Watch</a>
                     </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG7} alt='1'/>
                    </div>
                    <h3>Blakk Rasta - Kunkunda (Music Video)</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://www.youtube.com/watch?v=OZfu0htmgjA" className="btn" target='_blank'>Watch</a>
                     </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG8} alt='1'/>
                    </div>
                    <h3>Fee Ranking - Diiri Diiri Daara Daara(Music Video)</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://www.youtube.com/watch?v=gya0KtVDQyc" className="btn" target='_blank'>Watch</a>
                     </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG9} alt='1'/>
                    </div>
                    <h3>Tee Cee- Joke (Animated Music video)</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://www.youtube.com/watch?v=TxJWk9Aa8lE" className="btn" target='_blank'>Watch</a>
                     </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG10} alt='1'/>
                    </div>
                    <h3>Roc Riva - Babylon Yu Rass(Music video)</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://www.youtube.com/watch?v=DCyH2DzDZXc" className="btn" target='_blank'>Watch</a>
                     </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG11} alt='1'/>
                    </div>
                    <h3>Street Market Ad (Advert)</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://www.youtube.com/watch?v=AKTqPhgXTBo" className="btn" target='_blank'>Watch</a>
                     </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG12} alt='1'/>
                    </div>
                    <h3>DJ Chucky - Chargie(Lyric Video)</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://www.youtube.com/watch?v=WpE6dxLtIbw" className="btn" target='_blank'>Watch</a>
                     </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG14} alt='1'/>
                    </div>
                    <h3>Keddi - Temptation (lyric Video)</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://www.youtube.com/watch?v=5rxvH3qpggQ" className="btn" target='_blank'>Watch</a>
                     </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG15} alt='1'/>
                    </div>
                    <h3>Bobby billion - Happy(Animation Video)</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://www.youtube.com/watch?v=f-RCvo_rEDM" className="btn" target='_blank'>Watch</a>
                     </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={IMG16} alt='1'/>
                    </div>
                    <h3>FloEazy -KPA (Visualizer)</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://www.youtube.com/watch?v=__vB0ZNMF9A" className="btn" target='_blank'>Watch</a>
                     </div>
                </article>
                </div>

             </section>

    )
}
export default Work
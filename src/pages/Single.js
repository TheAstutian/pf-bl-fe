import React from 'react';
import {Link} from 'react-router-dom';

const Single = () => {
  return (    
    <div className="single-page">
    <Link to='/'><h3>The Astutian</h3></Link>

    <article>
      <h1>Why earth is called earth, and not assbeads</h1>
      <p className='subtitle'>Stardate:1077.321</p>
      <section>
        <blockquote>
          <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before</p>
          <footer>Lazarus, long time no see</footer>
        </blockquote>
      </section>
      <section className='article'>
          <img src="https://www.photographyblog.com/imager/entryimages/126961/canon_eos_r50_photos_fdf3792588d24390107925a7a9d408d3.webp"/>
          <p>Lorem ipsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </section>
    </article>


    </div>
    
  )
}

export default Single
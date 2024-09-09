import React from 'react';
import classes from './Horizontal.module.css';
import { hori } from '../data';

function HorizontalScroll() {
  return (
    <section>
        <div className={classes.head}>
            <span>Other Skills</span>
            <h3>Technical skills</h3>
        </div>
        <div className={classes.horizontal_scroll_container}>
            <div className={classes.horizontal_scroll_content}>
                {hori.concat(hori).map((photo,index) => (
                    <div key={photo.id+index} className={classes.horizontal_scroll_item}>
                        <img src={photo.img} alt={`Photo`} />
                    </div>
                ))}
            </div>
        </div>
    </section>

  );
}

export default HorizontalScroll;

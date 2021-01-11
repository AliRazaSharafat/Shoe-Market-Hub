import React from 'react';
import Paper from '@material-ui/core/Paper';

const Home = () => {

  return (
    <Paper elevation={4} style={{ width: 700, margin: '0 auto', padding: 10, marginTop: 40, marginBottom: 40 }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Welcome to Shoe Market Hub</h2>
        <div style={{ textAlign: 'left' }}>
          <p style={{ textAlign: 'left', textIndent: 40, fontSize: 20 }}>
            Shoe Market Hub is one of the Pakistan’s leading high-end fashion retailers, contributing to the luxury vogue industry since 2011. From the establishment of this brand, its glamorous and stylish designs have been flaunted in fashion week runways, pop culture, red carpets, and renowned fashion magazines. It embodies incomparable perspicacity and superior quality which enables Insignia to offer proficiency to bring distinctiveness, instant recognition and elegance to its manufacturing: bags, clutches, women shoes, men shoes. With a sumptuous collection of men-women shoes, every day-use bags, fancy clutches and evening handbags, Insignia now counts more than 20 outlets all over in Pakistan including main cities Islamabad, Lahore, Karachi Multan etc.</p>

          <p style={{ textAlign: 'left', textIndent: 40, fontSize: 20 }}>
            Upscale high class production has always been at the center of the designer’s muse, therefore Insignia launches striking collection in every season catering the exceptional needs of customers. Insignia keeps a vision to build one of the world’s most treasured luxury brands in the fast fashion industry with an innovative approach in retail offering a premium customer experience.</p>
          <p style={{ textAlign: 'left', textIndent: 40, fontSize: 20 }}>
            Considering the customer’s needs and wants Insignia goes extra miles to stand out from the crowd to deliver exceptional customer service. Such professional and high quality services result in an indebted and happy customer.</p>
        </div>
        <h3><i> "I still have my feet on the ground,<br />
                I just wear better shoes"
        </i></h3>
            - Oprah Winfrey
            </div>
    </Paper >
  )
}

export default Home;
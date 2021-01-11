import React from 'react'
import Paper from '@material-ui/core/Paper';

export default function AboutUs() {
  return (
    <Paper elevation={4} style={{ margin: '0 auto', marginTop: 40, marginBottom: 40, width: 700, textAlign: 'center', padding: 10 }}>
      <div>
        <h2>About Us!</h2>
        <p style={{ textAlign: 'left', textIndent: 30, fontSize: 20 }}>
          In an era of convenience, when you can order literally anything online, we are happy to provide a fantastic alternative. When you enter our Derby Street store, you will find most of our inventory right in the open, we encourage you to browse and enjoy trying on anything you like. Our staff will be happy to assist if you like. None of our employees are on commission or incentives of any kind, so they are there to help, not hover. Our team is here to help you find the perfect shoe for any occasion.</p>
        <p style={{ textAlign: 'left', textIndent: 40, fontSize: 20 }}>
          Not just shoes…
          We are constantly adding fresh brands and merchandise. Did you know we also sell clothing, handbags, and accessories like Yeti and Prana? Ladies, you may come in for a sling-back stiletto, and walk out with a Prana dress. Guys - you may come in for a pair of Cole Haans, walk out with some Johnnie O’s. Always on trend, you’ll find something new every time you come into the store!</p>
        <p style={{ textAlign: 'left', textIndent: 40, fontSize: 20 }}>
          This is the beauty of shopping local, in a real store. Browse, try on, get ideas, or find something unexpected. Bring in that dress to see if the shoes match. Ask our staff to help you find the perfect shoe. And, if you find something you like, you can take it home that day, no waiting for UPS!</p>
        <p style={{ textAlign: 'left', textIndent: 40, fontSize: 20 }}>
          So thanks for keeping it local, we look forward to seeing you in the store!

          Sincerely,
        </p>
        <h4>
          <i>The Shoe Market Hub Family</i>
        </h4>
      </div>
    </Paper>
  )
}

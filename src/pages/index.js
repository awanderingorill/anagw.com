import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"

export default () => 
  <>
    <Layout></Layout>
    <Container>
      <div class="first-column">
        <p class="about">
          <span>Ana Giraldo-Wingler</span>—Software Developer.
        </p> 
        <p>
          From 2014-2018, I worked as a software developer doing full-stack work, mostly frontend. During that time, I co-founded an art-tech agency called <a href="http://girlfriends.site" target="new">Girlfriends Labs</a>. Since 2018, I have worked as a Product Manager, first at <a href="http://siberia.io" target="new">Siberia</a> and then at the <a href="http://drl.io" target="new">Drone Racing League</a>.
        </p> 
        <p class="currently glow">
          2020 has been a year of reflection for me, and I realized that I really miss building things hands-on.
          I’m currently looking for a remote full-stack software engineering position focused on frontend. Let's talk! 💫
        </p>
        <p class="contact">
          Get in touch via <a href="mailto:agiraldow@gmail.com">email</a>. You can find me on <a href="http://twitter.com/awanderingorill" target="_blank">Twitter</a> and <a href="http://github.com/awanderingorill" target="_blank">GitHub</a>. I also post 🎵 on <a href="http://soundcloud.com/verita-gomez" target="_blank">SoundCloud</a>  and 📷 on <a href="http://instagram.com/anita.gw" target="_blank">Instagram</a>.
        </p>
      </div>
      <div class="second-column">
        <div class="gradient">
            <div class="description">
              <h1>Misc.</h1>
              I've been into making CSS gradients lately. This is one of them!
            </div>
            <div class="gradient-background">
              <div class="gradient-foreground"></div>
            </div>
          </div>
      </div>
    </Container>
  </>
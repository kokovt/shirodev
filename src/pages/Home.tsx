/**
 * shirodev.dev - my personal website
 * Copyright (c) 2026 Shiro.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import banner from "../assets/images/ame banner.gif"
import Gravatar from "../Components/Gravatar"

export default function Home() {
  return (
    <div className="homePage">
      <section className="bannerHolder">
        <img src={banner} alt="Banner of Ame from NSO" className="homeBanner" />
      </section>
      <section className="introPage">
        <Gravatar size={96} className="gravatar"></Gravatar>
        <div className="infoHolder">
          <h1>Shiro</h1>
          <p className="names">also found as Onyx/Kokabiel</p>
          <p className="pronouns">she/her</p>
          <a className="quote" href="https://music.youtube.com/watch?v=luli3FTWDSI&si=YutKK-R2G8fbBfS6" target="_blank"><p className="Song quote">"I'd say I'm sorry, but I'm never gonna let go"</p></a>
        </div>
      </section>


      <p className="selfQuote">
        "Find someone to live for, not to die for."
      </p>

      <hr />


      <section className="about">
        <h2>About</h2>
        <p>Hello! I am Shiro, but you will occasionally see me around as Onyx / Kokabiel. I am a computer science student at the <b>University of New Mexico</b>. I am currently working on a
          <b> Needy Streamer Overload based operating system, called NSOS.</b><br /> <br /> In my freetime when programming, if I am not working on my OS I am typically working on discord bots in Typescript,
          Websites, or messing around in Turing complete to learn more about how wiring and how computers work.<br /><br />I am also interested in riding motorcycles, and I own my own 2015 Yamaha R3! It needs
          a lot of work to get in a good condition again, since it was in bad condition when I bought it, but its my first bike! <br /><br /> I also am interested in games like Ultrakill, Titanfall 2,
          A hat in time, and obviously, Needy Streamer Overload, where a lot of my software design is derivative of. I also am really interested in psychology and other mental health topics.<br /><br />
          <b><i>All of my software and projects are either under the <a href="https://www.gnu.org/licenses/agpl-3.0.html" className="licenseLink" target="_blank">AGPL-3.0 license</a>, or the <a href="https://unlicense.org/" target="_blank">Unlicense</a>.</i></b>
          <br />All of my newer software will be primarily published to <a href="https://codeberg.org/shirodev" target="_blank">Codeberg</a>, and mirrored to <a href="https://github.com/kokovt" target="_blank">Github</a>. All of my older projects can be found on <a href="https://github.com/kokovt" target="_blank">Github</a>.
        </p>
      </section>

      <section className="featuredProject">
        <h2>Featured Project</h2>
        <h3>NSOS</h3>
        <p>
          NSOS is a Needy Streamer Overload inspired operating system, meant to replicate the Operating system "Windose 20" in Needy Streamer Overload. It has early WIP support for Raspberry PI boards,
          x86_64 support, and limited framebuffer output (drawing text from a raw bitmap, drawing shapes and lines, and UART). <br /><br />

          <i>Neither Me, nor any of my projects are affiliated with WSS playground, Alliance Arts, or Microsoft in any sort of way.</i>
        </p>

        <div className="NSOS info">
          <span>C</span>
          <span>AGPL-3.0</span>
        </div>
        <a href="./projects">View all projects &rarr;</a>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <div>
          <h3>X</h3>
          <p>@_shirodev</p>
        </div>
        <div>
          <h3>Codeberg</h3>
          <p>shirodev</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>shiro@shirodev.dev</p>
          <span>Responses will come from a seperate email.</span>
        </div>
      </section>
      <hr />

    </div >
  )
}

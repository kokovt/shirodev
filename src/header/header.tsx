import Gravatar from './gravatar';
import '../assets/scss/header.scss';
import ThemeToggle from './themetoggle';
import homeUrl from "../assets/images/home.png";
import blogUrl from "../assets/images/blog.png";
import projectsUrl from "../assets/images/projects.png";

export default function Header() {
    return <div className="header">
        <div className="header-left" onClick={() => window.location.href = '/'}>
            <Gravatar />
            <h1>shirodev.dev</h1>
        </div>
        <div className="header-center">
            <h1><img src={homeUrl} className="header-icon"></img><a href="/">Home</a></h1>
            <h1><img src={blogUrl} className="header-icon"></img><a href="/blog">Blog</a></h1>
            <h1><img src={projectsUrl} className="header-icon"></img><a href="/projects">Projects</a></h1>
        </div>
        <div className="header-right">
            <ThemeToggle />
        </div>
    </div>
}
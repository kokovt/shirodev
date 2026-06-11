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

import { Link, NavLink } from 'react-router-dom';
import Gravatar from './Gravatar';
import homeIcon from "../assets/images/home.png";
import blogIcon from "../assets/images/blog.png";
import projectsIcon from "../assets/images/projects.png";
import ThemeToggle from './ThemeToggle';
import "../assets/scss/header.scss";

export default function Header() {
    return (
        <header>
            <div className="header">
                <Link to="/" className="header-left">
                    <Gravatar size={56} />
                    <h1>shirodev.dev</h1>
                </Link>

                <nav className="header-center">
                    <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                        <img src={homeIcon} className="header-icon" alt="" />
                        Home
                    </NavLink>
                    <NavLink to="/blog" className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>
                        <img src={blogIcon} className="header-icon" alt="" />
                        Blog
                    </NavLink>
                    <NavLink to="/projects" className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>
                        <img src={projectsIcon} className="header-icon" alt="" />
                        Projects
                    </NavLink>
                </nav>

                <div className="header-right">
                    <div className="header-right">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header >
    )
}
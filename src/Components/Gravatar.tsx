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

export const GRAVATAR_HASH = '99a35110230044ee5eac0882a6fe3bea';

function gravatarUrl(size = 200): string {
    return `https://www.gravatar.com/avatar/${GRAVATAR_HASH}?s=${size}&d=mp`;
}

interface GravatarProps {
    size?: number;
    className?: string;
}

export default function Gravatar({ size = 200, className }: GravatarProps) {
    return (
        <img src={gravatarUrl(size)}
        className={className}
        alt="Shiro"
        width={size}
        height={size}/>
    )
}
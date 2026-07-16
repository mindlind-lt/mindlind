import Link from 'next/link';
import './footer-menu.css';

export default function FooterMenu() {
    return (
        <ul className='ftr-menu'>
            <li className='ftr-menu-item'>
                <Link href="/">Home</Link>
            </li>
            <li className='ftr-menu-item'>
                <Link href="/agency">Agency</Link>
            </li>
            <li className='ftr-menu-item'>
                <Link href="/services">Leistungen</Link>
            </li>
            <li className='ftr-menu-item'>
                <Link href="/projects">Projekte</Link>
            </li>
            <li className='ftr-menu-item'>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );
}

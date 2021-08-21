import $ from './header.module.css';
import Link from 'next/link';
import classNames from 'classnames';
export default function Header() {
  return (
    <nav className={$.nav}>
      <div className={classNames('fblSection', 'flexBetween')}>
        <p className={$.navLogo}>The Full Body Lab</p>
        <ul>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about-me">About me</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

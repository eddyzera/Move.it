import style from '../styles/components/NavBar.module.css'
import Link from 'next/link'
import { IoMdExit } from "react-icons/io"
import { RiHomeLine, RiMedal2Fill } from "react-icons/ri";

import { useSession, signOut } from 'next-auth/client'

export default function NavBar() {

    const [session] = useSession()

    return (
        <div id={style.navBar}>
            <img src="favicon.png" alt="logo - move.it"/>
            <div className={style.NavBarMenu}>
                <nav>
                    <ul>
                        <li>
                            {session && (
                                <button onClick={(): Promise<void> => signOut({ callbackUrl: 'http://localhost:3000' })} >
                                    <IoMdExit size="2.5rem" />
                                </button>
                            )}
                        </li>
                        <li>
                            <Link href="/home">
                                <RiHomeLine size="2.5rem" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/ranked">
                                <RiMedal2Fill size="2.5rem" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
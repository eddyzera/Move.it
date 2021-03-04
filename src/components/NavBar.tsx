import style from '../styles/components/NavBar.module.css'
import { IoMdExit } from "react-icons/io"
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
                    </ul>
                </nav>
            </div>
        </div>
    )
}
import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom"
import "./Styles/Layout.css"

export function Layout(){

    return (
        <div id="layout">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'

const AppLayout = () => {
    return (
        <div>
            <div className="grid-background"></div>
            <main className="min-h-screen container pl-10">
                <Header />
                <Outlet />    
            </main>
            <div class="text-center p-4 text-gray-500 bg-gray-900 text-sm">
                <span class="text-white font-semibold">© 2025 Yonas Walelign</span>
            </div>
        </div>
    )
}

export default AppLayout
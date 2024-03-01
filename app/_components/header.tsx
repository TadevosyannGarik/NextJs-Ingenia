import { Button } from '@/components/ui/button';
import { Box } from 'lucide-react';
import { Terminal } from 'lucide-react';


function Header() {
    return (
        <header className="bg-white blur-23 bg-white/30 backdrop-blur border border-b">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="flex items-center text-indigo-800" href="#">
                            <Box size={50} className="mr-2" />
                            <span className='text-2xl font-semibold'>
                                Ingenia
                            </span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> 
                                        About 
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> 
                                        Careers 
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> 
                                        History 
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> 
                                        Services 
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> 
                                        Projects 
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> 
                                        Blog 
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Button variant="outline">
                                Sign In
                            </Button>
                            <div className="hidden sm:flex">
                                <Button variant="default">
                                    Sign Up                                   
                                </Button>
                            </div>
                        </div>
                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

function Hero() {
    return (
        <>
            <div className='mb-12 sm:mt-40 flex flex-col items-center justify-center text-center'>
                <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-lg bg-white/50 px-7 py-3 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
                    <p className='text-sm font-semibold text-gray-700'>
                        See What's New | AI Diagram
                    </p>
                </div>
            
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
                Documents & diagrams for{' '}
                    <span className=' text-indigo-500'>
                    engineering teams
                    </span>
                </h1>
                <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
                    All-in-one markdown editor, collaborative canvas, and diagram-as-code builder, 
                    Ingenia facilitates seamless collaboration and dynamic content creation. 
                    Whether drafting documentation or designing system architectures
                </p>
                <Button size="lg" asChild className='mt-5'>
                    <Link href="/notes">
                        Get started{' '}
                        <ArrowRight className='ml-2 h-5 w-5' />
                    </Link>
                </Button>
            </div>
        </>
    )
}

export default Hero
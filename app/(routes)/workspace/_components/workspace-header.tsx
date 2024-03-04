import { Button } from '@/components/ui/button'
import { Box, Link, Save } from 'lucide-react'


function WorkspaceHeader({onSave}:any) {
    return (
        <div className='p-3 border-b flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <a className="flex items-center text-indigo-800" href="#">
                    <Box size={50} className="mr-2" />
                    <span className='text-2xl font-semibold'>
                        Ingenia
                    </span>
                </a>
                <h2>
                    File Name
                </h2>
            </div>
            <div className='flex items-center gap-4'>
                <Button 
                    className='h-8 text-[12px] gap-2 bg-yellow-500 hover:bg-yellow-600'
                    onClick={()=>onSave()}
                > 
                    <Save className='h-4 w-4' /> 
                    Save 
                </Button>
                <Button className='h-8 text-[12px] gap-2 bg-blue-600 hover:bg-blue-700'>
                    Share 
                    <Link className='h-4 w-4' /> 
                </Button>
            </div>
        </div>
    )
}

export default WorkspaceHeader
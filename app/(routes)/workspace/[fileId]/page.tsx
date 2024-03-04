"use client"
import React, { useEffect, useState } from 'react'
import WorkspaceHeader from '../_components/workspace-header'
import Editor from '../_components/editor'
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FILE } from '../../dashboard/_components/file-list';
import Canvas from '../_components/canvas';


function Workspace({params}:any) {
    const [triggerSave,setTriggerSave]=useState(false);
    const convex=useConvex();
    const [fileData,setFileData]=useState<FILE|any>();
    
    useEffect(()=>{
        console.log("FILEID",params.fileId)
        params.fileId&&getFileData();
    },[])

    const getFileData=async()=>{
        const result=await convex.query(api.files.getFileById,{_id:params.fileId})
        setFileData(result);
    }

    return (
        <div>
            <WorkspaceHeader onSave={()=>setTriggerSave(!triggerSave)} />
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className=' h-screen'>
                    <Editor 
                        onSaveTrigger={triggerSave}
                        fileId={params.fileId}
                        fileData={fileData}
                    />
                </div>
                <div className='h-screen border-l'>
                    <Canvas
                        onSaveTrigger={triggerSave}
                        fileId={params.fileId}
                        fileData={fileData}
                    />
                </div>
            </div>
        </div>
    )
}

export default Workspace
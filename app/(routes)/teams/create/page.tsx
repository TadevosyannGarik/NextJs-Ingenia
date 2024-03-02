"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation } from "convex/react";
import { Box } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";


function CreateTeam() {
    const [teamName,setTeamName] = useState('');
    const createTeam = useMutation(api.teams.createTeam);
    const { user }: any = useKindeBrowserClient();
    const router = useRouter()

    const createNewTeam = () => {
        createTeam({
            teamName: teamName,
            createdBy: user?.email
        }).then(resp => {
            console.log(resp)
            if (resp) {
                router.push("/dashboard")
                toast("Team created successfully")
            }
        })
    }

    return (
        <div className="p-16">
            <a className="flex items-center text-indigo-800" href="#">
                <Box size={50} className="mr-2" />
                <span className='text-2xl font-semibold'>
                    Ingenia
                </span>
            </a>
            <div className="flex flex-col items-center mt-8">
                <h2 className='font-bold text-[40px] py-3'>
                    What should we call your team?
                </h2>
                <h2 className='text-gray-500'>
                    You can always change this later from settings.
                </h2>
                <div className='mt-7 w-[40%]'>
                    <label className='text-gray-500'>
                        Team Name
                    </label>
                    <Input 
                        placeholder='Team Name'
                        className='mt-3'
                        onChange={(e) => setTeamName(e.target.value)}
                    />
                </div>
                <Button 
                    className='mt-9 w-[30%]' 
                    variant="default" 
                    disabled={!(teamName && teamName?.length > 0)}
                    onClick={() => createNewTeam()}
                >
                    Create Team
                </Button>
            </div>
        </div>
    )
}

export default CreateTeam
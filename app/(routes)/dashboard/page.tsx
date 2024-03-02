"use client"

import { Button } from "@/components/ui/button"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs"

function DashBoard() {
    return (
        <div>
            <LogoutLink>
                <Button>
                    Logout
                </Button>
            </LogoutLink>
        </div>
    )
}

export default DashBoard
import Image from "next/image";
import ThemeToggle from "@/components/ui/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";



export default function Home() {
	return (
		<header>
			<div>
				<Container className="flex gap-5 justify-center items-center my-4">
					<h1 className="flex-grow text-xl">Creative A/B Tester</h1>
					<ThemeToggle />

					{/* if not logged in */}
					<div>
						<Button className={`${buttonVariants({ size: 'sm' })} flex-grow-0`}>Log In / Sign Up</Button>
					</div>

					{/* If Logged In */}
					{/* <Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar> */}
				</Container>
			</div>
			<Separator />
		</header>
	);
}

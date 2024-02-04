import Link from "next/link";
import Container from "../Container";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
    return (
        <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
            <Container>
                <div className="w-full py-10 flex gap-2 justify-around text-1xl">
                    <div>
                        {/* TODO: Replace with actual links */}
                        {/* TODO: Make FAQ Page */}
                        <Link href="#">FAQ</Link>
                    </div>
                    <div className="flex flex-row gap-1">
                        <Link href="#">
                            <MdOutlineEmail />
                        </Link>
                        <Link href="#">
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;

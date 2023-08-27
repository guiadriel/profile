import { Navbar } from "@/components/Navbar";
import { FaCode } from 'react-icons/fa'

export default function Home() {
    return (
        <div className="bg-foreground antialiased bg-no-repeat bg-cover relative pb-8">
            <Navbar />

            <section className="container mx-auo text-white py-24 grid grid-cols-5 gap-8">
                <div className="col-span-3">
                    <div className="w-full">
                        <h2 className="text-primary text-7xl py-8 font-thin tracking-tighter">
                            Hi, {"I'm "}
                            <strong className="font-bold">Guilherme</strong>
                        </h2>
                        <p className="text-white text-3xl w-10/12 tracking-normal leading-relaxed">
                            I work with Javascript, PHP and SQL/NoSQL languages to{" "}
                            <strong className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">create</strong> innovative and high quality
                            technological solutions.
                        </p>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button className="mt-4 py-4 px-16 bg-quaternary border-quaternary transition-all rounded-md border-2 text-lg font-bold">
                            My work
                        </button>
                        <button className="px-16 py-4 bg-primary rounded-md mt-4 font-extrabold text-secondary">
                            Download CV
                        </button>
                    </div>
                </div>
                <div className="col-span-2 flex  mx-auto">
                    <img className="rounded-md h-96" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" alt="" />
                </div>

            </section>


            <section >
                <div className="container mx-auto ">
                    <h2 className="text-white text-4xl font-medium mb-4">My Services</h2>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="text-white rounded-md border-primary border-2 p-8">
                            <FaCode size={32} className="text-primary"/>
                            <h3 className="text-2xl tracking-tight font-medium py-4">Web Development</h3>
                            <p className="tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo amet illo delectus, ad id ipsam atque? Repellat ipsum veritatis est incidunt quae dolorem ea dolores!</p>
                        </div>

                        <div className="text-white rounded-md border-primary border-2 p-8">
                            <FaCode size={32} className="text-primary"/>
                            <h3 className="text-2xl tracking-tight font-medium py-4">Web Development</h3>
                            <p className="tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo amet illo delectus, ad id ipsam atque? Repellat ipsum veritatis est incidunt quae dolorem ea dolores!</p>
                        </div>

                        <div className="text-white rounded-md border-primary border-2 p-8">
                            <FaCode size={32} className="text-primary"/>
                            <h3 className="text-2xl tracking-tight font-medium py-4">Web Development</h3>
                            <p className="tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo amet illo delectus, ad id ipsam atque? Repellat ipsum veritatis est incidunt quae dolorem ea dolores!</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

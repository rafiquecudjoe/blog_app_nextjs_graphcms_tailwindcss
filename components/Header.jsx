import React, { useContext } from 'react'

import Link from "next/link"

const Categories = [
  { name: "React", slug: "react" },
  { name: "Web Developmet", slug: "web-dev" },
];

function Header() {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white">
                            The TECH Blog

                        </span>
                    
                    </Link>

                </div>
                <div className="hidden md:float-left md:contents">
                    {
                        Categories.map((cate => (
                            <Link key={cate.slug} href={`/category/${cate.slug}`}>
                                <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                                    {cate.name}
                                </span>
                            </Link>
                        )))
                    }


                </div>

            </div>
            
        </div>
    )
}

export default Header

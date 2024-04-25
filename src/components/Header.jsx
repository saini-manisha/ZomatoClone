

const Header = () => {
    return (
        <div id="Header" className="flex justify-between w-[1440px] h-[72px] mx-auto"  >
            <div>
                <img src="images/logoNike.png" alt="logo image" style={{ "width": "76px", "height": "42.5px" }}></img>
            </div>
            <nav>

                <div>
                    <ul className="absolute gap-[24px] left-[555px] top-[24px] flex w-[333px] h-[24px]  justify-between ">
                        <li className="46px font-semibold text-base ">Menu</li>
                        <li className="46px font-semibold text-base ">Location</li>
                        <li className="46px font-semibold text-base ">About</li>
                        <li className="46px font-semibold text-base ">Contact</li>

                    </ul>
                </div>

            </nav>
            <div><button className="w-[75px] text-center absolute h-[31px]  left-[1286px] top-[21px] py-[6px]  px-[16px] bg-[#D01C28] text-white"
            >Button</button></div>
        </div>
    )
}

export default Header
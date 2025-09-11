import React from 'react';
import Partners from "../../Homepage/Partners/Partners.jsx";


const ListTeam = ({number = 9}) => {
    return (
        <div className={"w-10/12 mx-auto flex sm:flex-row sm:flex-wrap flex-col gap-10"}>
            {Array.from({length: number}).map((_, i) => (
                <div key={i} className={"sm:w-[30%]"}>
                    <img className={"aspect-[16/10] object-cover"} src={`/Team/member${i + 1}.jpg`} alt=""/>
                    <div className={"flex flex-col items-center gap-5 my-5"}>
                        <h5 className={"font-bold"}>Username</h5>
                        <h6 className={"font-bold text-sxl text-secondary"}>Profession</h6>
                        <div className={"flex gap-5"}>
                            <img src="/social/TeamFacebook.png" alt=""/>
                            <img src="/social/TeamInstagram.png" alt=""/>
                            <img src="/social/TeamTwitter.png" alt=""/>
                        </div>
                    </div>
                </div>))}
        </div>)
}


const About = () => {
    return (


        <div className="font-montserrat flex flex-col mt-30 sm:my-0 mx-auto">
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-5 mx-auto w-8/12">
                {/*About Us Section*/}
                <div
                    className="text-center items-center sm:items-start grow basis-1/2 sm:text-start flex flex-col gap-10">
                    <h2 className={"text-forty sm:text-6xl font-bold"}>ABOUT US</h2>
                    <h4 className={"text-xl w-66"}>We know how large
                        objects will act, but things
                        on a small scale just do
                        not act that way.</h4>
                    <button className={"font-bold rounded-md py-4 px-8 bg-button-blue text-white"}>
                        Get Quote Now
                    </button>
                </div>

                {/*image section*/}
                <div className="py-15 sm:p-0 mt-30 sm:m-0 h-full grow basis-1/2">
                    <img className="w-full h-full" src="/About/face.png" alt=""/>
                </div>
            </div>
            {/*Kırmızı yazi Problems trying*/}
            <div
                className="w-8/12 sm:w-full  sm:text-left mx-auto sm:m-0 flex flex-col  gap-10 py-15">
                <div className={"sm:grow sm:basis-1 flex mx-auto sm:w-8/12"}>
                    <p className={"text-red-500 text-sxl"}>Problems trying</p>
                </div>
                <div className={"sm:grow flex-col sm:flex-row gap-10 sm:basis-3 sm:w-8/12 sm:mx-auto flex"}>
                    <h3 className={"font-bold text-center sm:text-left text-2xl sm:grow sm:basis-4/12 text-[#252B42]"}>Met
                        minim
                        Mollie non desert Alamo est
                        sit
                        cliquey dolor do met
                        sent.</h3>
                    <p className={"text-sxl sm:pr-60 sm:pl-20 sm:grow sm:basis-8/12"}>Problems trying to resolve the
                        conflict
                        between the
                        two
                        major realms of
                        Classical physics: Newtonian mechanics </p>
                </div>

            </div>

            {/*İstatistik bölümü*/}
            <div
                className={"flex flex-col sm:flex-row sm:justify-between w-8/12 mx-auto text-center items-center py-20 gap-20"}>
                <div>
                    <h1 className={"font-bold text-6xl text-[#252B42]"}>15K</h1>
                    <h5>Happy Customers</h5>
                </div>

                <div>
                    <h1 className={"font-bold text-6xl text-[#252B42]"}>150K</h1>
                    <h5>Monthly Visitors</h5>
                </div>

                <div>
                    <h1 className={"font-bold text-6xl text-[#252B42]"}>15</h1>
                    <h5>Countries Worldwide</h5>
                </div>

                <div>
                    <h1 className={"font-bold text-6xl text-[#252B42]"}>100+</h1>
                    <h5>Top Partners</h5>
                </div>
            </div>


            {/* Video */}
            <div className={"sm:w-1/2 w-10/12 mx-auto "}>
                <iframe className="aspect-video w-full rounded-md"
                        src="https://www.youtube.com/embed/u3gqdxh7pLE"
                        title="Best R6 Montage Ever"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                </iframe>
            </div>

            {/* Our team */}
            <div className={"text-center w-11/12 flex flex-col items-center my-30 gap-10 mx-auto"}>
                <h2 className={"text-forty  w-1/2  text-[#252B42] font-bold"}>Meet Our Team</h2>
                <p className={"text-sxl w-8/12 "}>Problems trying to resolve the conflict between the two major
                    realms of Classical physics: Newtonian mechanics </p>


                <ListTeam number={3}/>

            </div>
            <div
                className={"flex flex-col text-center items-center bg-lsecondary gap-5 py-10 border-1 border-lsecondary "}>
                <h2 className={"text-forty font-bold w-8/12"}>Big Companies Are Here</h2>
                <p className={"text-sxl w-9/12 "}>Problems trying to resolve the conflict between the two major realms
                    of
                    Classical physics: Newtonian
                    mechanics </p>
            </div>
            <Partners bg={"bg-lsecondary"}/>

            <div className={"flex w-full sm:h-screen  justify-center items-center content-center overflow-hidden"}>
                <div
                    className={"bg-[#2A7CC7] h-full sm:grow sm:basis-7/12 py-20 flex flex-col items-center justify-center text-white"}>
                    <div
                        className="flex flex-col items-center sm:w-1/2 mx-auto sm:items-start gap-5 sm:text-left text-center">
                        <h5 className={"font-bold"}>WORK WITH US</h5>
                        <h2 className={"text-forty font-bold w-7/12 sm:w-full"}>Now Let’s grow Yours</h2>
                        <p className={"text-sxl w-7/12 sm:w-full"}>The gradual accumulation of information about atomic
                            and small-scale behavior during the first quarter of the 20th </p>
                        <button className={"font-bold rounded-md py-4 px-8 outline-1 "}>
                            Button
                        </button>
                    </div>
                </div>
                <div className={"hidden sm:h-fit sm:flex sm:grow sm:basis-5/12"}>
                    <img className={"object-cover h-full w-full object-top"} src="/About/mass.jpg"
                         alt=""/>
                </div>
            </div>

        </div>
    );
};

export default About;
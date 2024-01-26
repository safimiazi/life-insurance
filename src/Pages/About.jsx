import about from "../assets/about.jpg"
const About = () => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 md:p-5 min-h-screen gap-5">
            <div className="border-2 col-span-2 ">
                <div className="pt-10">
                    <h3 className="text-2xl text-center font-bold">NLIC At a Glance</h3>
                </div>
                <div className="mt-2">
                    <img src={about} alt="" />
                </div>
                <div className="mt-2">
                    <p>The era of private sector Life Insurance business started in Bangladesh with the establishment of National Life Insurance Company Limited in the year 1985.</p>
                </div>
                <div>
                    <h3 className="text-xl mt-5 text-center font-bold">"The motto of the company is to ensure guarantee for a planned future of its policyholders."</h3>
                </div>
                <div className="mt-5">
                    <pre>
                        <span className="text-xl font-bold">Our Visions→</span><br/>

                        ►  To encourage and induce saving practice;<br/>

                        ►  To create and provide employment opportunity; &<br/>

                        ►  Capital formation at national level for investment.
                    </pre>
                </div>
                <div className="mt-5">
                    <pre>
                        <span className="text-xl font-bold">Our Slogan→</span><br/>

                        ► The slogan of the company is “Ghore Ghore NLI Jone Jone NLI”
                    </pre>
                </div>
                <div className="mt-16 space-y-6">
                    <p>The company has grown & developed massively and substantially over a period of about 38 years. The company has diversified its products to match customers' needs and preferences. Currently it provides multifarious life assurance products to cater the aspirations & needs as well as religious beliefs of the clients. Benefits to the policyholder of NLI are high as they are now enjoying high level rate of policy bonus compared to other competent companies.</p>
                    <p>The company has grown & developed massively and substantially over a period of about 38 years. The company has diversified its products to match customers' needs and preferences. Currently it provides multifarious life assurance products to cater the aspirations & needs as well as religious beliefs of the clients. Benefits to the policyholder of NLI are high as they are now enjoying high level rate of policy bonus compared to other competent companies.</p>
                    <p>The company has grown & developed massively and substantially over a period of about 38 years. The company has diversified its products to match customers' needs and preferences. Currently it provides multifarious life assurance products to cater the aspirations & needs as well as religious beliefs of the clients. Benefits to the policyholder of NLI are high as they are now enjoying high level rate of policy bonus compared to other competent companies.</p>
                </div>
            </div>
            <div className="border-2 p-10">
                <div className="border-2">
                    <div className="p-2 bg-violet-900 text-white text-2xl text-center">Latest News</div>
                </div>
            </div>
        </div>
    );
};

export default About;
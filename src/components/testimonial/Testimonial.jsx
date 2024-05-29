/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-pink-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://t3.ftcdn.net/jpg/03/53/59/46/360_F_353594684_Ca3p9RIc3xgQ1Y6ff7Jk6nVe54v9NbpQ.jpg"/>
                                <p className="leading-relaxed">I used to dread online shopping. Sifting through endless websites, comparing prices, and hoping for the best on sizing and quality was a major headache. Then I discovered E-bharat  website !From the moment I landed on the homepage, I was impressed. The website is clean, user-friendly, and easy to navigate. Finding the products I needed was a breeze, thanks to the well-organized categories and intuitive search bar..</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"></h2>
                                <p className="text-gray-500"></p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5GcFgSMCKbGEhLziaQSY7l6dcMfHuLq8F3Q&s"/>
                                <p className="leading-relaxed">Finding unique and stylish products having wide variety of range of fashion , home appliances etc. It has always been a struggle. Department stores all seem to carry the same boring selection, and boutiques often have limited options. Then I stumbled upon E-Bharat, and let me tell you, it's been a game-changer!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"> </h2>
                                <p className="text-gray-500"></p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEX5cTugUpDHXG4unGI0ro9KqY_klPW25i7g&s"/>
                                <p className="leading-relaxed">The quality of the products is  top-notch. I've purchased several items from different brands now, and everything has exceeded my expectations. The materials are high-quality, and the craftsmanship is impressive.i am very impress with there user friendly and simple interface the navigation to the pages and functionality and access to different things is also easy . Thanks for making our lifes.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">  </h2>
                                <p className="text-gray-500"> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
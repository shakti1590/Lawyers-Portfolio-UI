import React from "react";

const about = () => {
    return(
        <section className="bg-gray-100">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-black sm:text-4xl">About Us</h2>
                <p className="mt-4 text-grey-900 justify-between text-lg">Green House Association is dedicated to providing a comprehensive range of professional services tailored to meet the diverse needs of businesses and individuals. Our expertise spans across various domains including accounting, licensing, and regulatory compliance. With a commitment to excellence and a focus on client satisfaction, we ensure that our clients receive reliable and efficient services that empower them to achieve their goals.</p>
                <div className="mt-8">
                    <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span className="ml-2">&#8594;</span></a>
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
            </div>
        </div>
    </div>
</section>
    );
};
export default about;
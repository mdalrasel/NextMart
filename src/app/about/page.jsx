export default function AboutPage() {
    return (
        <div className="min-h-screen bg-base-200">
            <div className="max-w-5xl mx-auto px-6 py-12">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary">About Us</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        We are passionate about delivering high-quality products to our customers and making shopping easier, faster, and more enjoyable.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="card bg-base-100 shadow-xl p-6">
                        <h2 className="text-2xl font-semibold mb-3">🎯 Our Mission</h2>
                        <p className="text-gray-600">
                            Our mission is to provide premium quality products at affordable prices.
                            We aim to make your shopping experience seamless with trust, innovation, and customer care.
                        </p>
                    </div>
                    <div className="card bg-base-100 shadow-xl p-6">
                        <h2 className="text-2xl font-semibold mb-3">🚀 Our Vision</h2>
                        <p className="text-gray-600">
                            We envision becoming one of the top online marketplaces, offering a wide range of products with a strong focus on quality and customer satisfaction.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Team Member */}
                        <div className="card bg-base-100 shadow-xl p-6 text-center">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="CEO"
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">John Doe</h3>
                            <p className="text-gray-500">Founder & CEO</p>
                        </div>

                        <div className="card bg-base-100 shadow-xl p-6 text-center">
                            <img
                                src="https://randomuser.me/api/portraits/women/45.jpg"
                                alt="CTO"
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">Sarah Smith</h3>
                            <p className="text-gray-500">CTO</p>
                        </div>

                        <div className="card bg-base-100 shadow-xl p-6 text-center">
                            <img
                                src="https://randomuser.me/api/portraits/men/54.jpg"
                                alt="Manager"
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">Michael Johnson</h3>
                            <p className="text-gray-500">Product Manager</p>
                        </div>
                    </div>
                </div>
                {/* Contact Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center mb-10">📞 Contact Us</h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Contact Info */}
                        <div className="card bg-base-100 shadow-xl p-6">
                            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                            <p className="text-gray-600 mb-2">
                                Have questions? We'd love to hear from you!
                            </p>
                            <ul className="space-y-3">
                                <li>
                                    <strong>📍 Address:</strong> 123 Main Street, Dhaka, Bangladesh
                                </li>
                                <li>
                                    <strong>📧 Email:</strong> support@myshop.com
                                </li>
                                <li>
                                    <strong>📞 Phone:</strong> +880 1234-567890
                                </li>
                            </ul>
                        </div>

                        {/* Contact Form */}
                        <div className="card bg-base-100 shadow-xl p-6">
                            <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full"
                                    required
                                />
                                <textarea
                                    placeholder="Your Message"
                                    className="textarea textarea-bordered w-full"
                                    rows={4}
                                    required
                                ></textarea>
                                <button type="submit" className="btn btn-primary w-full">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600">
                        Thank you for choosing us. We promise to continue improving and delivering the best service possible. ❤️
                    </p>
                </div>
            </div>
        </div>
    );
}

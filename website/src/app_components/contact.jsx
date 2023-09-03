export default function Contact() {
    return(
        <div className="md:mx-20">
            <div className="text-lg text-center mb-3 font-bold">CONTACT</div>            
            <div className="text-center space-y-3">
                <p>Have questions? Need more information? Send me a message below.</p>
            
                <div className="w-full md:w-96 md:max-w-full mx-auto">
                    <div className="p-6 border border-gray-300 sm:rounded-md">
                        <form method="POST" action="https://public.herotofu.com/v1/8eb0f8c0-486a-11ee-b201-930d103a99ad">
                            <label className="block mb-6">
                                <span>Your name</span>
                                <input
                                type="text"
                                name="name"
                                className="
                                    block
                                    w-full 
                                    mt-1 p-1
                                    border-gray-300
                                    bg-gray-300
                                    text-gray-800
                                    rounded-md
                                    shadow-sm
                                    focus:border-indigo-300
                                    focus:ring
                                    focus:ring-indigo-200
                                    focus:ring-opacity-50
                                "
                                placeholder="Joe Bloggs"
                                />
                            </label>
                            <label className="block mb-6">
                                <span>Email address</span>
                                <input
                                name="email"
                                type="email"
                                className="
                                    block
                                    w-full p-1
                                    mt-1
                                    border-gray-300
                                    bg-gray-300
                                    text-gray-800
                                    rounded-md
                                    shadow-sm
                                    focus:border-indigo-300
                                    focus:ring
                                    focus:ring-indigo-200
                                    focus:ring-opacity-50
                                "
                                placeholder="joe.bloggs@example.com"
                                required
                                />
                            </label>
                            <label className="block mb-6">
                                <span>Message</span>
                                <textarea
                                name="message"
                                className="
                                    block
                                    w-full
                                    mt-1 p-1
                                    border-gray-300
                                    bg-gray-300
                                    text-gray-800
                                    rounded-md
                                    shadow-sm
                                    focus:border-indigo-300
                                    focus:ring
                                    focus:ring-indigo-200
                                    focus:ring-opacity-50
                                "
                                rows="5"
                                placeholder="Tell us what you're thinking about..."
                                ></textarea>
                            </label>
                            <div className="mb-6">
                                <button
                                type="submit"
                                className="
                                    py-3
                                    px-5
                                    bg-gray-300
                                    text-gray-800 font-bold
                                    rounded-lg
                                    transition-colors
                                    duration-150
                                    focus:shadow-outline
                                    hover:bg-indigo-800
                                "
                                >
                                Contact Us
                                </button>
                            </div>
                            <div>
                                <div className="mt-2 text-gray-700 text-right text-xs">
                                by
                                <a href="https://herotofu.com" className="hover:underline" target="_blank"
                                    >HeroTofu</a
                                >
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
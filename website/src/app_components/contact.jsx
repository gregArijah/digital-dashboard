export default function Contact() {
    return(
        <div className="opacity-20">
            <div className="text-lg text-center mb-3">CONTACT</div>            
            <div className="text-center space-y-3">
                <p>Have questions? Need more information? Send me a message below.</p>
                <form className="space-y-3">
                    <div className="flex flex-col">
                        <label className="text-left">Name</label>
                        <input 
                            disabled={true}
                            className="bg-gray-300 border-2 border-gray-300 rounded-md p-1 mb-1" 
                            type="text" 
                            placeholder="John Doe">
                        </input>
                        <label className="text-left">Email</label>
                        <input 
                            disabled={true}
                            className="bg-gray-300 border-2 border-gray-300 rounded-md p-1 mb-1" 
                            type="text">
                        </input>
                        <label className="text-left">Message</label>
                        <textarea
                            disabled={true} 
                            className="bg-gray-300 border-2 border-gray-300 rounded-md p-1 mb-1" 
                            type="text">
                        </textarea>
                    </div>
                    <button  disabled={true} className="bg-gray-300 text-black rounded-md p-1 px-2">Submit</button>
                </form>


            </div>
        </div>
    )
}
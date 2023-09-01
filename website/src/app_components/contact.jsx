export default function Contact() {
    return(
        <div className="opacity-20 md:mx-20">
            <div className="text-lg text-center mb-3">CONTACT</div>            
            <div className="text-center space-y-3">
                <p>Have questions? Need more information? Send me a message below.</p>
                <form className="space-y-3" action="https://public.herotofu.com/v1/8eb0f8c0-486a-11ee-b201-930d103a99ad" method="post" accept-charset="UTF-8">
                    
                    <div className="flex flex-col">
         
                        
                        <label for="name" className="text-left">Name</label>
                        <input 
                            name="Name" id="name" required
                            className="bg-gray-300 border-2 border-gray-300 rounded-md p-1 mb-1" 
                            type="text" 
                            placeholder="John Doe">
                        </input>
                        <label for="email" className="text-left">Email</label>
                        <input 
                            name="Email" id="email" required  
                            className="bg-gray-300 border-2 border-gray-300 rounded-md p-1 mb-1" 
                            type="email">
                        </input>
                        <label className="text-left">Message</label>
                        <textarea
                            name="_gotcha" tabindex="-1" autocomplete="off" 
                            className="bg-gray-300 border-2 border-gray-300 rounded-md p-1 mb-1" 
                            type="text"
                            rows="4"
                            >
                        </textarea>
                    </div>
                    <button type="submit" className="bg-gray-300 text-black rounded-md p-1 px-2">Submit</button>
                </form>
                <hr/>
                <form action="https://public.herotofu.com/v1/8eb0f8c0-486a-11ee-b201-930d103a99ad" method="post" accept-charset="UTF-8">
                    <div>
                        <label for="name">Your Name</label>
                        <input name="Name" id="name" type="text" required />
                    </div>
                    <div>
                        <label for="email">Your Email</label>
                        <input name="Email" id="email" type="email" required  />
                    </div>
                    <div>
                        <input type="submit" value="Download CTA" />
                        <div>
                        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
                        </div>
                    </div>
                </form>


            </div>
        </div>
    )
}
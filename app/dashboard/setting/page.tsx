export default function page() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-20 text-lg text-gray-500">
        <div className="text-primary underline underline-offset-4 font-semibold">Edit Profile</div>
        <div>Preferences</div>
        <div>Security</div>
      </div>

      <div className="flex gap-20 text-lg">
        <div className="w-50 h-50 bg-blue-500 rounded-full object-cover overflow-hidden"><img src="/pfp1.jpeg" alt="" /></div>
        
        <form className="SettingForm flex flex-col items-end gap-5 dark:text-white" action="">
          <div className="flex gap-30">
            <div className="flex flex-col gap-5 ">
              <label>
                <div>Your Name</div>
                <input className="" placeholder="Steven Zinex" type="Steven Zinex" />
              </label>

              <label>
                <div>Email</div>
                <input className="" placeholder="stevenzinex@gmail.com" type="Steven Zinex" />
              </label>

              <label>
                <div>Date of Birth</div>
                <input className="" placeholder="jan 23, 2010" type="Steven Zinex" />
              </label>

              <label>
                <div>Address</div>
                <input className="" placeholder="San Jose, California" type="Steven Zinex" />
              </label>

              <label>
                <div>Postal Code</div>
                <input className="" placeholder="45962" type="Steven Zinex" />
              </label>
            </div>

            <div className="flex flex-col gap-5 ">
              <label>
                <div>Username</div>
                <input className="" placeholder="Stiven" type="Steven Zinex" />
              </label>

              <label>
                <div>Password</div>
                <input className="" placeholder="********" type="Steven Zinex" />
              </label>

              <label>
                <div>Present Address</div>
                <input className="" placeholder="San Jose, California" type="Steven Zinex" />
              </label>

              <label>
                <div>Country</div>
                <input className="" placeholder="USA" type="Steven Zinex" />
              </label>

              <label>
                <div>City</div>
                <input className="" placeholder="San Jose" type="Steven Zinex" />
              </label>

            </div>
          </div>

          <button className="bg-primary w-40  py-2 px-5 text-white font-semibold rounded-2xl focus:outline-2 focus:outline-blue-400" type="button">Save</button>
          
        </form>
      </div>
    </div>
  )
}

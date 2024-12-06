export default function Page() {
return(
    <>

    <h1 className="pt-44 text-center text-4xl">Login</h1>
    <div>
        <form className="flex flex-col items-center">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="border-2 border-gray-500 rounded-md p-1 w-80" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className="border-2 border-gray-500 rounded-md p-1 w-80" />
            <button type="submit" className="bg-blue-500 text-white rounded-md p-1 w-80 mt-2">Login</button>
        </form>
    </div>

    </>
)

}
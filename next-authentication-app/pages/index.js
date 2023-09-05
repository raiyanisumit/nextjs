import { useSession, signIn, signOut} from "next-auth/react"

export default  function Home() {

   const session = useSession();

   if(session.data == null){
    return <button onClick={signIn}>Login</button>
   }
    
    return (
        <>
        <h1>Hello {session.data.user.name}</h1>
        <button onClick={signOut}>LogOut</button>
        </>
    )
}
import { useEffect } from "react"

export function Bar(){

    function handleCallbakckResponse(response) {
      console.log("tokens", response.credential)
    }

    useEffect(()=>{
        /* global google */
      google.accounts.id.initialize({
        client_id:"444281897399-28mi1f2shv7o0sim429lfsv8v8fon9id.apps.googleusercontent.com",
        callback: handleCallbakckResponse
      })

      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline", size:"large"},
      )
    },[])

    return(
        <div>
         <div id="signInDiv"></div>
          vtnc
        </div>
    )
}
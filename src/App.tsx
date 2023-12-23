import { useRef } from "react";
import { Introduction } from "./componenets/introduction/Introduction";
import { Project } from "./componenets/project/Project";
import { Games } from "./componenets/games/Games";
import { Androids } from "./componenets/androids/Androids";
import { Forms } from "./componenets/forms/Forms";
import { ProjectMobile } from "./componenets/project/ProjectMobile";
import { GamesMobile } from "./componenets/games/GamesMobile";
import { AndroidsMobile } from "./componenets/androids/AndroidsMobile";
import { IntroductionMobile } from "./componenets/introduction/IntroductionMobile";

function redirectToApp() {
    const searchParams = new URLSearchParams(window.location.search);

    const bookingId = searchParams.get('bookingId')
    const ownerId = searchParams.get('ownerId')

    const appUrl ='phygital://share?bookingId=${bookingId}&ownerId=${ownerId}'

    if (navigator.userAgent.match(/Android/i))
        document.location = appUrl;
    else
        window.location.replace(appUrl);

}

redirectToApp()

function App() {
    const windowWidth: any = useRef(window.innerWidth);

    return (
        <div className="App">
            { windowWidth.current <= 930 ?
                (
                    <>
                        <IntroductionMobile />

                        <ProjectMobile />

                        <GamesMobile />

                        <AndroidsMobile />

                        <Forms />
                    </>
                ) :
                (
                    <>
                        <Introduction />

                        <Project />

                        <Games />

                        <Androids />

                        <Forms />
                    </>
                ) }
        </div>
    );
}

export default App;

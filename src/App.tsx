import { type FC } from "react"
import { Container, Header } from "./components"
import PictureList from "./dataComponents/PictureList"

const App: FC = () => {

    return (
        <>
            <Header />
            <Container>
                <PictureList />
            </Container>
        </>
    )
}

export default App

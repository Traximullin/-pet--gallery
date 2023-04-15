import { type FC } from "react"
import { Container, Header, List } from "./components"
import useInfiniteScroll from "./hooks/useInfiniteScroll"

const App: FC = () => {
    const { loadMoreRef, page, } = useInfiniteScroll()

    return (
        <>
            <div id="scrollArea"></div>
            <Header />
            <Container>
                <List/>
            </Container>
            <div ref={loadMoreRef}>SSS</div>
        </>
    )
}

export default App

import { type FC, useEffect } from "react"
import { Card, List } from "../components"
import useInfiniteScroll from "../hooks/useInfiniteScroll"
import { fetchPicture } from "../store/features/picture/picture.service"
import { useAppDispatch, useAppSelector } from "../store/hooks"

const PictureList: FC = () => {
    const { loadMoreRef, page, } = useInfiniteScroll()

    const dispatch = useAppDispatch()

    const { data: pictures, isLoading, isError, } = useAppSelector(state => state.picture)

    useEffect(() => {
        void dispatch(fetchPicture(page))
    }, [dispatch, page])

    return (
        <>
            {page} {String(isLoading)}
            <List>
                {
                    pictures.map(picture => (
                        <Card
                            key={picture.id}
                            src={picture.url}
                            alt={picture.title}
                        />
                    ))
                }
            </List>
            {isLoading && <p>Loading...</p>}
            {
                <div ref={loadMoreRef} style={{ background: "red", height: "10px", }}/>
            }
        </>
    )
}

export default PictureList

import { type FC, useEffect } from "react"
import { Card, List } from "../components"
import useInfiniteScroll from "../hooks/useInfiniteScroll"
import { fetchPicture } from "../store/features/picture/picture.service"
import { toggleLike } from "../store/features/picture/pictureSlice"
import { useAppDispatch, useAppSelector } from "../store/hooks"

const PictureList: FC = () => {
    const { loadMoreRef, page, } = useInfiniteScroll()

    const dispatch = useAppDispatch()

    const { data: pictures, isLoading, isError, } = useAppSelector(state => state.picture)

    const handleToggleLike = (id: number): void => {
        dispatch(toggleLike(id))
    }

    useEffect(() => {
        void dispatch(fetchPicture(page))
    }, [dispatch, page])

    return (
        <>
            <List>
                {
                    pictures.map(picture => (
                        <Card
                            onClick={() => { handleToggleLike(picture.id) }}
                            like={picture.like}
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

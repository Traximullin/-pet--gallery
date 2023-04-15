
import { type MutableRefObject, useCallback, useEffect, useRef, useState } from "react"

const useInfiniteScroll = (): {
    loadMoreRef: MutableRefObject<null>
    page: number
} => {
    const [page, setPage] = useState(1)
    const loadMoreRef = useRef(null)

    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        const [target] = entries
        if (target.isIntersecting) {
            setPage((prev) => prev + 1)
        }
    }, [])

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        }
        const observer = new IntersectionObserver(handleObserver, option)

        if (loadMoreRef.current) {
            console.log("resss")
            observer.observe(loadMoreRef?.current)
        }
    }, [handleObserver])

    return {
        loadMoreRef,
        page,
    }
}

export default useInfiniteScroll

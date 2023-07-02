export type Photo = {
    name: string; 
    url: string; 
}

export type PhotoItemProps = Photo & {
    handleClick: (value: string) => void
}
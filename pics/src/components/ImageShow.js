export default function ImageShow({ image }){
    return (
        <img alt={image.alt_description} src={image.urls.small} style={{ width: "100%"}} />
    )
}
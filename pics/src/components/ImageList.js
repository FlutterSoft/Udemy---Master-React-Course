import ImageShow from './ImageShow'
import './ImageList.css'

export default function ImageList({ images }){
    const renderedImages = images.map( img => {
        return (
            <ImageShow image={img} key={img.id}/>
        )
    })
    console.log(images)

    return (
        <div className="image-list">
            {renderedImages}
        </div>
    )
}
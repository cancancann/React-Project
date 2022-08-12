import React from "react";

const ImageLıst = (props) => {

    const images = props.images.map(image => {
        return <img alt= "yükleniyor"key={image.id} src={image.webformatURL} />
    })

    return(
        <div className="ui segment">
            { images }
        </div>
    )

}

export default ImageLıst;
import { FC } from "react"
import Image from "next/image"
import ProductAvailableCount from "./ProductAvailableCount"
import Stars from "./Stars"
import ProductItemAmoutPrice from "./ProductItemAmoutPrice"
import ProductItemReviewsCount from "./ProductItemReviewsCount"

type Props = {
    title?: string
    image: string
    price?: number
    availableCount: number
    feedbackCount?: number
    filledCount: number
    children?: React.ReactElement | React.ReactElement[]
    actionButtons?: React.ReactElement[] | React.ReactElement

}

const ProductItem: FC<Props> = ({
    title,
    image,
    price,
    availableCount,
    filledCount,
    actionButtons
}) => {
    return (
        <div className="product-item">
            <div className="product-item__image">
                <Image src={image} alt="me" width="112" height="130" />
            </div>
            <div className="product-item__info">
                <div className="product-item__info_top">
                    <div className="product-item__title">{title}</div>
                    <div className="product-item__action">
                        {actionButtons}
                    </div>
                </div>
                <div className="product-item__info_center">
                    <strong className="product-item__price">{price} ₽</strong>
                    <Stars
                        filledCount={filledCount}
                        className="stars"
                    ></Stars>
                    <ProductItemReviewsCount count={10}></ProductItemReviewsCount>
                </div>
                <div className="product-item__info_bottom">

                    <ProductAvailableCount count={availableCount}></ProductAvailableCount>
                    <ProductItemAmoutPrice amount={1}></ProductItemAmoutPrice>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
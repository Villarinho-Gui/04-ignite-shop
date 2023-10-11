import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>


            <ProductDetails>
                <h1>camiseta x</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, animi ducimus! Aliquam similique reiciendis non culpa debitis. Consectetur dicta, nesciunt non ullam deleniti tenetur minus, voluptatibus iste ut itaque adipisci?</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}
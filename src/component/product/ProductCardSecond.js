import { Box } from "@chakra-ui/react";
import Discount from "@component/common/Discount";
import Price from "@component/common/Price";
import Stock from "@component/common/Stock";
import ProductModal from "@component/modal/ProductModal";
import useAddToCart from "@hooks/useAddToCart";
import useAsync from "@hooks/useAsync";
import SettingServices from "@services/SettingServices";
import { notifyError } from "@utils/toast";
import { showingTranslateValue } from "@utils/translate";
import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { IoAdd, IoBagAddSharp, IoRemove } from "react-icons/io5";
import { useCart } from "react-use-cart";
// Setting Product Type Two
const ProductCardSecond = ({ product, attributes }) => {
    const { items, addItem, updateItemQuantity, inCart } = useCart();
    const { handleIncreaseQuantity } = useAddToCart();
    const { lang } = useTranslation("ns1"); // default namespace (optional)
    const [modalOpen, setModalOpen] = useState(false);

    const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);

    const currency = globalSetting?.default_currency || "$";

    // console.log('attributes in product cart',attributes)

    const handleAddItem = (p) => {
        if (p.stock < 1) return notifyError("Insufficient stock!");

        if (p?.variants?.length > 0) {
            setModalOpen(!modalOpen);
            return;
        }
        const newItem = {
            ...p,
            title: showingTranslateValue(p?.title, lang),
            id: p._id,
            variant: p.prices,
            price: p.prices.price,
            originalPrice: product.prices?.originalPrice,
        };
        addItem(newItem);
    };

    const handleModalOpen = (event, id) => {
        setModalOpen(event);
    };
    return (
        <>
            {modalOpen && (
                <ProductModal
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    product={product}
                    currency={currency}
                    attributes={attributes}
                />
            )}
            <Box overflow={'hidden'}>

            </Box>
        </>
    )
}

export default ProductCardSecond
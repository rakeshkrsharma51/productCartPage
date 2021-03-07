import { FinanceDetails } from './finance.details';
import { ItemAmount } from './item.amount';
import { Store } from './store';

export interface CartItems {
    bmFinanceDetail?: FinanceDetails;
    brandName?: string;
    bundleSku?: boolean;
    electronicShipping?: boolean;
    freeShipping?: boolean;
    imageUrl?: string;
    isGetItem?: boolean;
    isSubstituteItem?: boolean;
    ispuAvailable?: boolean;
    itemAmount?: ItemAmount;
    itemId?: string;
    itemName?: string;
    itemQuantity?: string;
    modelCode?: string;
    modelNumber?: string;
    pdpUrl?: string;
    productId?: string;
    productType?: string;
    seePriceAtCheckout?: boolean;
    shipInventoryAvailable?: boolean;
    shippingMethod?: string;
    shippingType?: string;
    storeId?: string;
    stores?: [Store];
    variantId?: string;
    warrantyItem?: boolean;
    wishlist: boolean;
}

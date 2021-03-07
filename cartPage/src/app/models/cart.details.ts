import { CartItems } from './cart.items';
import { CartSummary } from './cart.summary';

export interface CartDetails {
    cartItems?: [CartItems];
    cartSummary?: CartSummary;
    cartId: string;
    showCheckoutButton: boolean;
    status: number;
    statusMessage?: string;
    zipCode?: string;
}

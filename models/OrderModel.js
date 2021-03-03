import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            // required: true,
            ref: "User",
        },
        orderItems: [
            {
                name: { type: String, required: true },
                cartQty: { type: Number, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "Product",
                },
            },
        ],
        shippingAddress: {
            firstName: {
                type: String,
            },
            lastName: {
                type: String,
            },
            address1: {
                type: String,
                // required: true,
            },
            address2: {
                type: String,
                // required: true,
            },
            city: {
                type: String,
                // required: true,
            },
            addressState: {
                type: String,
                // required: true,
            },
            postalCode: {
                type: String,
                // required: true,
            },
            country: {
                type: String,
                // required: true,
            },
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        paymentResult: {
            id: { type: String },
            status: { type: String },
            update_time: { type: String },
            email_address: { type: String },
        },
        taxPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        shippingPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        isPaid: {
            type: Boolean,
            required: true,
            default: false,
        },
        paidAt: {
            type: Date,
        },
        isShipped: {
            type: Boolean,
            required: true,
            default: false,
        },
        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },
        deliveredAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;

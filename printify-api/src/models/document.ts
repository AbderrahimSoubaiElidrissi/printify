import { Document, Schema, model } from "mongoose";


export type DocumentModel = Document & {
    filename: string;
    printConfig: Object;
    pagesNumber: Number;
    printHistory: Array<Object>;
    userId: string;
};

const documentSchema = new Schema(
    {
        filename: { type: String, required: true },
        printConfig: { type: Object, required: true },
        pagesNumber: Number,
        deliveryAddress: Object,
        printHistory: [{ type: Object }],
        userId: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    { timestamps: true }
);


export default model("Document", documentSchema);

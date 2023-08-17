import { deleteProduct, getProductById, updateProduct } from "@/lib/data"
import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response) => {
    try {
        const id = req.url.split('products/')[1];
        console.log(id)

        const product = getProductById(id)
        if (!product) {
            return NextResponse.json({ message: "NOT FOUND", error: "Product not found" }, {
                status: 404,
            })
        }
        return NextResponse.json({ message: "OK", product }, {
            status:200,
        })
    } catch (error) {
        return NextResponse.json({ message: "ERROR", error }, {
            status: 500,
        })
    }

    
}


export const POST = async (req: Request, res: Response) => {
    console.log("POST")

    // CREATE PRODUCT
}

export const PUT = async (req: Request, res: Response) => {
    try {
        const { name, price, description } = await req.json();
        const id = req.url.split('products/')[1];
        updateProduct(id, name, price, description)
        return NextResponse.json({ message: "OK"}, {
            status: 200,
        })
    } catch (error) {
        NextResponse.json({ message: "ERROR", error }, {
            status:500,
        })
    }



    // UPDATE PRODUCT
}

export const DELETE = async (req: Request, res: Response) => {
    try {
        const id = req.url.split('products/')[1];
        deleteProduct(id)
        return NextResponse.json({ message: "OK"}, {
            status: 200,
        })
    } catch (error) {
        NextResponse.json({ message: "ERROR", error }, {
            status:500,
        })
    }
}

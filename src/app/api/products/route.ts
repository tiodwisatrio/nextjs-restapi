import { addProduct, getProducts } from "@/lib/data"
import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response) => {
    try {
        const products = getProducts();
        return NextResponse.json({ message: "OK", products }, {
            status: 200,
        })
    } catch (error) {
        return NextResponse.json({ message: "ERROR", error }, {
            status: 500,
        })
    }
}


export const POST = async (req: Request, res: Response) => {
    const { name, price, description } = await req.json()
    try {
        const products = { name, price, description, id: Date.now().toString(), date: new Date() }
        addProduct(products)
        return NextResponse.json({ message: "OK", products }, {
            status: 200,
        })
    } catch (error) {
        return NextResponse.json({ message: "ERROR", error }, {
            status: 500,
        })
    }
}
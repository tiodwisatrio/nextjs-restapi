import { addCustomer, getCustomers } from "@/lib/customers"
import { NextResponse } from "next/server";


export const GET = async (req: Request, res: Response) => {
    try {
        const customers = getCustomers();
        return NextResponse.json({ message: "OK", customers }, {
            status: 200,
        })
    } catch (error) {
        return NextResponse.json({ message: "ERROR", error }, {
            status: 500,
        })
    }
}

export const POST = async (req: Request, res: Response) => {
    const { name, age, address } = await req.json()
    try {
        const customers = { name, age, address, id: Date.now().toString(), createdAt: new Date() }
        addCustomer(customers)
        return NextResponse.json({ message: "OK", customers }, {
            status: 200,
        })
    } catch (error) {
        return NextResponse.json({ message: "ERROR", error }, {
            status: 500,
        })
    }
 }